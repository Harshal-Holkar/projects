// document.querySelector()




var r1 = Math.floor(Math.random() * 6);
var r2 = Math.floor(Math.random() * 6);
console.log(r1, r2);
document.querySelector("#dice1").children[r1].classList.add("visible");
document.querySelector("#dice2").children[r2].classList.add("visible");

if (r1 > r2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !";
} else if (r1 < r2) {
    document.querySelector("h1").innerHTML = "Player 2 wins !";
} else {
    document.querySelector("h1").innerHTML = "draw !";
}