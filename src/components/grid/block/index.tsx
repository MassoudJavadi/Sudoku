//CHECKED
import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IReducer, selectBlock } from 'reducers'
import { N, INDEX } from 'typings'

import { Container } from './styles'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  value: N
  isPuzzle:boolean
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
   //Look at reducer state, and return some value from that. 
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock,challengeGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      //challengeGrid for write our own number in different style in compere with original sudoku table.
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    //If (!state) because if we select the same block, we don't want to change the state.
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      puzzle = {state.isPuzzle}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block