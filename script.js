function getRandomPlay() {
    var randomNum = Math.random();
    
    if (randomNum < 1/3) {
        return "1";
    } else if (randomNum < 2/3) {
        return "2";
    } else {
        return "3";
    }
}

var selectedOption = getRandomPlay();
console.log(selectedOption);