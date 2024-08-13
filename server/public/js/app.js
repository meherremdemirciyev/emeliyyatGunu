                        //SIDEBAR and ADD POPUP BUTTON

document.addEventListener("DOMContentLoaded", function () {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId)
      const  nav = document.getElementById(navId)
      const  bodypd = document.getElementById(bodyId)
      const  headerpd = document.getElementById(headerId);

      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
          toggle.classList.toggle("bx-x");
          bodypd.classList.toggle("body-pd");
          headerpd.classList.toggle("body-pd");
        });
      }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  const path = window.location.href;

  linkColor.forEach((i) => {
    i.classList.remove("active");
    if (i.href == path) {
      i.classList.add("active");
    }
  })

  const addButton = document.getElementById("add-btn");
  const popup = document.getElementById("popup");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const cancelPopupButton = document.getElementById("cancel-popup-btn");

  const showPopup = () => {
    overlay.classList.add("show");
    popup.classList.add("show");
    popup.classList.remove("hide");
  };

  const hidePopup = () => {
    popup.classList.add("hide");
    popup.classList.remove("show");
    overlay.classList.remove("show");
    setTimeout(() => {
      popup.classList.remove("hide");
      overlay.classList.remove("hide");
    }, 300);
  };

  addButton.addEventListener("click", showPopup);
  cancelPopupButton.addEventListener("click", hidePopup);
  overlay.addEventListener("click", hidePopup);
});

