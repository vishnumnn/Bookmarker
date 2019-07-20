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
        [Column(TypeName = "varchar(200)")]
        public string Description { get; set; }
        public int FolderId { get; set; }
        public FolderEntity Folder { get; set; }
    }
}
