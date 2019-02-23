using System.Collections.Generic;
using MediatR;

namespace CRP.Fleet.Application.Queries.GetAllCars
{
    public class GetAllCarsQuery : IRequest<IList<CarViewModel>>
    {
    }
}