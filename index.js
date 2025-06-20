const gameBoard = (function () {
    const array = ['','','','','','','','',''];
    return { array };
})();
console.log (gameBoard);

function createPlayer (name, marker) {
    const userInput = prompt("Please enter your name:")
    if (userInput === "") {
        alert("You didn't choose a name.");
    } else if (userInput !== null) {
        alert("Hello, " + userInput + "!");
    } else {
        alert("You canceled the input.");
    }
    return { name, marker, userInput };
};

const playerOne = createPlayer ("player one", "x");
console.log ({
    name: playerOne.name,
    marker: playerOne.marker
});

const playerTwo = createPlayer ("player two", "o");
console.log ({
    name: playerTwo.name,
    marker: playerTwo.marker
});

const display = (function () {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    body.appendChild(div);
    div.classList.add("gameDisplay");

    gameBoard.array.forEach(item => {
        let square = document.createElement("span");
        let p = document.createElement("p");
        p.innerText = item;
        div.appendChild(square);
        square.appendChild(p);
        square.setAttribute ("data-squareId", document.querySelectorAll("span").length-1);
    });
 })();

const gameLogic = (function () {
    const calculator = (function () {
        const checkWin = (a, b, c) => a + b + c;
        return { checkWin };
    })();

    const test = document.querySelectorAll("span");
    let activePlayer = 0;
    let gameEnd = 0;

    test.forEach(item => {
        item.addEventListener("click", (e) => {
            let target = e.target;
            function validSquare () {
                if (item.querySelector("p").innerText === playerOne.marker || item.querySelector("p").innerText === playerTwo.marker) {
                    alert ("Please choose an empty square");
                } else if ( gameEnd === 1) {
                    const reset = confirm("The game is over. Do you want to reset the board ?(y/n)");
                    if (reset === true) {
                        gameBoard.array.splice(0, 9, '','','','','','','','','',);
                        console.log(gameBoard);
                        test.forEach(item => {
                            item.querySelector("p").innerText = '';
                        });
                        gameEnd = 0;
                    }
                } else {
                    activePlayer++;
                    activePlayer = activePlayer % 2;
                    console.log(activePlayer);
                    switch (activePlayer) {
                        case 1:
                            item.querySelector("p").innerText = playerOne.marker;
                            console.log(target);
                            console.log(target.dataset.squareid);
                            gameBoard.array.splice(target.dataset.squareid, 1, 1);
                            console.log(gameBoard);
                            break;
                        case 0:
                            item.querySelector("p").innerText = playerTwo.marker;
                            console.log(target);
                            console.log(target.dataset.squareid);
                            gameBoard.array.splice(target.dataset.squareid, 1, -1);
                            console.log(gameBoard);
                            break;
                    }
                }
            }
            validSquare();                

            const [ zerothEle, firstEle, secondEle, thirdEle, fourthEle, fifthEle, sixthEle, seventhEle, eighthEle ] = gameBoard.array;
            console.log (zerothEle, firstEle, secondEle, thirdEle, fourthEle, fifthEle, sixthEle, seventhEle, eighthEle);
            if (calculator.checkWin(zerothEle, firstEle, secondEle) === 3 || calculator.checkWin(zerothEle, firstEle, secondEle) === -3 || calculator.checkWin(thirdEle, fourthEle, fifthEle) === 3 || calculator.checkWin(thirdEle, fourthEle, fifthEle) === -3 || calculator.checkWin(sixthEle, seventhEle, eighthEle) === 3 || calculator.checkWin(sixthEle, seventhEle, eighthEle) === -3) {
                alert("You win");
                gameEnd = 1;
            } else if (calculator.checkWin(zerothEle, thirdEle, sixthEle) === 3 || calculator.checkWin(zerothEle, thirdEle, sixthEle) === -3 || calculator.checkWin(firstEle, fourthEle, seventhEle) === 3 || calculator.checkWin(firstEle, fourthEle, seventhEle) === -3 || calculator.checkWin(secondEle, fifthEle, eighthEle) === 3 || calculator.checkWin(secondEle, fifthEle, eighthEle) === -3) {
                //alert("You win row");
                gameEnd = 1;
            } else if (calculator.checkWin(zerothEle, fourthEle, eighthEle) === 3 || calculator.checkWin(zerothEle, fourthEle, eighthEle) === -3 || calculator.checkWin(secondEle, fourthEle, sixthEle) === 3 || calculator.checkWin(secondEle, fourthEle, sixthEle) === -3) {
                //alert("You win diag");
                gameEnd = 1;
            } else if (gameBoard.array.includes('') === true || gameBoard.array.includes('') === true || gameBoard.array.includes('') === true) {
                //alert("The game continue");
            } else {
                //alert("It's a tie");
                gameEnd = 1;
            }
        });
    });
})();
