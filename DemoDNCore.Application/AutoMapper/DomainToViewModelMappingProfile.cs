using AutoMapper;
using DemoDNCore.Application.ViewModels.Product;
using DemoDNCore.Application.ViewModels.System;
using DemoDNCore.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DemoDNCore.Application.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<ProductCategory, ProductCategoryViewModel>();
            CreateMap<Function, FunctionViewModel>();
        }
    }
}
