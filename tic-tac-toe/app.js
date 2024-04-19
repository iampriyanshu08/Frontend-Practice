let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = ()=>{
    let turnO = true
    enableBtns()
    msgContainer.classList.add("hide")
}


boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log("button clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = !turnO;
    } else {
      box.innerText = "X";
      turnO = !turnO;
    }
    box.disabled = true;
    checkWinner();
  });
  
});

const enableBtns = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""
    }
}
const disableBtns = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner)=>{
msg.innerText=`Congratulations Winner is ${winner}`
msgContainer.classList.remove('hide')
disableBtns()
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    console.log(pattern);
    let posVal1= boxes[pattern[0]].innerText
    let posVal2= boxes[pattern[1]].innerText
    let posVal3= boxes[pattern[2]].innerText

    if(posVal1!=""&&posVal2!=""&&posVal3!=""){
        if(posVal1===posVal2&&posVal2===posVal3){
            console.log("winner",posVal1)
            showWinner(posVal1)
        }
    }
  }
};

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click",resetGame);