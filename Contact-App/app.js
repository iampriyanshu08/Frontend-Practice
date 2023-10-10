const addContact = () => {
  const cname = document.getElementById("name").value.toUpperCase();
  console.log(cname);
  const cnumber = document.getElementById("number").value;
  console.log(cnumber);
  const displayNoti = document.getElementById("displayNoti");

  if (cname == "" || cnumber == "") {
    displayNoti.innerHTML = "Please enter details";
    displayNoti.style.color = "red";
  } else {
    localStorage.setItem(cname, cnumber);
    displayNoti.innerHTML = "✔️ successfully added new contact";
    displayNoti.style.color = "white";
  }
  setInterval(() => {
    displayNoti.innerHTML = "";
  }, 2000);
};

const getContact = () => {
  const displayDetails = document.getElementById("displayContact");
  const displayOutput = document.getElementById("displayContact");
  displayOutput.classList.add("displayContactStyle");
  const getContactName = document
    .getElementById("getContactName")
    .value.toUpperCase();

    const output = localStorage.getItem(getContactName);
    displayDetails.innerHTML = `${getContactName} : ${output == null ? 'this contact is not available' : `+91 ${output}`}`;
   getContactName=''
};


const reset =()=>{
    location.reload()
}