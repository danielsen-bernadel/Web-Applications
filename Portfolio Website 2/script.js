const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click",() => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};

function openFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
  
// script.js
function showPopup() {
    const popup = document.getElementById("popup");
    const popupVideo = document.getElementById("popupVideo");
  
    setTimeout(() => {
      popup.classList.remove("hidden");
      // Attempt to play the video with sound after it's displayed
      popupVideo.play().catch((error) => {
        console.error("Autoplay with sound failed:", error);
      });
    }, 3000);
  
    popupVideo.addEventListener("ended", () => {
      popup.classList.add("hidden");
    });
  }
  
  showPopup();

document.addEventListener('contextmenu', event => event.preventDefault());

const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('contextmenu', event => event.preventDefault());
}

var video = document.getElementById('popupVideo');
var container = document.getElementById('bio');

video.addEventListener('ended', function() {
  closeFullscreen();

});

video.addEventListener('play', function() {
  openFullscreen(video);
});
