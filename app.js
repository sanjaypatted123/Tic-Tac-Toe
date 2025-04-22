let boxes = document.querySelectorAll(".box");//dom module changes
let resetBtn=document.querySelector("#reset-btn")
let newGameBtn = document.querySelector('#new-btn')
let msgContainer=document.querySelector('.msg-container')
let msg=document.querySelector('#msg')
let turnO=true;

const winPatterns=[//predicting win patterns
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{               //reset function
    turnO=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}


boxes.forEach((box)=>{                  //check each box for win patterns
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;

        } else{
            box.innerText="X";
            turnO=true;    
        }
        box.disabled=true;
        checkWinner();
    }); 
});

const disableBoxes=()=>{      //disable boxes after win prediction
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{          //enable after reset game
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}
const showWinner = (winner) =>{       //showing the winner
    msg.innerText=`Congrats winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();

}
const checkWinner=()=>{                //to find the winner
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);

            }
        }
        
    }
}

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);



        

    
