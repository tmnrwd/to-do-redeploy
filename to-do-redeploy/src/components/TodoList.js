import React from "react"
import PropTypes from 'prop-types'
import Todo from './Todo'
import Table from 'react-bootstrap/Table'

class TodoList extends React.Component {

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((todo) => (
            <Todo key={todo.id} {...todo}
              onClick={() => this.props.onTodoClick(todo.id)}
              removeClick={() => this.props.removeClick(todo.id)} />
          ))}
        </tbody>
      </Table>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
