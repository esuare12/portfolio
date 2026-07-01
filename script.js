"use strict"

// toggle dark/light:

let toggleButton = document.getElementById('theme-toggle');

// check theme preference
if(localStorage.getItem("theme") === "dark"){
    document.documentElement.classList.add("dark");
}
  
toggleButton.addEventListener('click', () => {

    // toggle class on html
    document.documentElement.classList.toggle("dark");

    if(document.documentElement.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else{
        localStorage.setItem("theme", "light");
    }
});