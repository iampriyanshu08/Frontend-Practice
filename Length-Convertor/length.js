let input = document.getElementById("input");
let result = document.getElementById("result");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

// input.addEventListener("keyup", conversion);
// inputType.addEventListener("change", conversion);
// resultType.addEventListener("change", conversion);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  conversion();
});

function conversion() {
  let inputTypeValue, resultTypeValue;
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  //meter

  if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
    result.value = Number(input.value) * 0.001;
  } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === "meter" && resultTypeValue === "foot") {
    result.value = Number(input.value) * 3.28084;
  } else if (inputTypeValue === "meter" && resultTypeValue === "inch") {
    result.value = Number(input.value) * 39.3701;
  } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
    result.value = input.value;
  }

  //kilometer

  if (inputTypeValue === "kilometer" && resultTypeValue == "kilometer") {
    result.value = input.value;
  } else if (inputTypeValue === "kilometer" && resultTypeValue == "meter") {
    result.value = Number(input.value) * 1000;
  } else if (
    inputTypeValue === "kilometer" &&
    resultTypeValue == "centimeter"
  ) {
    result.value = Number(input.value) * 100000;
  } else if (inputTypeValue === "kilometer" && resultTypeValue == "foot") {
    result.value = Number(input.value) * 3280.84;
  } else if (inputTypeValue === "kilometer" && resultTypeValue == "inch") {
    result.value = Number(input.value) * 39370.1;
  }

  // centimeter

  if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
    result.value = Number(input.value) * 0.01;
  } else if (
    inputTypeValue === "centimeter" &&
    resultTypeValue === "kilometer"
  ) {
    result.value = Number(input.value) * 100000;
  } else if (
    inputTypeValue === "centimeter" &&
    resultTypeValue === "centimeter"
  ) {
    result.value = input.value;
  } else if (inputTypeValue === "centimeter" && resultTypeValue === "foot") {
    result.value = Number(input.value) * 0.0328084;
  } else if (inputTypeValue === "centimeter" && resultTypeValue === "inch") {
    result.value = Number(input.value) * 0.393701;
  }

  //Foot

  if (inputTypeValue === "foot" && resultTypeValue === "meter") {
    result.value = Number(input.value) * 0.3048;
  } else if (inputTypeValue === "foot" && resultTypeValue === "kilometer") {
    result.value = Number(input.value) * 0.0003048;
  } else if (inputTypeValue === "foot" && resultTypeValue === "centimeter") {
    result.value = Number(input.value) * 30.48;
  } else if (inputTypeValue === "foot" && resultTypeValue === "foot") {
    result.value = input.value;
  } else if (inputTypeValue === "foot" && resultTypeValue === "inch") {
    result.value = Number(input.value) * 12;
  }

  //inch

  if (inputTypeValue === "inch" && resultTypeValue === "meter") {
    result.value = Number(input.value) * 0.0254;
  } else if (inputTypeValue === "inch" && resultTypeValue === "kilometer") {
    result.value = Number(input.value) * 0.0000254;
  } else if (inputTypeValue === "inch" && resultTypeValue === "centimeter") {
    result.value = Number(input.value) * 2.54;
  } else if (inputTypeValue === "inch" && resultTypeValue === "foot") {
    result.value = Number(input.value) * 0.0833333;
  } else if (inputTypeValue === "inch" && resultTypeValue === "inch") {
    result.value = input.value;
  }
}
