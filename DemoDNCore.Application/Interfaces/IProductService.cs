using DemoDNCore.Application.ViewModels.Product;
using DemoDNCore.Utilities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Application.Interfaces
{
    public interface IProductService : IDisposable
    {
        List<ProductViewModel> GetAll();

        PageResult<ProductViewModel> GetAllPaging(int? categoryId, string keyword, int page, int pageSize);
    }
}
