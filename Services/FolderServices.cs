using System;
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
        public async Task<List<Folder>> GetAllFolders()
        {
            return await cont.Folders.ToListAsync();
        }

        public async Task<int> SubmitFolder(Folder folder)
        {
            await cont.AddAsync(folder);
            return await cont.SaveChangesAsync();
        }
    }
}
