// jshint esversion:6

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/usersAction';
import signUpReq from '../../../server/lib/userReq';

class SignUp extends Component {

  constructor (props) {
    super(props);

      this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      security_question: '',
      security_answer: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSecurityQuestion = this.handleSecurityQuestion.bind(this);
    this.handleSecurityAnswer = this.handleSecurityAnswer.bind(this);

  }

  // XHR Request
  addUser(users){
    signUpReq(users)
      .then(users => {
        console.log('User Signed Up: ', users);
        this.props.onAddUser(users.id, users.first_name, users.last_name, users.email, users.password, users.security_question, users.security_answer);
      });
  }

  handleSubmit(event){
    console.log(this.state);

    event.preventDefault();


    this.addUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      security_question: this.state.security_question,
      security_answer: this.state.security_answer
    });
    event.preventDefault();
  }

  handleFirstName(event){
    this.setState({
      first_name: event.target.value
    });
  }

  handleLastName(event){
    this.setState({
      last_name: event.target.value
    });
  }

  handleEmail(event){
    this.setState({
      email: event.target.value
    });
  }

  handlePassword(event){
    this.setState({
      password: event.target.value
    });
  }

  handleSecurityQuestion(event){
    this.setState({
      security_question: event.target.value
    });
  }

  handleSecurityAnswer(event){
    this.setState({
      security_answer: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>SIGN UP</h1>
        <form onSubmit={this.handleSubmit} ref="rest">
          <input type='text' name="first_name" placeholder='First Name' autoComplete='off' value={this.state.first_name} onChange={this.handleFirstName} />
          <br />
          <input type='text' name="last_name" placeholder='Last Name' autoComplete='off' value={this.state.last_name} onChange={this.handleLastName} />
          <br />
          <input type='email' name="email" placeholder='Email' autoComplete='off' value={this.state.email} onChange={this.handleEmail} />
          <br />
          <input type='password' name="password" placeholder='Password' autoComplete='off' value={this.state.password} onChange={this.handlePassword} />
          <br />
          <input type='password' placeholder='Confirm Password' autoComplete='off' />
          <br />
          <select name="security_question" value={this.state.security_question} onChange={this.handleSecurityQuestion} >
            <option>Select a Security Question</option>
            <option value="color">What is your favorite color?</option>
            <option value="school">What is the name of the high school you attended?</option>
            <option value="birthplace">What city were you born in?</option>
          </select>
          <br />
          <input type='text' name="security_answer" placeholder='Security Answer' autoComplete='off' value={this.state.security_answer} onChange={this.handleSecurityAnswer} />
          <br />
          <input type='submit' value='Sign Up' />
        </form>
        <input type='submit' value='Sign Up with Google' />
        <input type='submit' value='Sign Up with Facebook' />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    onAddUser: (id, first_name, last_name, email, password, security_question, security_answer) => {
      dispatch(addUser(id, first_name, last_name, email, password, security_question, security_answer));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);