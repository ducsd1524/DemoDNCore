using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Data.Interfaces
{
    public interface IDateTracking
    {
        DateTime DateCreated { set; get; }

        DateTime DateModified { set; get; }
    }
}
