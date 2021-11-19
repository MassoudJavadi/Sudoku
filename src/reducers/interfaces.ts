//CHECKED
import { BLOCK_COORDS, GRID } from 'typings'

//The whole state = GRID
//GRID is optional => grid?
export interface IReducer {
  challengeGrid?: GRID
  selectedBlock?: BLOCK_COORDS
  solvedGrid?: GRID
  workingGrid?: GRID
}
