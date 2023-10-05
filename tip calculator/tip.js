const calc = () => {
  const billAmount = parseInt(document.getElementById("billamo").value);
  const tipPerc = parseInt(document.getElementById("tipperc").value);

  const tipAmount = (billAmount * tipPerc) / 100;
  document.getElementById("tipamount").innerHTML = `Tip Amount : ${tipAmount}`;

  totalamount.innerHTML = `Total Amount : ${billAmount + tipAmount}`;
};

const res = () => {
  document.getElementById("billamo").value = "";
  document.getElementById("tipperc").value = "";
  document.getElementById("tipamount").innerHTML = `Tip Amount:`;
  document.getElementById("totalamount").innerHTML = `Total Amount:`;
};
