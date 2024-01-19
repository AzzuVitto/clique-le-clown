let interval = null
let gameWidth = document.querySelector('main').offsetWidth
let gameHeight = document.querySelector('main').offsetHeight
let clownHeight = document.querySelector('#clown').offsetHeight
let clownWidth = document.querySelector('#clown').offsetWidth
let clown = document.querySelector('#clown');
let scoreContainer = document.querySelector('.score')
let levelContainer = document.querySelector('#level')
let congrats = document.querySelector('#felicits')
let score = 0
let level = 1

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveImage() {
    clown.style.top = randomize(0, gameHeight - clownHeight) + 'px'
    clown.style.right = randomize(0, gameWidth - clownWidth) + 'px'
}
moveImage();

interval = setInterval(() => {
    moveImage()
}, 1000);

function calculPoints() {
    if (calculPoints) {
        score++
        scoreContainer.innerHTML = "Score " + score
        if (score == 3) {
            level++
            clearInterval(interval)
            levelContainer.innerHTML = "Niveau " + level
            interval = setInterval(moveImage, 800);
        } else if (score == 6) {
            level++
            clearInterval(interval)
            levelContainer.innerHTML = "Niveau " + level
            interval = setInterval(moveImage, 600);
        } else if (score == 10) {
            clown.style.display = "none"
            congrats.play();
            show.style.display = "block"
        }
    }
    
}

