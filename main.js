function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};
