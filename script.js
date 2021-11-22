function computerPlay(){
    
    if (Math.random() <= 0.33){
        console.log("ROCK");
        return "ROCK";
    } else if (Math.random() > 0.33 && Math.random() <= 0.66){
        console.log("PAPER");
        return "PAPER";
    } else if (Math.random() > 0.66 && Math.random() <= 1){
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

    const playerSelection = "rock";
    const computerSelection = computerPlay();
    console.log(singleGame(playerSelection, computerSelection));    