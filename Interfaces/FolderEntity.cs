using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Interfaces;

namespace Interfaces
{
    public partial class Folder : IFolder
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(40)")]
        public string Label { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Description { get; set; }
    }
}
