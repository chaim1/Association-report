using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Model;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/Donations")]
    public class DonationsController : ControllerBase
    {
        [HttpPost]
        [Route("CreateDonation")]
        public string CreateDonation([FromBody] Donation data)
        {
            return User.Identity.Name.ToString();
        }

        [HttpGet]
        [Route("GetUser")]
        public string GetUser()
        {
            return User.Identity.Name.ToString();
        }
    }

}
