$(document).ready(function() {
    $(".burger").on("click", function() {
        $(".wrapper nav ul").slideToggle(500);
    });
});

function animateBar(x) {
    x.classList.toggle("change");
}