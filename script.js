
//  let currentPlayer = 'X';
//  let gameBoard = ['', '', '', '', '', '', '', '', ''];
//  let gameActive = true;

// function makeMove(box) {
//     const index = Array.from(box.parentNode.children).indexOf(box);

//     if (gameBoard[index] === '' && gameActive) {
//         gameBoard[index] = currentPlayer;
//         box.textContent = currentPlayer;
//         box.classList.add(currentPlayer);

//         if (checkWin()) {
//             document.querySelector('.winner').textContent = `Player ${currentPlayer} wins!`;
//             gameActive = false;
//         } else if (!gameBoard.includes('')) {
//             document.querySelector('.winner').textContent = 'It\'s a draw!';
//             gameActive = false;
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         }
//     }
// }

// function checkWin() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8],
//         [0, 3, 6], [1, 4, 7], [2, 5, 8],
//         [0, 4, 8], [2, 4, 6]
//     ];

//     return winPatterns.some(pattern => {
//         const [a, b, c] = pattern;
//         return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('#reset input[type="reset"]').addEventListener('click', resetGame);
// });

// function resetGame() {
//     currentPlayer = 'X';
//     gameBoard = ['', '', '', '', '', '', '', '', ''];
//     gameActive = true;
//     const winnerElement = document.querySelector('.winner');
//     winnerElement.textContent = '';
//     winnerElement.style.color = '';
//     document.querySelectorAll('.box').forEach(box => {
//         box.textContent = '';
//         box.classList.remove('X', 'O');
//     });
// }
 
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(box) {
    const index = Array.from(box.parentNode.children).indexOf(box);

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        box.textContent = currentPlayer;
        box.classList.add(currentPlayer);

        if (checkWin()) {
            const winPattern = findWinningPattern();
            if (winPattern) {
                winPattern.forEach((winIndex) => {
                    document.querySelector(`.box:nth-child(${winIndex + 1})`).style.backgroundColor = '#0282a8';
                });
            }
            document.querySelector('.winner').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (!gameBoard.includes('')) {
            document.querySelector('.winner').textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}


function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function findWinningPattern() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return pattern;
        }
    }
    return null;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    const winnerElement = document.querySelector('.winner');
    winnerElement.textContent = '';
    winnerElement.style.color = '';
    document.querySelectorAll('.box').forEach(box => {
        box.textContent = '';
        box.classList.remove('X', 'O');
        box.style.backgroundColor = '#136690'; 
    });
}


