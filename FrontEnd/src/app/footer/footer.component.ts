import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Folder } from "../shared/folder.model";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  FolderFormGroup = this.form.group({
    FolderName: [
      "",
      [Validators.required, Validators.minLength(1), Validators.maxLength(40)]
    ],
    FolderDescription: ["", [Validators.maxLength(200)]]
  });
  constructor(private form: FormBuilder) {}

  get FolderName() {
    return this.FolderFormGroup.get("FolderName");
  }

  get FolderDescription() {
    return this.FolderFormGroup.get("FolderDescription");
  }
  ngOnInit() {
    console.log(this.FolderFormGroup);
    console.log(this.FolderName);
    console.log(this.FolderName.errors);
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
  public OnSubmit(event : DocumentEvent) {}
}
