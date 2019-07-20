using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Interfaces;

namespace Interfaces
{
    public class FolderEntity : IFolder
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(40)")]
        public string Label { get; set; }
        [Column(TypeName = "nvarchar(500)")]
        public string Description { get; set; }
        public ICollection<Bookmark> Bookmarks { get; set; }
    }
}
