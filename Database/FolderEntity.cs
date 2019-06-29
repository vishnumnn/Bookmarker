using System;
using System.Collections.Generic;
using System.Text;
using Interfaces;

namespace Database
{
    public partial class FolderEntity : IFolder
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public string Description { get; set; }
    }
}
