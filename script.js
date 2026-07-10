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


function projectTab(evt, project){

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[1].className.replace(" active", "");
    }
    
    document.getElementById(project).style.display = "block";
    evt.currentTarget.className += " active";
}