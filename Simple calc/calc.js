function Add() {
  const a = parseInt(document.getElementById("input1").value);
  const b = parseInt(document.getElementById("input2").value);
  const c = a + b;
  document.getElementById("output").innerHTML = c;
}
function Sub() {
  const a = parseInt(document.getElementById("input1").value);
  const b = parseInt(document.getElementById("input2").value);
  const c = a - b;
  document.getElementById("output").innerHTML = c;
}
function Multi() {
  const a = parseInt(document.getElementById("input1").value);
  const b = parseInt(document.getElementById("input2").value);
  const c = a * b;
  document.getElementById("output").innerHTML = c;
}
function Div() {
  const a = parseInt(document.getElementById("input1").value);
  const b = parseInt(document.getElementById("input2").value);
  const c = a / b;
  document.getElementById("output").innerHTML = c;
}

function Reset() {
  const a = (document.getElementById("input1").value = "");
  const b = (document.getElementById("input2").value = "");

  document.getElementById("output").innerHTML = 0;
}
