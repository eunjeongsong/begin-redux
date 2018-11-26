// 카운터 관련 상태 로직
import { createAction, handleActions } from "redux-actions"

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)

const initialState = {
  number: 0
}

export default handleActions(
  {
    [INCREMENT]: ({ number }) => ({
      number: number + 1
    }),
    [DECREMENT]: ({ number }) => ({
      number: number - 1
    })
  },
  initialState
)
