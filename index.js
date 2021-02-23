import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

// Conditional Rendering
// If you do not want to display the h1 element until the user has done any input, you can add an if statement.
// Look at the example below and note the following:
// 1. We create an empty variable, in this example we call it header.
// 2. We add an if statement to insert content to the header variable if the user has done any input.
// 3. We insert the header variable in the output, using curly brackets.
// Example: Display the header only if username is defined.

class MyFormWithUsername extends React.Component{
  constructor(props){
    super(props);
    this.state = { username: '' };
  }

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render(){
    let header = '';
    if(this.state.username){
      header = <h1>Hello {this.state.username}</h1>;
    }else{
      header = '';
    }

    return (
      <form>
        {header}
        <p>Enter your name:</p>
        <input type='text' onChange={this.myChangeHandler} />
      </form>
    );
  }
}

// Submitting Forms
// You can control the submit action by adding an event handler in the onSubmit attribute:
class MyFormOnSubmit extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: ''};
  }

  mySubmitHandler = (event) =>{
    event.preventDefault();
    alert("You are submitting "+this.state.username);
  }

  myChangeHandler = (event) =>{
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
        />
      </form>
    );
  }
}

// Multiple Input Fields
// You can control the values of more than one input field by adding a name attribute to each element.
// When you initialize the state in the constructor, use the field names.
// To access the fields in the event handler use the event.target.name and event.target.value syntax.
// To update the state in the this.setState method, use square brackets [bracket notation] around the property name.
// Validating Form Input
// You can validate form input when the user is typing or you can wait until the form gets submitted.
class MyFormMultiFields extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;

    if(!Number(age)){
      age = null;
      document.getElementsByName("age")[0].value = "";
      alert("Your age must be a number");
    }
  }

  myChangeHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]: val});
  }

  render(){
    return(
      <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input type='text' name='username' onChange={this.myChangeHandler} />

        <p>Enter your age: </p>
        <input type='text' name='age' onChange={this.myChangeHandler}/>
      </form>
    );
  }
}

ReactDOM.render(
  <MyFormMultiFields />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
