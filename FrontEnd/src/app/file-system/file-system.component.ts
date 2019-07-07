import { Component, OnInit } from "@angular/core";
import { BookmarkService } from "../shared/bookmark.service";
import { Folder } from "../shared/folder.model";

@Component({
  selector: "app-file-system",
  templateUrl: "./file-system.component.html",
  styleUrls: ["./file-system.component.css"]
})
export class FileSystemComponent implements OnInit {
  folders: Folder[];

  constructor(private service: BookmarkService) {}
  
  ngOnInit() {}
}
