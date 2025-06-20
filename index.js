const gameBoard = (function () {
    const arrayBot = ['',1,1,'','','','','',''];
    //const arrayMid = ['',0,''];
    //const arrayTop = [1,'',1];
    return { arrayBot };
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
        square.setAttribute ("data-squareId", document.querySelectorAll("span").length-1);
    });
    /*gameBoard.arrayMid.forEach(item => {
        let square = document.createElement("span");
        let p = document.createElement("p");
        p.innerText = item;
        div.appendChild(square);
        square.appendChild(p);
        square.id = document.querySelectorAll("span").length-1;
    });
    gameBoard.arrayTop.forEach(item => {
        let square = document.createElement("span");
        let p = document.createElement("p");
        p.innerText = item;
        div.appendChild(square);
        square.appendChild(p);
        square.id = document.querySelectorAll("span").length-1;
    });*/
 })();

const gameLogic = (function () {
    const calculator = (function () {
        const sumBot = (zerothEleBot, firstEleBot, secondEleBot) => zerothEleBot + firstEleBot + secondEleBot;
        const sumMid = (zerothEleMid, firstEleMid, secondEleMid) => zerothEleMid + firstEleMid + secondEleMid;
        const sumTop = (zerothEleTop, firstEleTop, secondEleTop) => zerothEleTop + firstEleTop + secondEleTop;
        const sumRow0 = (zerothEleBot, zerothEleMid, zerothEleTop) => zerothEleBot + zerothEleMid + zerothEleTop;
        const sumRow1 = (firstEleBot, firstEleMid, firstEleTop) => firstEleBot + firstEleMid + firstEleTop;
        const sumRow2 = (secondEleBot, secondEleMid, secondEleTop) => secondEleBot + secondEleMid + secondEleTop;
        const sumDiag0 = (zerothEleBot, firstEleMid, secondEleTop) => zerothEleBot + firstEleMid + secondEleTop;
        const sumDiag1 = (secondEleBot, firstEleMid, zerothEleTop) =>secondEleBot + firstEleMid + zerothEleTop;
        return { sumBot, sumMid, sumTop, sumRow0, sumRow1, sumRow2, sumDiag0, sumDiag1 };
    })();

    const test = document.querySelectorAll("span");

    test.forEach(item => {
        item.addEventListener("click", (e) => {
            item.querySelector("p").innerText = "1";
            let target = e.target;
            console.log(target);
            console.log(target.dataset.squareid);
            gameBoard.arrayBot.splice(target.dataset.squareid, 1, 1);
            console.log(gameBoard)
            const [ zerothEleBot, firstEleBot, secondEleBot ] = gameBoard.arrayBot;
            console.log (zerothEleBot, firstEleBot, secondEleBot);
            /*const [ zerothEleMid, firstEleMid, secondEleMid ] = gameBoard.arrayMid;
            console.log (zerothEleMid, firstEleMid, secondEleMid);
            const [ zerothEleTop, firstEleTop, secondEleTop ] = gameBoard.arrayTop;
            console.log (zerothEleTop, firstEleTop, secondEleTop);
            console.log(gameBoard.arrayBot, calculator.sumBot(zerothEleBot, firstEleBot, secondEleBot),zerothEleBot, firstEleBot, secondEleBot);       
            */if (calculator.sumBot(zerothEleBot, firstEleBot, secondEleBot) === 3 || calculator.sumBot === -3 || calculator.sumMid === 3 || calculator.sumMid === -3 || calculator.sumTop === 3 || calculator.sumTop === -3) {
                //alert("You win");
            } else if (calculator.sumRow0() === 3 || calculator.sumRow0 === -3 || calculator.sumRow1 === 3 || calculator.sumRow1 === -3 || calculator.sumRow2 === 3 || calculator.sumRow2 === -3) {
                //alert("You win row");
            } else if (calculator.sumDiag0 === 3 || calculator.sumDiag0 === -3 || calculator.sumDiag1 === 3 || calculator.sumDiag1 === -3) {
                //alert("You win diag");
            } else if (gameBoard.arrayBot.includes('') === true || gameBoard.arrayMid.includes('') === true || gameBoard.arrayTop.includes('') === true) {
                //alert("The game continue");
            } else {
                //alert("It's a tie");
            }
        });
    });
})();
