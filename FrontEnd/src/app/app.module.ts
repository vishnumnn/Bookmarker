import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FileSystemComponent } from './file-system/file-system.component';
import { FolderComponent } from './folder/folder.component';
import { BookmarkService } from './shared/bookmark.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSystemComponent,
    FolderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
