// declare variables
var wins = 0;
var losses = 0;
var guessesLeft;
var compLetter;
var userGuess;

// generate a random letter (lowercase)
function random_character() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr( Math.floor(Math.random() * 26), 1);
}

// start game
// set compLetter
function startGame(){
    guesesLeft = 9;
    // set compLetter
    compLetter=random_character();
    console.log("computer letter is: "+compLetter);
    //reset guessed letters here
    document.getElementById("guessed").innerHTML = "";
}


    // give user a chance to guess
    document.onkeyup = function(event) {
        userGuess = event.key;
        //reduce guessesLeft
        guessesLeft--;
        console.log(guessesLeft,userGuess)

        // verify guess is a string/letter
        if (typeof userGuess === "string"){
            // convert guess to lowercase
            userGuess.toLowerCase();
            // if userGuess = compLetter, add 1 to wins, reset guessesLeft, reset guessed letters
            if(userGuess === compLetter){
                wins++;
                document.getElementById("wins").innerHTML = wins;
                startGame();
            }
        }

        if (guessesLeft===0){
            console.log("you lose!");
            losses++;
            document.getElementById("losses").innerHTML = losses;
            startGame();
        }

                //reset guessed letters here
            // else write letter to guessed letters, reduce guessesLeft
          //  } else{
            //    document.getElementById("guessed").innerHTML = userGuess;
           // }
       // }
      };








