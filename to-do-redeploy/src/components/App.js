import React from 'react';
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            Redux Todo
          </Navbar.Brand>
        </Navbar>
        <Container>
          <AddTodo />
          <Filters />
          <VisibleTodoList />
        </Container>

      </div >
    )
  }
}

export default App;
