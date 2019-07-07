import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileSystemComponent } from './file-system/file-system.component';
import { FolderComponent } from './folder/folder.component';
import { BookmarkService } from './bookmark.service';
@NgModule({
  declarations: [
    AppComponent,
    FileSystemComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
