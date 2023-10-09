const randomNo = Math.floor(Math.random() * 100) + 1;
console.log(randomNo);

function start() {
  
  const userinput = document.getElementById("userinput").value;
  const result = document.getElementById("show");
 document.getElementById('userinput').value = ''
 

  if (randomNo === userinput) {
    result.innerHTML = `Result : woah you guessed it right`;
    result.style.backgroundColor = "green";
  } else if (randomNo < userinput) {
    result.innerHTML = `Result : number is less than ${userinput}`;
    result.style.backgroundColor = "red";
  } else if (randomNo > userinput) {
    result.innerHTML = `Result : number is greator than ${userinput}`;
    result.style.backgroundColor = "red";
  }

  
}

function reset() {
  window.location.reload();
}


userinput.value = ''