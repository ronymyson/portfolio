var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-cont");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");

    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-1");

    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-1");
}