using DemoDNCore.Application.ViewModels.System;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DemoDNCore.Application.Interfaces
{
    public interface IFunctionService : IDisposable
    {
        Task<List<FunctionViewModel>> GetAll();
        List<FunctionViewModel> GetAllByPermission(Guid userId);
    }
}
