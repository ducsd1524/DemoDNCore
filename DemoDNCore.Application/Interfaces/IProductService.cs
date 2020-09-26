using DemoDNCore.Application.ViewModels.Product;
using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Application.Interfaces
{
    public interface IProductService: IDisposable
    {
        List<ProductViewModel> GetAll();
    }
}
