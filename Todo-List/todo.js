const inputBox = document.querySelector(".inputTask");
const listcont = document.querySelector(".taskList");

function addTask() {
  console.log("button clicked");

  if (inputBox.value === "") {
    alert("please write some text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcont.appendChild(li);

    let delIcon = document.createElement("i");
    delIcon.className = "fa-solid fa-trash-can fa-shake";
    delIcon.classList.add("del-icon");
    li.appendChild(delIcon);

    let editIcon = document.createElement("i");
    editIcon.className = "fa-regular fa-pen-to-square fa-shake";
    editIcon.classList.add("edit-icon");
    li.appendChild(editIcon);
  }
  inputBox.value = "";
  saveData();
}

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

listcont.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("del-icon")) {
    e.target.parentElement.remove();
    saveData();
  }
  e.stopPropagation();
});

listcont.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-icon")) {
    e.target.parentElement.setAttribute("contenteditable", "true");
    setTimeout(() => {
      e.target.parentElement.setAttribute("contenteditable", "false");
      saveData();
    }, 6000);
  }
  e.stopPropagation();
});

function saveData() {
  localStorage.setItem("todoListData", listcont.innerHTML);
}

function getData() {
  listcont.innerHTML = localStorage.getItem("todoListData");
}
getData()