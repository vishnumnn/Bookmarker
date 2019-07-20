import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Folder } from './folder.model';
import {Bookmark} from './bookmark.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  readonly URL : string = "https://localhost:44384/Home/Folders";
  readonly URL2 : string = "https://localhost:44384/Home/Bookmarks";

  constructor(private http: HttpClient) { }
  
  public GetAllFolders(){
    return this.http.get<Folder[]>(this.URL).pipe(
      map(result => result.sort((e,f) => {
        return e.Label.localeCompare(f.Label);
      }))
    );
  }

  /**
   * SubmitNewFolder
   */
  public SubmitNewFolder(folder : Folder) {
    return this.http.post<Folder>(this.URL, folder); 
  }

  /**
   * SubmitNewBookmark
   */
  public SubmitNewBookmark(Bookmark : Bookmark){
    return this.http.post<Bookmark>(this.URL2, Bookmark);
  }
}
