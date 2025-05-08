let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
function incrementHomeOne() {
    homeScore.textContent = parseInt(homeScore.textContent)+1;
}
function incrementHomeTwo() {
    homeScore.textContent = parseInt(homeScore.textContent)+2;
}
function incrementHomeThree() {
    homeScore.textContent = parseInt(homeScore.textContent)+3;
}
function incrementGuestOne() {
    guestScore.textContent = parseInt(guestScore.textContent)+1;
}
function incrementGuestTwo() {
    guestScore.textContent = parseInt(guestScore.textContent)+2;
}
function incrementGuestThree() {
    guestScore.textContent = parseInt(guestScore.textContent)+3;
}