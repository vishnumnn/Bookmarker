import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Folder } from './folder.model';
import {Bookmark} from './bookmark.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  headers : HttpHeaders;
  readonly URL : string = "https://localhost:44384/Home/Folders";
  readonly URL2 : string = "https://localhost:44384/Home/Bookmarks";
  readonly URL3 : string = "https://localhost:44384/Home/Delete";
  readonly URL4 : string = "https://localhost:44384/Home/Update"; 

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  
  public GetAllFolders(){
    var res =  this.http.get<Folder[]>(this.URL).pipe(
      map(result => result.sort((e,f) => {
        return e.Label.localeCompare(f.Label);
      }))
    );
    return res;
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

  /**
   * DeleteBookmark
   */
  public DeleteBookmark(Bookmark : Bookmark) {
    console.log(`${this.URL3}/${Bookmark.Id}`);
    return this.http.delete(`${this.URL3}/${Bookmark.Id}`, {headers : this.headers});
  }

  /**
   * UpdateBookmark
   */
  public UpdateFolder(folder : Folder){
    return this.http.post<Folder>(this.URL4,folder);
  }
}
