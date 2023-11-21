let fontSize = 18;
const container = document.getElementsByClassName("container");
const sidebar = document.getElementsByClassName("sidebar");
const links = document.querySelectorAll("a");
const zoom = document.getElementsByClassName("zoom");
const icons = document.getElementsByClassName("icon");

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

/*function toggleAppearance() {
    if (document.body.style.backgroundColor = "#f0f0f0") {
        document.body.style.backgroundColor = "#111111";
        document.body.style.color = "white";
        container.style.backgroundColor = "#1a1a1a";
        container.style.border = "#2b2b2b 1px solid";
        container.style.boxShadow = "0";
        sidebar.style.backgroundColor = "#1a1a1a";
        sidebar.style.borderRight = "#2b2b2b 1px solid";
        links.style.color = "white";
        zoom.style.backgroundColor = "#1a1a1a";
        zoom.style.border = "#2b2b2b 1px solid";
        icons.style.filter = "invert(1)";
    }
    if (document.body.style.backgroundColor = "#111111") {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "black";
        container.style.backgroundColor = "white";
        container.style.border = "#d8d8d8 1px solid";
        container.style.boxShadow = "0 0 8px #cfcfcf";
        sidebar.style.backgroundColor = "white";
        sidebar.style.borderRight = "#d8d8d8 1px solid";
        links.style.color = "black";
        zoom.style.backgroundColor = "white";
        zoom.style.border = "#cfcfcf 1px solid";
        icons.style.filter = "none";
    }
}*/