//CHECKED
import global from 'global'
import { GRID } from 'typings'
import { copyGrid, getRandomIndex, solveGrid } from '../../utils'

/**
 * Removes numbers from a full grid to create a Sudoku Puzzle.
 * @param grid 9X9 Sudoku Grid
 * @param attempts number of attempts to solve (higher means more difficult) - default 5
 */
function removeNumbers(grid: GRID, attempts = 2): GRID {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)

    global.counter = 0
    solveGrid(gridCopy)

    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }
  }

  return grid
}

export default removeNumbers
