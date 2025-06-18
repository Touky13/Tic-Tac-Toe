const gameBoard = (function () {
    const arrayBot = [1,1,1];
    const arrayMid = [0,0,0];
    const arrayTop = [0,0,0];
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

