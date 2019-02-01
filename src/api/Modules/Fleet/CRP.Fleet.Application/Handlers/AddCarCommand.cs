using System;

using MediatR;

namespace CRP.Fleet.Application.Handlers
{
    public class AddCarCommand : IRequest<Guid>
    {
        public AddCarCommand(string name)
        {
            this.Name = name;
        }

        public string Name { get; }
    }
}