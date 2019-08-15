import { Component, OnInit,OnChanges, Input, ViewChild, ElementRef, ApplicationRef } from "@angular/core";
import { BookmarkService } from "../shared/bookmark.service";
import { Folder } from '../shared/folder.model';
import { Bookmark } from '../shared/bookmark.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-folder",
  templateUrl: "./folder.component.html",
  styleUrls: ["./folder.component.css"],
  host: {
    '[class.col-12]' : 'IsBookmarkOpen', 
    '[class.col]' : 'IsBookmarkOpen'
  }
})
export class FolderComponent implements OnInit, OnChanges {
  /**
  * FormGroup
  */
 BookmarkFormGroup = this.form.group({
  bookURL: [
    "",
    [Validators.required]
  ],
  Description: ["", [Validators.maxLength(200)]]
  });

    /**
  * FormGroup
  */
 EditFormGroup = this.form.group({
  EditURL: [""],
  EditDescription: [""]
  });

  constructor(private form : FormBuilder, private serv : BookmarkService) {
  }

  /**
   * Important variables below
   */
  @Input() FolderData : Folder;
  @ViewChild('CancelButton', {static : false}) cancel : ElementRef<HTMLElement>;
  @ViewChild('CloseButton', {static : false}) close : ElementRef<HTMLElement>;
  IsBookmarkOpen : boolean = false;
  BookmarkHash : any = {};
  RequestResponse : string = undefined;

  get bookURL() {return this.BookmarkFormGroup.get('bookURL')};
  get Description() {return this.BookmarkFormGroup.get('Description')};

  get EditURL() {return this.EditFormGroup.get('EditURL')};
  get EditDescription() {return this.EditFormGroup.get('EditDescription')};

  ngOnInit() {
  }

  ngOnChanges(){
    this.RequestResponse = undefined;
    if(this.FolderData.Bookmarks != undefined){
      this.FolderData.Bookmarks.forEach(b => {
        if(this.BookmarkHash[b.Id] == undefined){
          this.BookmarkHash[b.Id] = false;
        }
      });
      this.FolderData.Bookmarks.sort((a,b) => {return a.URL.localeCompare(b.URL)});
    }
  }

  /**
   * resetArea.
   */
  public resetArea(input: HTMLInputElement) {
    input.style.height = "150px";
    input.style.width = "450px";
  }

  OnSubmit(){
    let prom = new Promise(async (resolve, reject) => {
      let book = {
        Id : undefined,
        URL : this.bookURL.value,
        Description : this.Description.value,
        FolderId : this.FolderData.Id
      }
      let res = await this.serv.SubmitNewBookmark(book);
      resolve(res);
    });
    prom.then(
      (res : Observable<Bookmark>) => {
        res.subscribe((Bookmark : Bookmark) => {
          console.log(Bookmark);
          this.FolderData.Bookmarks.push(Bookmark);
          this.FolderData.Bookmarks = this.FolderData.Bookmarks.sort((a,b) => {return a.URL.localeCompare(b.URL)});
          this.cancel.nativeElement.click();
        });
      }
    );
    prom.catch(
      (fail) => {
        fail.subscribe((e : HttpErrorResponse)=> {
          console.log(e.message);
          console.log(e.error);
          this.RequestResponse = "Sorry, the request was not processed successfully."
          this.cancel.nativeElement.click();
        });
      });
  }

  EditSubmit(){
    let folder = {
      Id : this.FolderData.Id,
      Label : this.EditURL.value,
      Description : this.EditDescription.value
    }
    this.serv.UpdateFolder(folder as Folder).subscribe(
      (Fold : Folder) => {
        this.FolderData.Label = Fold.Label;
        this.FolderData.Description = Fold.Description;
        this.close.nativeElement.click();
        console.log(`${this.FolderData.Id}  ${Fold.Id}`)
      }
    )
  }
  
  Delete(bookmark : Bookmark){
    let prom = new Promise(async (resolve) => {
      let book = {
        Id : bookmark.Id,
        URL : bookmark.URL,
        Description : bookmark.Description,
        FolderId : bookmark.FolderId
      }
      let x = this.serv.DeleteBookmark(book);
      resolve(x);
    });

    prom.then(
      (res : Observable<Bookmark>) => {
        res.subscribe(res => {
          this.FolderData.Bookmarks = this.FolderData.Bookmarks.filter(e => {
            return e.Id != res.Id;
          });
        });
      });

    prom.catch(
      err => {err.subscribe((err : HttpErrorResponse) => {
        console.log(`Errored out! ${err.message}`);
      });
    });
  }

  TriggerBookmarks(){
    this.IsBookmarkOpen = !this.IsBookmarkOpen;
  }

  TriggerDescription(b : Bookmark) {
    if(this.BookmarkHash[b.Id] != undefined){
      this.BookmarkHash[b.Id] = !this.BookmarkHash[b.Id];
    }else{
      console.log("the bookmark's value doesn't exist in the hash.");
    }
  }
}
