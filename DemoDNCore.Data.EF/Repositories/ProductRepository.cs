using DemoDNCore.Data.Entities;
using DemoDNCore.Data.IRepositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Data.EF.Repositories
{
    public class ProductRepository : EFRepository<Product, int>, IProductRepository
    {
        public ProductRepository(AppDbContext context) : base(context)
        { 
        }
    }
}
