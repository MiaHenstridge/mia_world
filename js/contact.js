AOS.init({
    once: true,
});

//JS for nav bar when scrolling
function startScroll() {
  const nav = document.querySelector("nav");
  if (
    document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10
  ) {
    nav.removeAttribute("data-aos");
    nav.removeAttribute("data-aos-duration");
    nav.className = "scrolled";
  } else {
    nav.className = "";
  }
}

const page = document.querySelector("body");

page.onscroll = function () {
  startScroll();
};



/*js for sending form*/



function formSubmit() {
    
  var form = document.getElementById("form");
  form.reset();
}

// JS for hamburger button
const button = document.querySelector(".hamburger-button");

button.addEventListener("click", () => {
  const currentState = button.getAttribute("aria-expanded");

  if (currentState === "false") {
    button.setAttribute("aria-expanded", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
  }
});


// JS for theme toggling

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener('click', () => {
  document.body.classList.contains("light-theme") 
    ? enableDarkMode() 
    : enableLightMode();
});

function enableDarkMode(){
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to light theme");
  themeToggle.setAttribute("title", "Switch to light theme");
  themeToggle.setAttribute("data-attribute", "dark");
};

function enableLightMode(){
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
  themeToggle.setAttribute("title", "Switch to dark theme");
  themeToggle.setAttribute("data-attribute", "light");
};

function setThemePreference(){
  if(window.matchMedia("(prefers-color-scheme:dark)").matches){
    enableDarkMode();
    return;
  }
  enableLightMode();
}

document.onload = setThemePreference();



// JS local storage for theme

// store theme

const storeTheme = function(theme){
  localStorage.setItem("theme", theme)
}

themeToggle.addEventListener('click', () => {
  storeTheme(themeToggle.getAttribute('data-attribute'));
});


//apply theme

const retrieveTheme = function() {
  const activeTheme = localStorage.getItem("theme");
  if (activeTheme === "dark") {
    enableDarkMode();
  }
  else{
    enableLightMode();
  }
}

document.onload = retrieveTheme();



