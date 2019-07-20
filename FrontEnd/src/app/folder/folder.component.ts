import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { BookmarkService } from "../shared/bookmark.service";
import { Folder } from '../shared/folder.model';
import { Bookmark } from '../shared/bookmark.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
export class FolderComponent implements OnInit {
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
  constructor(private form : FormBuilder, private serv : BookmarkService) {
  }
  
  /**
   * Important variables below
   */
  @Input() FolderData : Folder;
  @ViewChild('CancelButton', {static : false}) cancel : ElementRef<HTMLElement>;
  IsBookmarkOpen : boolean = false;
  BookmarkHash : any = {};
  RequestResponse : string = undefined;

  get bookURL() {return this.BookmarkFormGroup.get('bookURL')};
  get Description() {return this.BookmarkFormGroup.get('Description')};

  ngOnInit() {
    this.RequestResponse = undefined;
    if(this.FolderData.Bookmarks != undefined){
      this.FolderData.Bookmarks.forEach(b => {
        if(this.BookmarkHash[b.Id] == undefined){
          this.BookmarkHash[b.Id] = false;
        }
      });
    }
    console.log(this.BookmarkHash);
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
      this.RequestResponse = "Contacting database and processing request for bookmark addition"
      let res = await this.serv.SubmitNewBookmark(book);
      resolve(res);
    });
    prom.then(
      (res : Observable<Bookmark>) => {
        this.RequestResponse = "Request was sent successfully, processing response.";
        res.subscribe((Bookmark : Bookmark) => {
          console.log(Bookmark);
          this.FolderData.Bookmarks.push(Bookmark);
          this.FolderData.Bookmarks = this.FolderData.Bookmarks.sort((a,b) => {return a.URL.localeCompare(b.URL)});
          this.RequestResponse = undefined;
          this.cancel.nativeElement.click();
          this.ngOnInit();
        });
      }
    );
    prom.catch(
      (fail) => {
        fail.subscribe((e : HttpErrorResponse)=> {
          console.log(e.message);
          console.log(e.error);
          this.RequestResponse = "Sorry, the request was not processed successfully."
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
