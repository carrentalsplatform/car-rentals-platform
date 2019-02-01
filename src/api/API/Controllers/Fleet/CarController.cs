﻿using System.Threading.Tasks;

using CRP.Fleet.Application.Handlers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Fleet
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly IMediator mediator;

        public CarController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AddCarCommand command)
        {
            var result = await this.mediator.Send(command);

            return this.Ok(result);
        }
    }
}