using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Interfaces
{
    public class Bookmark
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string URL { get; set; }
        public int FolderId { get; set; }
        public FolderEntity Folder { get; set; }
    }
}
