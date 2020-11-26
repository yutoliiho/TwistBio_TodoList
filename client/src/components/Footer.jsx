import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.markCompletedZero = this.markCompletedZero.bind(this);
    this.deleteAll = this.deleteAll.bind(this);

  }

  markCompletedZero() {
    this.props.resetCompleted();
  }
  deleteAll() {
    this.props.deleteAll()
  }
  render() {
    var totalCount = this.props.todos;
    console.log(totalCount)
    return (
      <div>
        {/* count total todos */}
        <div>Total {totalCount}</div>
        {/* all active */}
        <div>All Active</div>
        {/* clear completed  */}
        <button onClick={this.markCompletedZero}>Clear Completed</button>
        <button onClick={this.deleteAll}>Delete All Tasks</button>
      </div>
    );
  }
}

export default Footer;