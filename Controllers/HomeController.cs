using Microsoft.AspNetCore.Mvc;

namespace CvMvcApp.Controllers
{
    public class HomeController : Controller
    {
        // ← Ana sayfa
        public IActionResult Index()
        {
            return View();
        }

        // ← Düzenleyici sayfası. tpl query‑string’i alır.
        public IActionResult Editor(string tpl = "template1")
        {
            ViewBag.TemplateName = tpl;
            return View();
        }
    }
}
