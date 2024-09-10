const choices= document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let uwin = 0;
let cwin = 0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        const userChoice= choice.getAttribute("id");
        gameChoice(userChoice);
    });
});
const gameChoice=(userChoice)=>{
   
    const cChoice=comChoice();
   if(userChoice==cChoice){
    showDraw();
   }
   else{
    let userWin =true;
    if(userChoice==="rock"){
      userWin=cChoice==="paper"?false:true;
    }
    else if (userChoice === "paper") {
        //rock, scissors
        userWin = cChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = cChoice === "rock" ? false : true;
      }
      showWinner(userWin);
   }
};
const comChoice=()=>{
  
    const option=["rock","paper","scissors"];
    const idx= Math.floor(Math.random()*3);
    return option[idx];
   
};
const showDraw=()=>{
msg.innerText="Game Draw";
msg.style.backgroundColor = "#081b31";
};
const showWinner=(userWin)=>{
    if(userWin){
        uwin++;
        userScorePara.innerText= uwin;
        msg.innerText = `You win!`;
        msg.style.backgroundColor = "green";
    }
    else{
        cwin++;
        compScorePara.innerText = cwin;
        msg.innerText = `You lost!`;
        msg.style.backgroundColor = "red";
    }
};
