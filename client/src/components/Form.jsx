import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.02);
    // z-index: 2;
    // box-shadow: none;
    // position: relative;
    margin: 0;
    width: '100%'
    font-size: 24px;
    font-family: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    // border: 1px solid #999;
    // box-shadow:
    // -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;`

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.props.addTodo(this.state.value);
    console.log(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          <input
            style={{
              padding: '16px 16px 16px 60px',
              border: 'none',
              background: 'rgba(0, 0, 0, 0.02)',
              // zIndex: '2',
              // boxShadow: 'none',
              // position: 'relative',
              // margin: '0',
              width: '100%',
              fontSize: '24px'
            }}
            type="text" value={this.state.value}
            placeholder='What needs to be done?' onChange={this.handleChange} />
        </Label>

        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}

export default Form;