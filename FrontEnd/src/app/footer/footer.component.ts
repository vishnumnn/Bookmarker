import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";
import {
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Folder } from "../shared/folder.model";
import { BookmarkService } from "../shared/bookmark.service"
import { reject } from 'q';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})

export class FooterComponent implements OnInit {

 /**
  * FormGroup
  */
  FolderFormGroup = this.form.group({
    FolderName: [
      "",
      [Validators.required, Validators.minLength(1), Validators.maxLength(40)]
    ],
    FolderDescription: ["", [Validators.maxLength(200)]]
  });

  /**
   * Various important class level variables
   */
  RequestResponse : String;
  @Output() public postEvent = new EventEmitter();
  @ViewChild('CancelButton', {static : false}) close : ElementRef<HTMLElement>; 
  
  constructor(private form: FormBuilder, private service : BookmarkService) {}

  get FolderName() {
    return this.FolderFormGroup.get("FolderName");
  }

  get FolderDescription() {
    return this.FolderFormGroup.get("FolderDescription");
  }
  ngOnInit() {
    this.RequestResponse = undefined;

  }
  /**
   * resetArea.
   */
  public resetArea(input: HTMLInputElement) {
    input.style.height = "150px";
    input.style.width = "450px";
  }

  /**
   * OpenPostRequest
   */
  public OnSubmit() {
    this.RequestResponse = "...Processing Your Request";
    let prom = new Promise(async (resolve, reject) => {
    let folder = {
      Id : undefined,
      Label : this.FolderName.value,
      Description : this.FolderDescription.value
    }
    this.RequestResponse = "...Contacting Database"
    let obs = await this.service.SubmitNewFolder(folder);
    this.RequestResponse = undefined;
    resolve(obs);
    });

    prom.then(
      (res : Observable<Folder>) => {
        res.subscribe((folder : Folder) => {
          this.RequestResponse = undefined;
          this.postEvent.emit(folder);
          this.close.nativeElement.click();
        })
      } 
    );

    prom.catch(
      fail => fail.subscribe((e : HttpErrorResponse) => {
        this.RequestResponse = "...Request Failed";
        console.log(e);
      })
    );
  }


}
