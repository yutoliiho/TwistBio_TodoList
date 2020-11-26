import React from 'react';
import styled from 'styled-components';

import Form from './Form.jsx';
import TodoList from './TodoList.jsx'
import Footer from './Footer.jsx'

const axios = require('axios')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['TongTong'],
      completed: [],
    }
    this.addTodo = this.addTodo.bind(this);
    this.addCompleted = this.addCompleted.bind(this);
    this.resetCompleted = this.resetCompleted.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }
  addTodo(item) {
    // console.log(item);
    this.setState({
      todos: [...this.state.todos, item]
    })
  }
  addCompleted(item) {
    this.setState({
      completed: [...this.state.completed, item]
    })
  }
  resetCompleted() {
    this.setState({
      completed: []
    })
  }
  deleteTodo(item) {
    // find the todo in todos, and remove it.
    var todos = this.state.todos;
    console.log(todos)
    var len = todos.length;
    console.log(len)
    var newTodos = [];
    for (var i = 0; i < len; i++) {
      if (todos[i] === item) {
        newTodos = todos.splice(i, 1)
        this.setState({
          todos: newTodos
        })
      }
    }
  }
  deleteCompleted() {
    this.setState({
      completed: []
    })
  }
  deleteAll() {
    this.setState({
      todos: []
    })
  }
  componentDidMount() {
    console.log('componentDidMount is working');
  }
  render() {
    return (
      <div>
        <title>Todo</title>
        <Form addTodo={this.addTodo}></Form>
        <TodoList
          todos={this.state.todos}
          completed={this.state.completed}
          addCompleted={this.addCompleted}
          deleteCompleted={this.deleteCompleted}
          deleteTodo={this.deleteTodo}
        ></TodoList>
        <Footer resetCompleted={this.resetCompleted}
          deleteAll={this.deleteAll}></Footer>
      </div>
    )
  }
}

export default App;