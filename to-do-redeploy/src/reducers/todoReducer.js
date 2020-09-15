import{ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/index'

export function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case REMOVE_TODO:
      return state.filter((_, id) => action.id !== id)
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}