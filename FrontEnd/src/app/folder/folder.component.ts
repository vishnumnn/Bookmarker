import { Component, OnInit, Input } from "@angular/core";
import { BookmarkService } from "../shared/bookmark.service";
import { Folder } from '../shared/folder.model';

@Component({
  selector: "app-folder",
  templateUrl: "./folder.component.html",
  styleUrls: ["./folder.component.css"]
})
export class FolderComponent implements OnInit {
  
  constructor() {
  }
  @Input() FolderData : Folder;
  ngOnInit() {}
}
