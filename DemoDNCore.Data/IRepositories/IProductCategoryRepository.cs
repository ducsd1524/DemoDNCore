using DemoDNCore.Data.Entities;
using DemoDNCore.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Data.IRepositories
{
    public interface IProductCategoryRepository : IRepository<ProductCategory, int>
    {
        List<ProductCategory> GetByAlias(string alias);
    }
}
