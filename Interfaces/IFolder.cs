using System;
using System.Collections.Generic;
using System.Text;

namespace Interfaces
{
    public interface IFolder
    {
        int Id { get; set; }
        string Label { get; set; }
        string Description { get; set; }

    }
}
