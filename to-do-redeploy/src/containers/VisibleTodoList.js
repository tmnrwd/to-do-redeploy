import {connect} from 'react-redux'
import{toggleTodo} from '../actions/index'
import TodoList from '../components/TodoList'
import {removeTodo} from '../actions/index'

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t =>!t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    removeClick: id =>{
      dispatch(removeTodo(id))
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList

