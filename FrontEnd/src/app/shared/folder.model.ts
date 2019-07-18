import { Bookmark } from './bookmark.model';

export class Folder {
    Id : number;
    Label : string;
    Description : string;
    Bookmarks?: Bookmark[];
}
