const body = document.querySelector("body")
  , toggleContrast = document.querySelector(".toggle-contrast");
toggleContrast.addEventListener("click", (o=>{
    o.preventDefault(),
    body.classList.toggle("contrast")
}
));
const toggleColor = document.querySelector(".toggle-color");
toggleColor.addEventListener("click", (o=>{
    o.preventDefault(),
    body.classList.toggle("color")
}
));



var scrollToTopBtn = document.getElementById("logo")
  , rootElement = document.documentElement;
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
