const cells = document.querySelectorAll('.cell');
const messageBox = document.querySelector('.message');
const messageText = document.querySelector('.message p');
const restartBtn = document.querySelector('button');

let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameOver = false;

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleMove(index, cell));
});

function handleMove(index, cell) {
  if (board[index] || gameOver) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());

  if (checkWinner(currentPlayer)) {
    showMessage(`${currentPlayer} wins!`);
    gameOver = true;
  } else if (board.every(cell => cell !== null)) {
    showMessage("It's a draw!");
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner(player) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === player)
  );
}

function showMessage(msg) {
  messageText.textContent = msg;
  messageBox.style.display = 'block';
}

restartBtn.addEventListener('click', () => {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  messageBox.style.display = 'none';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  });
});
