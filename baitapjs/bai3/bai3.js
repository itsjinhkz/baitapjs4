function taoThe() {
  var box = document.getElementsByClassName("boxcolor");
  for (i = 0; i < box.length; i++) {
    if ((i + 1) % 2 == 0) {
      box[i].style.background = "red";
    } else {
      box[i].style.background = "blue";
    }
  }
}
