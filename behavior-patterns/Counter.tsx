type Action = {
  type: ActionType
}

type ActionType = 'increment' | 'decrement'

type Modifier = (state: number) => number 

const increment: Modifier = state => state + 1 
const decrement: Modifier = state => state - 1 

const manager: Record<ActionType, Modifier> = {
  decrement, 
  increment 
}

const reducer = (state: number, action: Action) => manager[action.type](state)


