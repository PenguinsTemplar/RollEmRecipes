//I'm making a connect 4 game that focuses on a Game class and uses object oriented programing principles.
class Players {
	constructor() {
		this.players = {
			player1: 'player1',
			player2: 'player2',
		};
		this.currentPlayer = 'player1'; //player 1 starts the game
	}

	switchPlayer() {
		this.currentPlayer =
			this.currentPlayer === this.players.player1
				? this.players.player2
				: this.players.player1;
	}
	getCurrentPlayer() {
		return this.currentPlayer;
	}
}
class Board {
	constructor() {
		this.rows = 6;
		this.cols = 7;
		this.board = [];
		this.createBoard();
	}
	createBoard() {
		// this should create a 2D array that represents the game board. the bottom left cell should be [0][0]
		for (let r = 0; r < this.rows; r++) {
			this.board[r] = [];
			for (let c = 0; c < this.cols; c++) {
				this.board[r][c] = null;
			}
		}
	}
}

class Game {
	constructor() {
		this.players = new Players();
		this.board = new Board();
		this.gameOver = false;
		const startButton = document.getElementById('start-game');
		startButton.addEventListener('click', () => {
			this.initBoard();
		});
	}
	initBoard() {
		this.gameOver = false;
		this.players.currentPlayer = this.players.players.player1;
		this.board.createBoard();
		this.renderInitBoard();
	}

