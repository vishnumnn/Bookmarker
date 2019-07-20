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
               List<FolderEntity> res = await serv.GetAllFolders();
                return Ok(res);
            }catch (Exception ex)
            {
                return StatusCode(500, $"Server Error \n{ex.StackTrace}");
            }


        }

        [Route("Folders")]
        [HttpPost]
        public async Task<IActionResult> PostFolder(FolderEntity folder)
        {
            try
            {
                FolderEntity res = await serv.SubmitFolder(folder);
                return Ok(res);
            }
            catch (Exception E)
            {
                return StatusCode(500, $"Post service error \n{E.StackTrace}");

            }
        }

        [Route("Bookmarks")]
        [HttpPost]
        public async Task<IActionResult> PostBookmark(Bookmark bookmark)
        {
            try
            {
                Bookmark res = await serv.SubmitBookmark(bookmark);
                return Ok(res);
            }
            catch (Exception E)
            {
                return StatusCode(500, $"Exception occured while processing post bookmark request\n {E.StackTrace}");

            }
        }
    }
}