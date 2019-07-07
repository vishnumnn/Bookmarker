import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  readonly getFolderURL : string = "http://localhost:44384/Home/Folders";
  constructor(private http: HttpClient) { }
  
  GetAllFolders(){
    return this.http.get(this.getFolderURL);
  }
}
