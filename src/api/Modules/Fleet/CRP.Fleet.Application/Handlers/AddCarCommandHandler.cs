using System;
using System.Threading;
using System.Threading.Tasks;

using MediatR;

namespace CRP.Fleet.Application.Handlers
{
    public class AddCarCommandHandler : IRequestHandler<AddCarCommand, Guid>
    {
        public Task<Guid> Handle(AddCarCommand request, CancellationToken cancellationToken)
        {
            var newFakeCarGuid = Guid.NewGuid();

            return Task.FromResult(newFakeCarGuid);
        }
    }
}
