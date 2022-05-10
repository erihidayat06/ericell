function diklik() {
  var checkBox = document.getElementById("klik");
  var nomor = document.getElementById("bingkai-nomor");

  if (checkBox.checked == true) {
    nomor.style.display = "block";
  } else {
    nomor.style.display = "none";
  }
}

function navKlik() {
  var checkBox = document.getElementById("klik-nav");
  var nav = document.getElementById("nav-bar");
  var kali = document.getElementById("kali");
  var strip = document.getElementById("strip");

  if (checkBox.checked == true) {
    strip.style.display = "none";
    kali.style.display = "block";
    nav.style.marginTop = "320px";
  } else {
    kali.style.display = "none";
    strip.style.display = "block";
    nav.style.marginTop = "-320px";
  }
}
