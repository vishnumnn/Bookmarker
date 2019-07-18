import { Component } from '@angular/core';
import { Folder } from './shared/folder.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FrontEnd';
  folder : Folder;

}
