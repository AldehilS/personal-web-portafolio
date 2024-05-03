function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}

window.onresize = function (event) {
  if (window.innerWidth > 767) {
    closeSidebar()
  }
};
