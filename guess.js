const max=prompt("enter the max number");
const random=Math.floor(Math.random()*max)+1;
const guess=prompt("Guess the number");
while(true){
    if(guess.toLowerCase==="quit"){
        console.log("quitting the game");
        break;
    }
    if(guess.toLowerCase==="random"){
        console.log(`you win that was correct guess!! It was ${random}`);
        break;
    }else if(guess<random){
        guess=prompt("HINT:The number guessed was smaller than the correct guess number.Try again");
    }else{
        guess=prompt("HINT:The number guessed was larger than the correct guess number.Try again")
    }
}