using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication.Controllers
{
    public class AppsController : Controller
    {
        // GET: Apps
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ShowMaps()
        {
            return View();
        }
    }
}