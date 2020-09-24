using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Data.Interfaces
{
    public interface IHasSoftDelete
    {
        bool IsDeleted { set; get; }
    }
}
