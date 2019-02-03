using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using CRP.Fleet.Domain;
using CRP.Fleet.Domain.CarAggregate;

namespace CRP.Fleet.Infrastructure
{
    public class InMemoryFakeCarRepository : ICarRepository
    {
        private readonly IList<Car> carRepository;

        public InMemoryFakeCarRepository()
        {
            this.carRepository = new List<Car>();
        }

        public Task<Guid> Save(Car car)
        {
            AddGuid(car);

            this.carRepository.Add(car);

            return Task.FromResult(car.Id);
        }

        public Task<IList<Car>> GetAll()
        {
            return Task.FromResult(this.carRepository);
        }

        private static void AddGuid(Car car)
        {
            var carType = car.GetType();
            var generatedGuid = (object)Guid.NewGuid();

            var idPropertyInfo = carType.BaseType.GetProperty("Id");

            idPropertyInfo.SetValue(car, generatedGuid, null);
        }
    }
}