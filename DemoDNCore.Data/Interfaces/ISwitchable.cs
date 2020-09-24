using System;
using System.Collections.Generic;
using System.Text;
using DemoDNCore.Data.Enums;

namespace DemoDNCore.Data.Interfaces
{
    public interface ISwitchable
    {
        Status Status { set; get; }
    }
}
