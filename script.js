
function getRandomNum() {
    var randomNum = Math.random();
    
    if (randomNum < 1/3) {
        return "1";
    } else if (randomNum < 2/3) {
        return "2";
    } else {
        return "3";
    }
}

var selectedOption = getRandomNum();
console.log(selectedOption);

function letsPlay() {
    var attempt = selectedOption;

    if (attempt === "1") {
        console.log("rock");
    } else if (attempt === "2") {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

letsPlay();