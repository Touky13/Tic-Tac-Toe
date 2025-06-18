const gameBoard = (function () {
    const arrayBot = ['',0,''];
    const arrayMid = [0,'',''];
    const arrayTop = ['','',1];
    return { arrayBot, arrayMid, arrayTop };
})();
console.log (gameBoard);

function createPlayer (name, marker) {
    return { name, marker };
};

const playerOne = createPlayer ("john", "x");
console.log ({
    name: playerOne.name,
    marker: playerOne.marker
});

const playerTwo = createPlayer ("agnes", "o");
console.log ({
    name: playerTwo.name,
    marker: playerTwo.marker
});

const gameLogic = (function () {
    const [ zerothEleBot, firstEleBot, secondEleBot ] = gameBoard.arrayBot;
    console.log (zerothEleBot, firstEleBot, secondEleBot);
    const [ zerothEleMid, firstEleMid, secondEleMid ] = gameBoard.arrayMid;
    console.log (zerothEleMid, firstEleMid, secondEleMid);
    const [ zerothEleTop, firstEleTop, secondEleTop ] = gameBoard.arrayTop;
    console.log (zerothEleTop, firstEleTop, secondEleTop);

    const calculator = (function () {
        const sumBot = zerothEleBot + firstEleBot + secondEleBot;
        const sumMid = zerothEleMid + firstEleMid + secondEleMid;
        const sumTop = zerothEleTop + firstEleTop + secondEleTop;
        const sumRow0 = zerothEleBot + zerothEleMid + zerothEleTop;
        const sumRow1 = firstEleBot + firstEleMid + firstEleTop;
        const sumRow2 = secondEleBot + secondEleMid + secondEleTop;
        const sumDiag0 = zerothEleBot + firstEleMid + secondEleTop;
        const sumDiag1 = secondEleBot + firstEleMid + zerothEleTop;
        console.log (sumBot, sumMid, sumTop, sumRow0, sumRow1, sumRow2, sumDiag0, sumDiag1);
        return { sumBot, sumMid, sumTop, sumRow0, sumRow1, sumRow2, sumDiag0, sumDiag1 };
    })();
    console.log (calculator.sumBot, calculator.sumMid, calculator.sumTop);

    if (calculator.sumBot === 3 || calculator.sumBot === -3 || calculator.sumMid === 3 || calculator.sumMid === -3 || calculator.sumTop === 3 || calculator.sumTop === -3) {
        alert("You win");
    } else if (calculator.sumRow0 === 3 || calculator.sumRow0 === -3 || calculator.sumRow1 === 3 || calculator.sumRow1 === -3 || calculator.sumRow2 === 3 || calculator.sumRow2 === -3) {
        alert("You win row");
    } else if (calculator.sumDiag0 === 3 || calculator.sumDiag0 === -3 || calculator.sumDiag1 === 3 || calculator.sumDiag1 === -3) {
        alert("You win diag");
    } else if (gameBoard.arrayBot.includes('') === true || gameBoard.arrayMid.includes('') === true || gameBoard.arrayTop.includes('') === true) {
        //alert("The game continue");
    } else {
        alert("It's a tie");
    }
})();

const display = (function () {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    body.appendChild(div);
    div.classList.add("gameDisplay");

    gameBoard.arrayBot.forEach(item => {
        let square = document.createElement("span");
        let p = document.createElement("p");
        p.innerText = item;
        div.appendChild(square);
        square.appendChild(p);
    });
    gameBoard.arrayMid.forEach(item => {
        let square = document.createElement("span");
        let p = document.createElement("p");
        p.innerText = item;
        div.appendChild(square);
        square.appendChild(p);
    });
    gameBoard.arrayTop.forEach(item => {
        let square = document.createElement("span");
        let p = document.createElement("p");
        p.innerText = item;
        div.appendChild(square);
        square.appendChild(p);
    });
 })(); 
