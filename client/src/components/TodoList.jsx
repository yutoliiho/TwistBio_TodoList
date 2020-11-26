import React from 'react';
import styled from 'styled-components';

import Todo from './Todo.jsx';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map(todo => (
              <Todo todo={todo} key={todo}
                deleteTodo={this.props.deleteTodo} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;