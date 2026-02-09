// Display/ UI

import { createBoard } from './minesweeper.js';

const board = createBoard(2, 2)
const boardElement = document.querySelector('.board')

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})

// 1.Populate the Board with tiles/mines
// 2. Left Click on Tiles
    // revreeal tiles
// 3. Right Click on tiles
    // Mark tiles
// 4. Check for win/lose
