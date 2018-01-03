using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;
using System.IO;
using Dicom;
using Microsoft.AspNetCore.Hosting;
using Dicom.Imaging;


namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {

        private readonly IHostingEnvironment _hostingEnvironment;

        public HomeController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }



        public void openDicom()
        {
            string path = _hostingEnvironment.WebRootPath;
            string imagepath = Path.Combine(path, "images", "test"+".dcm");
            DicomFile dicom = DicomFile.Open(imagepath);
            var image = new DicomImage(imagepath);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
