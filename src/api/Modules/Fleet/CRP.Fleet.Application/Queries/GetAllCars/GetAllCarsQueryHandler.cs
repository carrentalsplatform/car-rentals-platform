using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

using CRP.Fleet.Domain;
using MediatR;

namespace CRP.Fleet.Application.Queries.GetAllCars
{
    public class GetAllCarsQueryHandler : IRequestHandler<GetAllCarsQuery, IList<CarViewModel>>
    {
        private readonly ICarRepository repository;

        public GetAllCarsQueryHandler(ICarRepository repository)
        {
            this.repository = repository;
        }

        public async Task<IList<CarViewModel>> Handle(GetAllCarsQuery request, CancellationToken cancellationToken)
        {
            var cars = await this.repository.GetAll();

            return cars.Select(x => new CarViewModel()
            {
                Id = x.Id,
                VIN = x.VIN
            }).ToList();
        }
    }
}