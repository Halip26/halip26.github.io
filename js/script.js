function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Web Developer",
      "Coding Educator",
      "Data Engineer",
      "Graphic Designer",
      "Video Editor",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Web Developer",
      "Coding Educator",
      "Data Engineer",
      "Graphic Designer",
      "Video Editor",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzjrZetE2AIs2v2hSF0SdzOCj0f0fPOgiF_CkwfNyytqzq3SeFgcyt3ZUbZfrqWcy4U/exec";
const form = document.forms["halip26-contact-me"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));

    $(document).ready(function () {
      $("button.send").click(function () {
        $.get("success.txt", function (data, status) {
          form.reset();
          alert("Data: " + data + "\nStatus: " + status);
        });
      });
    });
  } else {
    form.reportValidity();
  }
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year to the span with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;
