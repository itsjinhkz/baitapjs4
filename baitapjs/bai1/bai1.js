function tinh() {
  var count = 0;
  var n = 0;
  while (count < 1000) {
    n++;
    count = count + n;
  }
  document.getElementById("ketQuaTxt").innerText =
    "Số nguyên dương nhỏ nhất là: " + n;
}
