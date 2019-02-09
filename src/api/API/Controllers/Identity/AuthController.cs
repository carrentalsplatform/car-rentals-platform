using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.UI.V3.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace API.Controllers.Identity
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        [HttpGet, Route("login")]
        public ActionResult Login([FromBody] LoginModel user)
        {
            return Ok();
        }

        [HttpGet, Route("register")]
        public ActionResult Register([FromBody] LoginModel user)
        {
            return Ok();
        }



    }
}