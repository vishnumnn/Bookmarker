import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Folder } from './folder.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  readonly getFolderURL : string = "https://localhost:44384/Home/Folders";
  constructor(private http: HttpClient) { }
  
  public GetAllFolders(){
    return this.http.get<Folder[]>(this.getFolderURL).pipe(
      map(result => result.sort((e,f) => {
        return e.Label.localeCompare(f.Label);
      }))
    );
  }
}
