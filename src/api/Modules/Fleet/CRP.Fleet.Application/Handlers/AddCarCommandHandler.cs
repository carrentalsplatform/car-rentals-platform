using System;
using System.Threading;
using System.Threading.Tasks;
using CRP.Fleet.Domain;
using CRP.Fleet.Domain.CarAggregate;
using MediatR;

namespace CRP.Fleet.Application.Handlers
{
    public class AddCarCommandHandler : IRequestHandler<AddCarCommand, Guid>
    {
        private readonly ICarRepository repository;

        public AddCarCommandHandler(ICarRepository repository)
        {
            this.repository = repository;
        }

        public async Task<Guid> Handle(AddCarCommand request, CancellationToken cancellationToken)
        {
            var car = new Car(request.VIN, request.ProductionDate, request.Color);

            await this.repository.Save(car);

            return car.Id;
        }
    }
}