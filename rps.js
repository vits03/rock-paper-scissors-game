function playRound(playerSelection,computerSelection) {
    console.log(playerSelection,computerSelection);
    const choice = {"rock":"paper","scissors":"rock","paper":"scissors" };
    if (choice[playerSelection]=== computerSelection) {
       
        show_winner("computer");
        update_score("computer");
    }
    else if (playerSelection===computerSelection)
    {
        
        update_score();
    }
    else {
      
        show_winner("player");
        update_score("player");
    }

}


function show_winner(winner){
    let player=document.getElementById("round-choice");
    let computer=document.getElementById("round-choice_computer");
   if (winner==="player"){
       player.style.border="5px solid green";
       computer.style.border="5px solid red"

    }
    else {
        player.style.border="5px solid red";
        computer.style.border="5px solid green"
    }
}
function game(player_choice){
   
   choice_com=  computer_choice();
   console.log(choice_com);
   show_computer_choice(choice_com);
   playRound(player_choice,choice_com);


}

function show_computer_choice(choice){
    computer=document.getElementById("round-choice_computer");
    if (choice === "rock"){
         computer.className="rock-choice"
    }
   else if (choice==="paper")  {
    computer.className="paper-choice"

   }
   else {
    computer.className="scissors-choice"

   }
}

function computer_choice()
{
   choice=Math.floor(Math.random()*3+1)
   if (choice===1)
   {
      return "rock";}
    else if (choice===2) {
       return "paper"
    }
    else {
        return "scissors"
    }
}
 function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }  



function reset_border(){
    let player=document.getElementById("round-choice");
    let computer=document.getElementById("round-choice_computer");
    player.style.border="5px solid rgb(195, 160, 160)";
    computer.style.border="5px solid rgb(195, 160, 160)";
    
    

}


 async function mainf(){
   
   
    
            const rock = document.getElementById("rock");
            rock.addEventListener("click", async function () { index++;
            
            reset_border();
            const rocks = document.getElementById("round-choice");
            rocks.className = 'rock-choice';
            
            game("rock");
           
             });

             const paper = document.getElementById("paper");
             paper.addEventListener("click",async function () {
               
                index++;
                reset_border();
             const papers = document.getElementById("round-choice");
             papers.className = 'paper-choice';
          
        
             game("paper");
             
             });                                                                                
 
              const scissors = document.getElementById("scissors");
             scissors.addEventListener("click",  async function () {index++;
             reset_border();
             const scissorss = document.getElementById("round-choice"); 
             scissorss.className = 'scissors-choice';
             //roll();
             //await sleep(12250);
              game("scissors");
             
             });
    }
    
            sound=new Audio('spinning-prize-wheel-sound-effects.mp3');
            sound.volume=0.3;

    
   
   
    
 
  


async function animate(ms,choice,i){
    const rock= document.getElementById("rocks");
    const paper= document.getElementById("papers");
    const scissors= document.getElementById("scissorss");
    console.log(choice,i);
   
        rock.style.border="4px solid rgb(240, 73, 73)";
        if (((i !=5) && choice !== "rock" )|| ((i ===5) && choice !== "rock") || ((i<5) && choice == "rock"))
        {   console.log(choice,i,i);
             await sleep(ms);
           
           rock.style.border=" 4px solid rgb(221, 165, 165)";
           paper.style.border="4px solid rgb(240, 73, 73)";
           if (((i !=5) && choice !== "paper" )|| ((i ===5) && choice !== "paper")|| ((i<5) && choice == "paper")) {
                await sleep(ms);
                papers.style.border=" 4px solid rgb(221, 165, 165) ";
                scissors.style.border="4px solid rgb(240, 73, 73)";
                if (((i !=5) && choice !== "scissors" )|| ((i ===5) && choice !== "scissors")|| ((i<5) && choice == "scissors")){
                await sleep(ms);
                 scissors.style.border=" 4px solid rgb(221, 165, 165)";}}
                 

                }

}
     
   
    
 async function roll(){
    setTimeout(() => { sound_effect();  }, 3500);
    let n=150; 
    
    for (let i=0;i<6;i++){
    await sleep(1600);
    animate(n,choice_com,i);
    n+=100;
    
    
}
function sound_effect(){
    sound.play();
}
}

function main(){ 
    index=0;
    player_score=0
    computer_score=0
    mainf();
    check=setInterval(verify,1000)
}
 function disable_btn( ) {
     document.getElementById("rock").disabled=true;
     document.getElementById("paper").disabled=true;
     document.getElementById("scissors").disabled=true;
 }

function update_score(round_winner="tie") {
        let status=document.getElementById("round-status");
        if (round_winner==="player"){
           player_score++;
           status.style.color="green"
           if (index<5 )  {
           status.innerText=`You won round ${index}`}
        }
        else if (round_winner==="computer") {
            computer_score++
            status.style.color="red"
            if (index<5 )  {
            status.innerText=`You lost round ${index}`}
        }
        else{
            status.style.color="grey"
            if (index<5 )  {
            status.innerText=`Round ${index} is a TIE!`}
            player_score++;
            computer_score++;
        }
        document.getElementById("score").innerText=`${player_score}-${computer_score}`
        if (index<5 )  {
             document.getElementById("round").innerText=`Round ${index+1}`}
        if (index===5) {
            if (player_score > computer_score){
                status.style.color="green"
                status.innerText="YOU WON THE GAME!"
            }
            else  if (player_score<  computer_score) {
                status.style.color="red"
                status.innerText="YOU LOST THE GAME!"
            }
            else {
                status.innerText="The Game resulted in a TIE!"
            }
        }
}

function verify(){
    console.log(`${index}) is `);
    if (index>4)
    {
      disable_btn()
      clearInterval(check);
      play_again();
     

    }
}


function play_again() {
    let container=document.getElementById("score-section");
    let btn =document.createElement("button");
    btn.className="play-again"
    btn.innerHTML="Play again?";
    btn.onclick=function() {
       window.location.reload();
    }
    container.appendChild(btn);
}







main();