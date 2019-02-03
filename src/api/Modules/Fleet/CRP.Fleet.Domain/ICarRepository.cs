using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using CRP.Fleet.Domain.CarAggregate;

namespace CRP.Fleet.Domain
{
    public interface ICarRepository
    {
        Task<Guid> Save(Car car);

        // TODO Move To Separate Interface When Real Database implemented
        Task<IList<Car>> GetAll();
    }
}
