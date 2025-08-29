const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")

const playing = prompt("Would you like to play the game? ")

if(playing.toLowerCase() === "yes"){
    console.log("let's play", name)
    const direction = prompt("Where do you wanna go ? left or right")
    if(direction.toLowerCase() === "right"){
        console.log("you win")
    }
    else if (direction.toLowerCase() === "left"){
        console.log("you lose")
    }
    else console.log("enter a valid direction")
}
else if(playing.toLowerCase() === "no"){
    console.log("haww...")
}
else{
    console.log("please enter a valid input")
}