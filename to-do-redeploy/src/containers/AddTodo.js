import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class AddTodo extends React.Component {
  
render(){
  let input

  return(
    <Card className="mb-5 mt-2">
      <Card.Body>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()) {
          return
        }
        this.props.dispatch(addTodo(input.value))
        input.value = ''
      }}
      >
        <input ref={node => {
          input = node
        }}
        />
        <Button className="ml-5" type="submit">Add Task</Button>
      </form>
      </Card.Body>
    </Card>
  )
}}

export default connect() (AddTodo)

