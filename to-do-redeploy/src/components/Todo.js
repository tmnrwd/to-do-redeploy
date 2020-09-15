import React from "react"
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

class Todo extends React.Component {

  render() {
    return (
      <tr>
        <td>
          {this.props.id}
        </td>

        <td>
          <span style={{
            textDecoration: this.props.completed
              ? 'line-through' : 'none'
          }} onClick={this.props.onClick}>
            {this.props.text}
          </span>
        </td>

        <td>
          <Button variant="danger" onClick={this.props.removeClick}>remove</Button>
        </td>

      </tr>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo