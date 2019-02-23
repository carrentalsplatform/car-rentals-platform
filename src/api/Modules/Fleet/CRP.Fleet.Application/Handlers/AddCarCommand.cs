﻿using System;

using MediatR;

namespace CRP.Fleet.Application.Handlers
{
    public class AddCarCommand : IRequest<Guid>
    {
        public AddCarCommand(string vin, DateTime productionDate, string color)
        {
            this.VIN = vin;
            this.ProductionDate = productionDate;
            this.Color = color;
        }

        public string VIN { get; }

        public DateTime ProductionDate { get; }

        public string Color { get; }
    }
}