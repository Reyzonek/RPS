function computerPlay(){
    
    if (Math.random() <= 0.333){
        console.log("ROCK");
        return "ROCK";
    } else if (Math.random() > 0.333 && Math.random() <= 0.666){
        console.log("PAPER");
        return "PAPER";
    } else {
        console.log("SCISSORS");
        return "SCISSORS";
    } 

}    
     function singleGame(playerSelection, computerSelection){

        let up = playerSelection.toUpperCase();

        if (up == computerSelection){
            return "One more time!"
        }
        if (up == "ROCK" && computerSelection == "PAPER"){
            return "You lose! Paper beats rock!";
        } 
        if (up == "ROCK" && computerSelection == "SCISSORS"){
            return "You win! Rock beats scissors!";
        } 
        if (up == "PAPER" && computerSelection == "ROCK"){
            return "You win! Paper beats rock!";
        } 
        if (up == "PAPER" && computerSelection == "SCISSORS"){
            return "You lose! Scissors beats paper!";
        }
        if (up == "SCISSORS" && computerSelection == "ROCK"){
            return "You lose! Rock beats scissors!";
        }
        if (up == "SCISSORS" && computerSelection == "PAPER"){
            return "You win! Scissors beats paper!";
        }
    }
function game (){

    let cScore = 0;
    let pScore = 0;

    for (let i = 0; i < 5; i++){
        const pSel = prompt("Paper, rock or scissors?")
        const cSel = computerPlay();
        
        
        if (singleGame(pSel, cSel) == "You lose! Paper beats rock!"){
        cScore++;
        }
        if (singleGame(pSel, cSel) == "You win! Rock beats scissors!"){
            pScore++;
        }
        if (singleGame(pSel, cSel) == "You win! Paper beats rock!"){
            pScore++;
        }
        if (singleGame(pSel, cSel) == "You lose! Scissors beats paper!"){
            cScore++;
        }
        if (singleGame(pSel, cSel) == "You lose! Rock beats scissors!"){
            cScore++;
        }
        if (singleGame(pSel, cSel) == "You win! Scissors beats paper!"){
            pScore++;
        }
        if (singleGame(pSel, cSel) == "One more time!"){
            i--;
        }
        console.log("computer = " + cScore);
        console.log("player = " + pScore);
        
    }
    
    if (cScore < pScore){
        pScore = 0;
        cScore = 0;
        return "You win!";        
    }

    if (cScore > pScore){
        pScore = 0;
        cScore = 0;
        return "You lose!";        
    }
}
console.log(game());