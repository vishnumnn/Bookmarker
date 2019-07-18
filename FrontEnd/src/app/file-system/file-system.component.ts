import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { BookmarkService } from "../shared/bookmark.service";
import { Folder } from "../shared/folder.model";
import 'rxjs/'
@Component({
  selector: "app-file-system",
  templateUrl: "./file-system.component.html",
  styleUrls: ["./file-system.component.css"]
})
export class FileSystemComponent implements OnInit, OnChanges {

  /**
   * Important variables
   */
  folders: Folder[] = [];
  @Input('inputFromFooter') folder : Folder;

  constructor(private service: BookmarkService) {}

  ngOnInit() {
    this.SubscribeToFolders();
  }

  ngOnChanges(){
    if(this.folder != undefined){
      this.folders.push(this.folder);
      this.folders.sort((a,b) => {
        return (a.Label).localeCompare(b.Label);
      })
    }
  }

  /**
   * SubscribeToFolders
   */
  public SubscribeToFolders() {
    this.service.GetAllFolders().subscribe(
      (res : Folder[]) => {
        console.log(res);
        this.folders = res;
      }
    )
  }
}
