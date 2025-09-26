let homeScore = 0
let guestScore = 0
let homeScoreText = document.getElementById("home-score")
let guestScoreText = document.getElementById("guest-score")
let homeScoreBoard = document.getElementById("home-scoreboard")
let guestScoreBoard = document.getElementById("guest-scoreboard")

function addOnePoint(team) {
    if (team == "home"){
        homeScore += 1
        homeScoreText.textContent = homeScore
    }
    else if (team == "guest"){
        guestScore += 1
        guestScoreText.textContent = guestScore
    }
    showLeader()
}

function addTwoPoint(team) {
    if (team == "home"){
        homeScore += 2
        homeScoreText.textContent = homeScore
    }
    else if (team == "guest"){
        guestScore += 2
        guestScoreText.textContent = guestScore
    }
    showLeader()
}

function addThreePoint(team) {
    if (team == "home"){
        homeScore += 3
        homeScoreText.textContent = homeScore
    }
    else if (team == "guest"){
        guestScore += 3
        guestScoreText.textContent = guestScore
    }
    showLeader()
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreText.textContent=homeScore
    guestScoreText.textContent=guestScore
    showLeader()
}

function showLeader() {
    if (homeScore > guestScore) {
        homeScoreBoard.style.borderColor = 'yellow'
        guestScoreBoard.style.borderColor = 'transparent'
    }
    else if (guestScore > homeScore) {
        guestScoreBoard.style.borderColor = 'yellow'
        homeScoreBoard.style.borderColor = 'transparent'
    }
    else {
        homeScoreBoard.style.borderColor = 'transparent'
        guestScoreBoard.style.borderColor = 'transparent'
    }
}