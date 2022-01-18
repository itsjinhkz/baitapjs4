function tinh() {
  var numValue = document.getElementById("numberTxt").value * 1;
  var kq = document.getElementById("kq");
  for (i = 1; i < numValue; i++) {
    kq.innerText += i;
  }
}
