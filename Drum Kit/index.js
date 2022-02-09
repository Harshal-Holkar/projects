for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var input = this.innerHTML;
        console.log(input);
        switch (input) {
            case "f":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                var crack = new Audio('sounds/crash.mp3');
                crack.play();
                break;
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

            default:
                console.log(input);

                break;
        }
    });
}

document.addEventListener('keydown', function(event) {
    sound(event.key);
})

function sound(keyboardInput) {
    switch (keyboardInput) {
        case "f":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crack = new Audio('sounds/crash.mp3');
            crack.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(keyboardInput);

            break;
    }
}






// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();