	renderInitBoard() {
		//I need this to render game board with horizontal rows and vertical columns.  bottom left is [0][0]
		//
		console.log('***renderInitBoard***');
		const gameBoard = document.getElementById('game-board');
		gameBoard.innerHTML = '';
		for (let c = this.board.cols - 1; c >= 0; c--) {
			const col = document.createElement('div');
			col.classList.add('col');
			col.id = c;
			col.addEventListener('click', () => {
				this.play(c);
			});
			gameBoard.appendChild(col);
			for (let r = 0; r < this.board.rows; r++) {
				const cell = document.createElement('div');
				cell.classList.add('cell');
				cell.id = `${r}-${c}`;
				col.appendChild(cell);
			}
		}
	}
	play(col) {
		console.log('***play***');
		console.log(`col: ${col}`);
		if (this.gameOver) {
			alert('Game is over. Please start a new game.');
			return;
		}
		let row = this.findEmptyCell(col);
		if (row === undefined) {
			alert('Column is full. Please choose another column.');
			return;
		}
		this.dropToken(row, col);

		if (this.checkForWinner()) {
			this.gameOver = true;
			alert(`${this.players.currentPlayer} wins!`);
			return;
		} else if (this.checkForTie()) {
			this.gameOver = true;
			alert("It's a tie!");
			return;
		}

		this.players.switchPlayer();
	}
	findEmptyCell(col) {
		console.log('***findEmptyCell***'); //this method needs to find the lowest empty cell.  eg, 0-0 is the bottom left cell.
		//I need to use the board array to find the lowest empty cell in the column.
		for (let r = this.board.rows - 1; r >= 0; r--) {
			if (this.board.board[r][col] === null) {
				return r;
			}
		}
		return undefined;
	}
	checkForWinner() {
		console.log('***checkForWinner***');
		//check rows
		for (let r = 0; r < this.board.rows; r++) {
			for (let c = 0; c < this.board.cols - 3; c++) {
				if (
					this.board.board[r][c] === this.players.currentPlayer &&
					this.board.board[r][c + 1] === this.players.currentPlayer &&
					this.board.board[r][c + 2] === this.players.currentPlayer &&
					this.board.board[r][c + 3] === this.players.currentPlayer
				) {
					return true;
				}
			}
		}
		//check columns
		for (let r = 0; r < this.board.rows - 3; r++) {
			for (let c = 0; c < this.board.cols; c++) {
				if (
					this.board.board[r][c] === this.players.currentPlayer &&
					this.board.board[r + 1][c] === this.players.currentPlayer &&
					this.board.board[r + 2][c] === this.players.currentPlayer &&
					this.board.board[r + 3][c] === this.players.currentPlayer
				) {
					return true;
				}
			}
		}
		//check diagonal
		for (let r = 0; r < this.board.rows - 3; r++) {
			for (let c = 0; c < this.board.cols - 3; c++) {
				if (
					this.board.board[r][c] === this.players.currentPlayer &&
					this.board.board[r + 1][c + 1] === this.players.currentPlayer &&
					this.board.board[r + 2][c + 2] === this.players.currentPlayer &&
					this.board.board[r + 3][c + 3] === this.players.currentPlayer
				) {
					return true;
				}
			}
		}
		//check anti-diagonal
		for (let r = 0; r < this.board.rows - 3; r++) {
			for (let c = 3; c < this.board.cols; c++) {
				if (
					this.board.board[r][c] === this.players.currentPlayer &&
					this.board.board[r + 1][c - 1] === this.players.currentPlayer &&
					this.board.board[r + 2][c - 2] === this.players.currentPlayer &&
					this.board.board[r + 3][c - 3] === this.players.currentPlayer
				) {
					return true;
				}
			}
		}
	}
	checkForTie() {
		console.log('***checkForTie***');
		for (let r = 0; r < this.board.rows; r++) {
			for (let c = 0; c < this.board.cols; c++) {
				if (this.board.board[r][c] === null) {
					return false; // If any cell is empty, it's not a tie
				}
			}
		}
		return true; // All cells are filled, it's a tie
	}
	dropToken(r, c) {
		//this method needs to check and see if the game is still being played, then find the first open cell in the column
		//by findin the r of c, then update the board with the current player's token.  Finally, it should update the visual
		//element of the game board to reflect the new token.
		this.checkForWinner();
		this.checkForTie();
		this.findEmptyCell;
		this.updateBoard(c);
		this.updateCell(r, c); //I'm making a connect 4 game that focuses on a Game class and uses object oriented programing principles.
		class Players {
			constructor() {
				this.players = {
					player1: 'player1',
					player2: 'player2',
				};
				this.currentPlayer = 'player1'; //player 1 starts the game
			}

			switchPlayer() {
				this.currentPlayer =
					this.currentPlayer === this.players.player1
						? this.players.player2
						: this.players.player1;
			}
			getCurrentPlayer() {
				return this.currentPlayer;
			}
		}
		class Board {
			constructor() {
				this.rows = 6;
				this.cols = 7;
				this.board = [];
				this.createBoard();
			}
			createBoard() {
				// this should create a 2D array that represents the game board. the bottom left cell should be [0][0]
				for (let r = 0; r < this.rows; r++) {
					this.board[r] = [];
					for (let c = 0; c < this.cols; c++) {
						this.board[r][c] = null;
					}
				}
			}
		}

		class Game {
			constructor() {
				this.players = new Players();
				this.board = new Board();
				this.gameOver = false;
				const startButton = document.getElementById('start-game');
				startButton.addEventListener('click', () => {
					this.initBoard();
				});
			}
			initBoard() {
				this.gameOver = false;
				this.players.currentPlayer = this.players.players.player1;
				this.board.createBoard();
				this.renderInitBoard();
			}

			renderInitBoard() {
				// to render the board, the table should mirror the board array. game-board is the id of the div. 0-0
				// should be the bottom left cell of the table. when we later update the board, I want the visual elements
				// and the board array to be in sync.
				console.log('***renderInitialBoard***');
				const gameBoard = document.getElementById('game-board');
				gameBoard.innerHTML = ''; // this
				for (let r = 0; r < this.board.rows; r++) {
					//I need to arrange the rows so row 0 is at the bottom of the board.
					const row = document.createElement('div');
					row.classList.add('row');
					for (let c = 0; c < this.board.cols; c++) {
						const cell = document.createElement('div');
						cell.classList.add('cell');
						cell.id = `${r}-${c}`;
						row.appendChild(cell); //need an event listener to listen for a click on the cell to play the game.
						cell.addEventListener('click', () => {
							if (!this.gameOver) {
								this.play(c);
							}
						});
					}
					gameBoard.appendChild(row);
				}
			}

			play(col) {
				if (!this.gameOver) {
					alert('Game is over. Please start a new game.');
					return;
				}
				console.log('***play***');
				console.log(`col: ${col}`);
				let row = this.findEmptyCell(col);
				if (row === undefined) {
					alert('Column is full. Please choose another column.');
					return;
				}
				this.dropToken(row, col);

				if (this.checkForWinner()) {
					this.gameOver = true;
					alert(`${this.players.currentPlayer} wins!`);
					return;
				} else if (this.checkForTie()) {
					this.gameOver = true;
					alert("It's a tie!");
					return;
				}

				this.players.switchPlayer();
			}
			findEmptyCell(col) {
				console.log('***findEmptyCell***'); //this method needs to find the lowest empty cell.  eg, 0-0 is the bottom left cell.
				//I need to use the board array to find the lowest empty cell in the column.
				for (let r = this.board.rows - 1; r >= 0; r--) {
					if (this.board.board[r][col] === null) {
						return r;
					}
				}
			}
			checkForWinner() {
				console.log('***checkForWinner***');
				//check rows
				for (let r = 0; r < this.board.rows; r++) {
					for (let c = 0; c < this.board.cols - 3; c++) {
						if (
							this.board.board[r][c] === this.players.currentPlayer &&
							this.board.board[r][c + 1] === this.players.currentPlayer &&
							this.board.board[r][c + 2] === this.players.currentPlayer &&
							this.board.board[r][c + 3] === this.players.currentPlayer
						) {
							return true;
						}
					}
				}
				//check columns
				for (let r = 0; r < this.board.rows - 3; r++) {
					for (let c = 0; c < this.board.cols; c++) {
						if (
							this.board.board[r][c] === this.players.currentPlayer &&
							this.board.board[r + 1][c] === this.players.currentPlayer &&
							this.board.board[r + 2][c] === this.players.currentPlayer &&
							this.board.board[r + 3][c] === this.players.currentPlayer
						) {
							return true;
						}
					}
				}
				//check diagonal
				for (let r = 0; r < this.board.rows - 3; r++) {
					for (let c = 0; c < this.board.cols - 3; c++) {
						if (
							this.board.board[r][c] === this.players.currentPlayer &&
							this.board.board[r + 1][c + 1] === this.players.currentPlayer &&
							this.board.board[r + 2][c + 2] === this.players.currentPlayer &&
							this.board.board[r + 3][c + 3] === this.players.currentPlayer
						) {
							return true;
						}
					}
				}
				//check anti-diagonal
				for (let r = 0; r < this.board.rows - 3; r++) {
					for (let c = 3; c < this.board.cols; c++) {
						if (
							this.board.board[r][c] === this.players.currentPlayer &&
							this.board.board[r + 1][c - 1] === this.players.currentPlayer &&
							this.board.board[r + 2][c - 2] === this.players.currentPlayer &&
							this.board.board[r + 3][c - 3] === this.players.currentPlayer
						) {
							return true;
						}
					}
				}
			}
			checkForTie() {
				console.log('***checkForTie***');
				for (let r = 0; r < this.board.rows; r++) {
					for (let c = 0; c < this.board.cols; c++) {
						if (this.board.board[r][c] === null) {
							return false; // If any cell is empty, it's not a tie
						}
					}
				}
				return true; // All cells are filled, it's a tie
			}
			dropToken(r, c) {
				console.log('***dropToken***');
				console.log(`row: ${r} col: ${c}`);
				//this method needs to use the current player to update the board array with the current player's token
				//in the cell determined by the row and col.
				this.board.board[r][c] = this.players.currentPlayer;
				console.log(this.board.board);
				//  I need to querry the cellToUpdate.id to update the visual elements of the game board.
				const cellToUpdate = document.getElementById(`${r}-${c}`);
				console.log(`cellToUpdate ${cellToUpdate.id}`);
				cellToUpdate.classList.add(`${this.players.currentPlayer}`);
			}
			updateBoard(col) {
				console.log('***updateBoard***');
				//this method needs to use the col as an index in the format [r][col] to update this.board
				//with the current player's token
				for (let r = this.board.rows - 1; r >= 0; r--) {
					if (this.board.board[r][col] === null) {
						this.board.board[r][col] = this.players.currentPlayer;
						this.updateCell(r, col);
						return;
					}
				}
			}
			updateCell(r, col) {
				console.log('***updateCell***');
				console.log(`row: ${r} col: ${col}`); //update board calles this method, it needs to use the board
				//same logic as the board update to update the visual elements of the game board. have the querySelector
				//use the current player to uppdate the id of the cell determined by the row and col.
				let targetCell = document.getElementById(`${r}-${col}`);

				targetCell.classList.add(`${this.players.currentPlayer}`);
			}
		}
	}
	updateBoard(col) {
		console.log('***updateBoard***');
		//this method needs to use the col as an index in the format [r][col] to update this.board
		//with the current player's token
		for (let r = this.board.rows - 1; r >= 0; r--) {
			if (this.board.board[r][col] === null) {
				this.board.board[r][col] = this.players.currentPlayer;
				console.log(this.board.board);
				console.log(`row: ${r} col: ${col}`);
				return r;
			}
		}
	}
	updateCell(r, col) {
		//this should take the r from updateBoard and the col from dropToken and update the visual element of the game board to reflect the new token.
		console.log('***updateCell***');
		const cell = document.getElementById(`${r}-${col}`);
		cell.classList.add(this.players.currentPlayer);
	}
}

new Game();
