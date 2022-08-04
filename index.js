var seconds = 5; // seconds for HTML
var foo;
var url = 'https://reload-dev.ml';

function redirect() {
    document.location.href = url;
}

function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("title").innerHTML = seconds
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}
countdownTimer();
	 