let fontSize = 18;
const container = document.getElementsByClassName("container");
const sidebar = document.getElementsByClassName("sidebar");
const links = document.getElementsByClassName("link");
const buttons = document.getElementsByClassName("button");
const icons = document.getElementsByClassName("icon");
const toggle = document.getElementById("toggle");
let bg = window.getComputedStyle(document.body, null).getPropertyValue('background-color');

function zoomIn() {
    if (fontSize <= 28) {
        fontSize++;
        document.getElementById("container").style.fontSize = fontSize + "px"; 
    }
}

function zoomOut() {
    if (fontSize >= 12) {
        fontSize--;
        document.getElementById("container").style.fontSize = fontSize + "px"; 
    }
}

function toggleAppearance() {
    bg = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    if (bg == "rgb(240, 240, 240)") {
        document.body.style.backgroundColor = "#111111";
        document.body.style.color = "white";
        container[0].style.backgroundColor = "#1a1a1a";
        container[0].style.border = "#2b2b2b 1px solid";
        container[0].style.boxShadow = "none";
        sidebar[0].style.backgroundColor = "#1a1a1a";
        sidebar[0].style.borderRight = "#2b2b2b 1px solid";
        sidebar[0].style.boxShadow = "none";
        toggle.style.backgroundColor = "#1a1a1a";
        toggle.style.border = "#2b2b2b 1px solid";
        for (var i = 0; i < links.length; i++){
            links[i].style.color = "white";
        }
        for (var i = 0; i < buttons.length; i++){
            buttons[0].style.backgroundColor = "#1a1a1a";
            buttons[0].style.border = "#2b2b2b 1px solid";
        }
        for (var i = 0; i < icons.length; i++){
            icons[i].style.filter = "invert(1)";
        }
    } else {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "black";
        container[0].style.backgroundColor = "white";
        container[0].style.border = "#d8d8d8 1px solid";
        if (window.innerWidth > 1400) {
            container[0].style.boxShadow = "0 0 8px #cfcfcf";
        }
        sidebar[0].style.backgroundColor = "white";
        sidebar[0].style.borderRight = "#d8d8d8 1px solid";
        toggle.style.backgroundColor = "white";
        toggle.style.border = "#cfcfcf 1px solid";
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "black";
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "white";
            buttons[i].style.border = "#cfcfcf 1px solid";
        }
        for (var i = 0; i < icons.length; i++){
            icons[i].style.filter = "none";
        }
    }
}