import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileSystemComponent } from './file-system/file-system.component';
import { FolderComponent } from './folder/folder.component';
import { BookmarkService } from './shared/bookmark.service';
@NgModule({
  declarations: [
    AppComponent,
    FileSystemComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
