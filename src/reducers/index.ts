//CHECKED
import reducer from './reducer'

export * from './actions'
export * from './interfaces'

export type IReducer = ReturnType<typeof reducer>//New reducer(sometimes you want to build new reducers)
export default reducer
