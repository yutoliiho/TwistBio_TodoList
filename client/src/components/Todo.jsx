import React from 'react';
import styled from 'styled-components';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
    this.markCompleted = this.markCompleted.bind(this);
    this.delete_Todo = this.delete_Todo.bind(this);
  }

  // this.props.addCompleted(this.state.completed);
  markCompleted() {
    this.setState({
      completed: !this.state.completed
    })
  }
  delete_Todo() {
    this.props.deleteTodo(this.props.todo);
  }
  render() {
    var block;
    if (!this.state.completed) {
      block = <div style={{
        padding: '10px', backgroundColor: 'lightblue', display: "flex",
        justifyContent: 'space-between'
      }}>
        <li>{this.props.todo}</li>
        <div>
          <button style={{ padding: '5px' }}
            onClick={this.delete_Todo}> X </button>
          <button style={{ padding: '5px' }} onClick={this.markCompleted}>Not Completed</button>
        </div>
      </div>
    } else {
      block = <div style={{
        padding: '10px', backgroundColor: 'pink', display: "flex",
        justifyContent: 'space-between'
      }}>
        <li>{this.props.todo}</li>
        <div>
          <button style={{ padding: '5px' }}
            onClick={this.delete_Todo}> X </button>
          <button style={{ padding: '5px' }}
            onClick={this.markCompleted}>Completed</button>
        </div>
      </div>
    }
    return (
      <div style={{ padding: '10px' }}>
        {block}
      </div>
    );
  }
}

export default Todo;