function tinh() {
  var n = document.getElementById("n").value * 1;
  var giaiThua = 1;
  for (i = 1; i <= n; i++) {
    giaiThua *= i;
  }
  document.getElementById("ketQuaTxt").innerText = giaiThua;
}
