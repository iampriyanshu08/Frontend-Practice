const calculate = () => {
  setInterval(() => {
    const dob = new Date(document.getElementById("birthdate").value);
    const now = new Date();
    const ageInMs = now.getTime() - dob.getTime();
    console.log(ageInMs);

    const ageInS = ageInMs / 1000;
    const ageInMin = ageInS / 60;
    const ageInHr = ageInMin / 60;
    const ageInD = ageInHr / 24;
    const ageInMon = ageInD / 30.4167;
    const ageInYr = ageInMon / 12;

    document.getElementById("year").innerHTML = Math.floor(ageInYr);
    document.getElementById("month").innerHTML = Math.floor(ageInMon % 12);
    document.getElementById("day").innerHTML = Math.floor(ageInD % 30.4167);
    document.getElementById("hour").innerHTML = Math.floor(ageInHr % 24);
    document.getElementById("minute").innerHTML = Math.floor(ageInMin % 60);
    document.getElementById("second").innerHTML = Math.floor(ageInS % 60);
    document.getElementById("second").style.borderBottom = "1px grey solid";
  }, 1000);
};

const reset = () => {
  window.location.reload();
};
