using System.Reflection;

using CRP.Fleet.Application.Handlers;
using CRP.Fleet.Domain;
using CRP.Fleet.Infrastructure;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CRP.Fleet.Application.IoC
{
    public static class FleetModule
    {
        public static void RegisterFleetModule(this IServiceCollection services)
        {
            services.AddMediatR(typeof(AddCarCommand).GetTypeInfo().Assembly);

            services.AddSingleton<ICarRepository, InMemoryFakeCarRepository>();
        }
    }
}