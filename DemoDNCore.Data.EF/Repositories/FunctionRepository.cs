using DemoDNCore.Data.Entities;
using DemoDNCore.Data.IRepositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Data.EF.Repositories
{
    public class FunctionRepository: EFRepository<Function, string>, IFunctionRepository
    {
        public FunctionRepository(AppDbContext context) : base(context)
        {

        }
    }
}
