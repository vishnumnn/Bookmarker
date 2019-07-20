import { Folder } from './folder.model';

export class Bookmark {
    Id : number;
    URL : string;
    Description : string;
    FolderId : number;
    Folder?: Folder;
}
