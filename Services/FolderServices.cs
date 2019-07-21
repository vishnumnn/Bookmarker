﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Services
{
    public class FolderServices
    {
        Context cont;
        public FolderServices(Context context)
        {
            cont = context;
        }
        public async Task<List<FolderEntity>> GetAllFolders()
        {
            return await cont.Folders.Include(folder => folder.Bookmarks).ToListAsync();
        }

        public async Task<Bookmark> SubmitBookmark(Bookmark bookmark)
        {
            await cont.AddAsync(bookmark);
            await cont.SaveChangesAsync();
            return bookmark;
        }
        public async Task<FolderEntity> SubmitFolder(FolderEntity folder)
        {
            await cont.AddAsync(folder);
            await cont.SaveChangesAsync();
            return folder;
        }
        
        public async Task<Bookmark> DeleteBookmark(int id)
        {
            Bookmark book = cont.Bookmarks.Single(a => a.Id == id);
            cont.Remove(book);
            await cont.SaveChangesAsync();
            return book;
        }
    }
}
