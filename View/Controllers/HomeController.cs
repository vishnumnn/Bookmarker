using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;
namespace View.Controllers
{
    [Route("Home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        FolderServices serv;

        public HomeController(FolderServices service)
        {
            serv = service;
        }
        [Route("Folders")]
        [HttpGet]
        public async Task<IActionResult> GetFolderDetails()
        {
            try
            {
               List<Folder> res = await serv.GetAllFolders();
                return Ok(res);
            }catch (Exception ex)
            {
                return StatusCode(500, $"Server Error \n {ex.StackTrace}");
            }


        }
    }
}