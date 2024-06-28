let boxes = document.querySelectorAll('.box');
let resetBtn=document.querySelector('.reset-btn');
let msgContainer=document.querySelector('.msg-container');
let newBtn=document.querySelector('#new-btn');
let msg=document.querySelector('.msg');
let turnO= true; 

const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    const boxContent=box.innerHTML;
    if(turnO)
      {
      box.innerHTML="O";
      turnO=false;
    }
    else 
    {
      box.innerHTML='X';
      turnO=true;
    }
    box.disabled=true;
    checkWinner();
  })
})
const showWinner=(winner)=>{
  msg.innerHTML=`Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove('hide');
}

const checkWinner= () =>
{
  let draw=true;
 
  for (let pattern of winPatterns)
  {
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    
        if(pos1Val!="" && pos1Val === pos2Val && pos2Val === pos3Val)
        {
          showWinner(pos1Val);
          boxes.forEach((box)=> box.disabled=true);
          draw=false;
        }
        if (pos1Val === "" || pos2Val === "" || pos3Val === "") {
          draw = false; 
        }
  }
        if (draw) {
          msg.innerHTML = "It's a draw!";
          msgContainer.classList.remove('hide');
        } 

};
const resetGame=()=>{
  boxes.forEach((box)=>{
    box.innerHTML=' ';
    box.disabled=false;
  });
  msgContainer.classList.add('hide');
  turnO=true;
};
resetBtn.addEventListener('click',resetGame);
newBtn.addEventListener('click',resetGame);
