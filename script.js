document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
  
          var target = document.querySelector(hash);
          var top = window.scrollY + target.getBoundingClientRect().top;
  
          window.scroll({
            top: top,
            behavior: "smooth",
          });
  
          window.location.hash = hash;
        }
      });
    }
  });
  
  var menuItems = document.querySelectorAll(".menu-items a");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      document.getElementById("checkbox").checked = false;
    });
  }
  