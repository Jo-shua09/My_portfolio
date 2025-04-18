// =========== ON SCROLL REMOVE CLASSLIST =============
window.onscroll = function () {
  document.querySelector(".popup_portfolio").classList.remove("open");
  menu.classList.remove("open");
  menuBtn.classList.remove("close");
  menuBtn2.classList.remove("fa-times");
};

// ============  MENU BUTTON OPEN AND NAV OPEN/CLOSE ===========
const menuBtn = document.querySelector(".menu_btn");
const menuBtn2 = document.querySelector(".fa-bars");
const menu = document.querySelector(".sidebar");

menuBtn.onclick = function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("close");
  menuBtn2.classList.toggle("fa-times");
};

// ============ SWIPER SETTINGS =================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
  },
});

// ============== SERVICES CARD OPEN AND CLOSE ==================
const serviceCards = document.querySelectorAll(".card"),
  serviceBtns = document.querySelectorAll(".serviceBtn"),
  closeServices = document.querySelectorAll(".close");

const serve = function (serveCLick) {
  serviceCards[serveCLick].classList.add("service_view");
};

serviceBtns.forEach((serviceBtn, i) => {
  serviceBtn.addEventListener("click", () => {
    serve(i);
  });
});

closeServices.forEach((closeService) => {
  closeService.addEventListener("click", () => {
    serviceCards.forEach((serviceCard) => {
      serviceCard.classList.remove("service_view");
    });
  });
});

// ============ POPUP PORTFOLIO OPEN AND CLOSE ==================
// Cache the DOM elements that are used multiple times
const popup = document.querySelector(".popup_portfolio");
const popupImg = document.querySelector(".popup_img img");
const popupSub = document.querySelector(".popup_sub span");
const popupContent = document.querySelector(".popup_content");
const closePopup = document.querySelector(".close_popup");

// Add click event listener to the document
document.addEventListener("click", (e) => {
  // Check if the clicked element has the class "view_popup"
  if (e.target.classList.contains("view_popup")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

// Add click event listener to the close popup button
closePopup.addEventListener("click", togglePortfolioPopup);

// Toggle the "open" class on the popup element
function togglePortfolioPopup() {
  popup.classList.toggle("open");
}

// Update the popup with the portfolio item details
function portfolioItemDetails(portfolioItem) {
  // Update the image source
  popupImg.src = portfolioItem.querySelector(".project_img").src;

  // Update the subtitle
  popupSub.innerHTML = portfolioItem.querySelector(".project_name").innerHTML;

  // Update the content
  popupContent.innerHTML =
    portfolioItem.querySelector(".project_details").innerHTML;
}

// ============== BACKGROUND AND COLOR CHANGER ===============
const dayNight = document.querySelector(".background-change");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-moon");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
});

// ============= AUTO TYPING SETTINGS ===============
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Frontend Developer", "Tech Enthusiast"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// =============== NAV ACTIVE SETTINGS AND NEXT SECTION OPENER ==============
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav li a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");

    sections.forEach((section) => {
      section.classList.remove("active", "back-section");
    });

    const targetSection = document.querySelector(e.target.getAttribute("href"));
    targetSection.classList.add("active");
    menu.classList.remove("open");
    menuBtn.classList.remove("close");
    menuBtn2.classList.remove("fa-times");

    const previousSection = targetSection.previousElementSibling;
    if (previousSection) {
      previousSection.classList.add("back-section");
    }
  });
});
