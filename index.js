var randomNumber1 = Math.random();
randomNumber1  = Math.floor(randomNumber1*6) + 1; 
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2  = Math.floor(randomNumber2*6) + 1; 
console.log(randomNumber2);

if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {
    document.querySelector(" .i1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(" .i2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    
    var result = 0;
    if (randomNumber1 > randomNumber2)
        { result = 1;
        document.querySelector("h1").innerHTML = "🚩 Player " + result + " Won!";
        }
    else if (randomNumber1 === randomNumber2)
        { 
        document.querySelector("h1").innerHTML = "Draw!";
        }
    else
        { result = 2;
        document.querySelector("h1").innerHTML = "🚩 Player " + result + " Won!";
        }
}
   
  



