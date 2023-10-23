const toggle = document.getElementById("toggle");
const heading = document.getElementById("heading");
toggle.addEventListener("click", () => {
  if (document.body.classList.toggle("darkMode")) {
    heading.innerHTML = "This is darkmode";
  } else {
    heading.innerHTML = "This is lightmode";
  }
});
