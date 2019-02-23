using System;

using CRP.Shared.BaseDomainObjects;

namespace CRP.Fleet.Domain.CarAggregate
{
    public class Car : Entity, IAggregateRoot
    {
        public Car(string vin, DateTime productionDate, string color)
        {
            this.VIN = vin;
            this.ProductionDate = productionDate;
            this.Color = color;
            this.Mileage = 0;
        }

        public string VIN { get; }

        public DateTime ProductionDate { get; }

        public string Color { get; }

        public int Mileage { get; }
    }
}