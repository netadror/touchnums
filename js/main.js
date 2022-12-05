'use strict'

// The Model
var gBoard
// var gGameInterval
var gNums = getNums()
var gNumsClicks = 1
var startTime = null;
var intervalId
// console.log('gNums', gNums)

function onInit() {
    gBoard = createBoard()
    console.log('gBoard', gBoard)
    // console.log(gBoard)
    renderBoard(gBoard)
}
function createBoard() {
    gBoard = []
    for (var i = 0; i < 4; i++) {
        gBoard.push([])
        for (var j = 0; j < 4; j++) {
            gBoard[i][j] = drawNum()
        }
    }
    console.table(gBoard)
    return gBoard
}
function getNums() {
    gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    var shuffledNums = gNums.sort(() => Math.random() - 0.5);
    // var randIdx = getRandomInt(0)
    return shuffledNums
}
function drawNum() {
    var num = gNums.pop()
    return num
}
function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < 4; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < 4; j++) {
            var cell = board[i][j]
            var cellData = 'data-i="' + i + '" data-j="' + j + '"'
            strHTML += `<td ${cellData}
            // this,${i},${j}
            onclick="cellClicked(this,${cell},${i},${j})">
            ${cell}</td>`
        }
        strHTML += '</tr>\n'
    }
    // console.log(strHTML)
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}
function cellClicked(elTd, clickedNum, tdI, tdJ) {

    // start watch
    // intervalId = setInterval(showTime, 1000);
    // console.log('tdI, tdJ', tdI, tdJ)
    // console.log('clickedNum', clickedNum)
    // console.log('gNumsClicks', gNumsClicks)
    // console.log('elTd', elTd)
    if (clickedNum === gNumsClicks && gNumsClicks < 16) {
        console.log('match!')
        elTd.classList.add('occupied')
        gNumsClicks++
    }
    if (clickedNum === gNumsClicks && gNumsClicks === 16) {
        var subHeader = document.querySelector(h3)
        subHeader.innerText = 'You Won!'
        resetGame()
    }

}
function resetGame() {
    // elTd.classList.remove('occupied')
    gNumsClicks = 0
    createBoard()
    renderBoard()
    // resetTimer()
}
// function showTime() {
//     // start internal timer
//     var startPlay = 0;
//     startPlay = Date.now() - elapsedTime;
//     // start internal timer
//     startTime = Date.now();
//     // console.log('starting time', startTime);

//     var elapsedTime = 0;
//     var currentTime = 0;
//     // var paused = true;
//     var hrs = 0;
//     var mins = 0;
//     var secs = 0;

//     elapsedTime = Date.now() - startPlay;
//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);



//     // if (paused) {
//     //     paused = false;
//     // }

//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);

//     var elTimer = document.querySelector('.timer')
//     elTimer.innerText = `${hrs}:${mins}:${secs}`;
// }

// function resetTimer() {
//     clearInterval(intervalId);

// }

// function resetTimer() {
//     start = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     var elTimer = document.querySelector('.timer')
//     elTimer.innerText = "00:00:00"

// }
// function pad(unit) {
//     return (("0") + unit).length > 2 ? unit : "0" + unit;
// }