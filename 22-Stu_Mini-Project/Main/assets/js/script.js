var choices = ["R","P","S"];

function play() {
    var userChoice = window.prompt("Enter R, P or S:");
    console.log(userChoice);

    var randomIdx = Math.floor(math.random() * choices.length);

    var computerChoice = Math.floor(Math.random() * choices.length);
    
    console.log(computerChoice);

}

play();