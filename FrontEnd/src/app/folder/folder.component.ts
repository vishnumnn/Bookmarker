import { Component, OnInit, Input, Directive, HostBinding } from "@angular/core";
import { BookmarkService } from "../shared/bookmark.service";
import { Folder } from '../shared/folder.model';

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
  
  constructor() {
  }
  
  /**
   * Important variables below
   */
  @Input() FolderData : Folder;
  IsBookmarkOpen : boolean = false;
  ngOnInit() {}
  
  TriggerBookmarks(){
    this.IsBookmarkOpen = !this.IsBookmarkOpen;
    console.log(this.FolderData);
    console.log(this.IsBookmarkOpen);
    this.FolderData.Bookmarks.forEach((b) => console.log(b.URL));
  }
}
