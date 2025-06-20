const gameBoard = (function () {
    const array = ['','','','','','','','',''];
    return { array };
})();

function createPlayer (name, marker) {
    const userInput = prompt("Please enter your name :")
    if (userInput === "") {
        alert("You didn't choose a name.");
        userName = name;
    } else if (userInput !== null) {
        alert("Hello, " + userInput + " !");
        userName = userInput;
    } else {
        alert("You canceled the input.");
        userName = name;
    }
    return { name, marker, userName };
};

const playerOne = createPlayer ("player one", "X");
const playerTwo = createPlayer ("player two", "O");


const display = (function () {
    const body = document.querySelector("body");
    const title = document.createElement("h1");
    title.innerText = "Play a game of Tic-Tac-Toe";
    body.appendChild(title);
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

    const playerInterface = document.createElement("div");
    playerInterface.classList.add("playerInterface");

    const player1 = document.createElement("div");
    player1.classList.add("player");
    player1.setAttribute("id", playerOne.name);
    const p1_1 = document.createElement("p");
    const p2_1 = document.createElement("p");
    p1_1.innerText = playerOne.userName;
    p2_1.innerText = "marker: " + playerOne.marker;
    body.appendChild(playerInterface);
    playerInterface.appendChild(player1);
    player1.appendChild(p1_1);
    player1.appendChild(p2_1);

    const player2 = document.createElement("div");
    player2.classList.add("player");
    player2.setAttribute("id", playerTwo.name);
    const p1_2 = document.createElement("p");
    const p2_2 = document.createElement("p");
    p1_2.innerText = playerTwo.userName;
    p2_2.innerText = "marker: " + playerTwo.marker;
    body.appendChild(playerInterface);
    playerInterface.appendChild(player2);
    player2.appendChild(p1_2);
    player2.appendChild(p2_2);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("reset");
    resetBtn.innerText = "Reset";
    body.appendChild(buttons);
    buttons.appendChild(resetBtn);
 })();

const gameLogic = (function () {
    const calculator = (function () {
        const checkWin = (a, b, c) => a + b + c;
        return { checkWin };
    })();

    const gameInit = document.querySelectorAll("span");
    let activePlayer = 0;
    let gameEnd = 0;

    gameInit.forEach(item => {
        item.addEventListener("click", (e) => {
            let target = e.target;
            function validSquare () {
                if ( gameEnd === 1) {
                    const reset = confirm("The game is over. Do you want to reset the board ?");
                    if (reset === true) {
                        gameBoard.array.splice(0, 9, '','','','','','','','','',);
                        gameInit.forEach(item => {
                            item.querySelector("p").innerText = '';
                        });
                        gameEnd = 0;
                        activePlayer = 0;
                    }
                } else if (item.querySelector("p").innerText === playerOne.marker || item.querySelector("p").innerText === playerTwo.marker) {
                } else {
                    activePlayer++;
                    activePlayer = activePlayer % 2;
                    switch (activePlayer) {
                        case 1:
                            item.querySelector("p").innerText = playerOne.marker;
                            gameBoard.array.splice(target.dataset.squareid, 1, 1);
                            break;
                        case 0:
                            item.querySelector("p").innerText = playerTwo.marker;
                            gameBoard.array.splice(target.dataset.squareid, 1, -1);
                            break;
                    }
                }
            }
            validSquare();
            
            function checkWinner() {
                if (activePlayer % 2 === 1) {
                    alert(playerOne.userName + " win !");
                    gameEnd = 1;
                } else {
                    alert(playerTwo.userName + " win !");
                    gameEnd = 1;
                }
             }

            const [ zerothEle, firstEle, secondEle, thirdEle, fourthEle, fifthEle, sixthEle, seventhEle, eighthEle ] = gameBoard.array;
            if (calculator.checkWin(zerothEle, firstEle, secondEle) === 3 || calculator.checkWin(zerothEle, firstEle, secondEle) === -3 || calculator.checkWin(thirdEle, fourthEle, fifthEle) === 3 || calculator.checkWin(thirdEle, fourthEle, fifthEle) === -3 || calculator.checkWin(sixthEle, seventhEle, eighthEle) === 3 || calculator.checkWin(sixthEle, seventhEle, eighthEle) === -3) {
                checkWinner();
            } else if (calculator.checkWin(zerothEle, thirdEle, sixthEle) === 3 || calculator.checkWin(zerothEle, thirdEle, sixthEle) === -3 || calculator.checkWin(firstEle, fourthEle, seventhEle) === 3 || calculator.checkWin(firstEle, fourthEle, seventhEle) === -3 || calculator.checkWin(secondEle, fifthEle, eighthEle) === 3 || calculator.checkWin(secondEle, fifthEle, eighthEle) === -3) {
                checkWinner();
            } else if (calculator.checkWin(zerothEle, fourthEle, eighthEle) === 3 || calculator.checkWin(zerothEle, fourthEle, eighthEle) === -3 || calculator.checkWin(secondEle, fourthEle, sixthEle) === 3 || calculator.checkWin(secondEle, fourthEle, sixthEle) === -3) {
                checkWinner();
            } else if (gameBoard.array.includes('') === true || gameBoard.array.includes('') === true || gameBoard.array.includes('') === true) {
                //alert("The game continue");
            } else {
                alert("It's a tie !");
                gameEnd = 1;
            }
        });
    });

    const buttons = document.querySelector("button");
    buttons.addEventListener("click", () => {
        gameBoard.array.splice(0, 9, '','','','','','','','','',);
        const gameInit = document.querySelectorAll("span");
        gameInit.forEach(item => {
            item.querySelector("p").innerText = '';
        });
        gameEnd = 0;
        activePlayer = 0;
    })
})();