function toggleAns(num) {
    const ansEl = document.querySelector(`#ans${num}`);
    const toggleBtn = document.querySelector(`#icon${num}`);
    
    ansEl.classList.toggle('visible');
    toggleBtn.classList.toggle('fa-circle-arrow-up');
    toggleBtn.classList.toggle('fa-circle-arrow-down');
  }

  const dropdownBtn = document.getElementById("dpd1");
  const dropdownContent = document.querySelector(".dropdown-content");
  
  dropdownBtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
  });
  
  window.addEventListener("click", function(event) {
    if (!event.target.matches("#dpd1")) {
      if (dropdownContent.classList.toggle("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
  
  function redirectToBlog() {
    window.location.href = "blog.html";
  }

  function redirectToDisc1() {
    window.location.href = "discover1.html";
  }

  function redirectToHome() {
    window.location.href = "index.html";
  }

  const dropdownBtn2 = document.getElementById("dpd2")
  const dropdownContent2 = document.querySelector("dpc2");

  
  dropdownBtn2.addEventListener("click", function() {
    dropdownContent2.classList.toggle("show");
  });
  
  window.addEventListener("click", function(event) {
    if (!event.target.matches("#dpd2")) {
      if (dropdownContent2.classList.toggle("show")) {
        dropdownContent2.classList.remove("show");
      }
    }
  });