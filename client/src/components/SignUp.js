import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, userErrorMsg } from '../redux/actions/usersAction';
import signUpReq from '../../lib/userReq';

class SignUp extends Component {

  constructor (props) {
    super(props);

      this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      security_question: '',
      security_answer: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleSecurityQuestion = this.handleSecurityQuestion.bind(this);
    this.handleSecurityAnswer = this.handleSecurityAnswer.bind(this);

  }

  // XHR Request

  addUser(user){
    signUpReq(user)
      .then(user => {
        this.props.onAddUser(user);
        this.props.history.push('/signin');
      });
  }

  handleSubmit(event){

    event.preventDefault();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let securityQuestion = document.getElementById("securityQuestion");
    let securityAnswer = document.getElementById("securityAnswer");

    //  sign up form validation and error messages

    //  validation that all input fields are not empty strings
    if ( firstName.value === '' && lastName.value === '' && email.value === '' && password.value === '' && confirmPassword.value === '' && securityQuestion.value === '' && securityAnswer.value === '') {
      return this.props.onUserErrorMsg('All fields are required');
    }

    //  first name validation
    if (firstName.value === '') {
      return this.props.onUserErrorMsg('First name is required');
    } else if ( firstName.value.length > 32 ) {
      return this.props.onUserErrorMsg('First name exceeds character limit');
    } else if (firstName.value.length >= 1 && firstName.value.length < 3 ) {
      return this.props.onUserErrorMsg('First name must be at least 4 characters');
    } else if (firstName.value.match(/\d+/)) {
      return this.props.onUserErrorMsg('First name cannot contain numbers');
    }

    //  last name validation
    if (lastName.value === '') {
      return this.props.onUserErrorMsg('Last name is required');
    } else if ( lastName.value.length > 32 ) {
      return this.props.onUserErrorMsg('Last name exceeds character limit');
    } else if (lastName.value.length >= 1 && lastName.value.length < 3 ) {
      return this.props.onUserErrorMsg('Last name must be at least 4 characters');
    } else if (lastName.value.match(/\d+/)) {
      return this.props.onUserErrorMsg('Last name cannot contain numbers');
    }

    //  email validation
    if (email.value === '') {
      return this.props.onUserErrorMsg('A valid email is required');
    } else if ( !email.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      return this.props.onUserErrorMsg('Email is invalid');
    }

    //  password validation
    if (password.value === '') {
      return this.props.onUserErrorMsg('Password required');
    } else if (!password.value.match(/^(?=.{8,16})/)) {
      return this.props.onUserErrorMsg('Password must be at least 8 characters but no more than 16 characters');
    } else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)) {
      return this.props.onUserErrorMsg('Must contain at least one uppercase letter, one lowercase letter, one special character, and one number.');
    }

    //  confirm passwords match
    if (confirmPassword.value === '') {
      return this.props.onUserErrorMsg('Please confirm your password');
    } else if( confirmPassword.value !== '' && password.value !== confirmPassword.value){
      return this.props.onUserErrorMsg('Passwords don\'t match');
    }

    // securityQuestion validation
    if ( securityQuestion.value === '' ) {
      return this.props.onUserErrorMsg('Must select a security question');
    }

    // securityAnswer Validation
    if ( securityAnswer.value === '' ) {
      return this.props.onUserErrorMsg('Must enter a security answer');
    } else if ( securityAnswer.value.length > 32 ) {
      return this.props.onUserErrorMsg('Security answer exceeds character limit');
    } else if ( securityAnswer.value.length >= 1  && securityAnswer.value.length < 3 ) {
      return this.props.onUserErrorMsg('Security answer must be at least 4 characters');
    }

    this.addUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      security_question: this.state.security_question,
      security_answer: this.state.security_answer
    });

    // clears form after submit
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      security_question: '',
      security_answer: ''
    });


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

  handleConfirmPassword(event){
    this.setState({
      confirm_password: event.target.value
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
      <div id="signUp" className="user">
        <h1>Sign Up</h1>
        <p className="errorMsg" >{ this.props.users.userErrorMsg }</p>
        <form onSubmit={this.handleSubmit} ref="reset">
          <label htmlFor="firstName" >First Name </label>
          <input id="firstName" type="text" name="first_name" placeholder='First Name' autoComplete='off' maxLength="32" value={this.state.first_name} onChange={this.handleFirstName} />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" name="last_name" placeholder="Last Name" autoComplete="off" maxLength="32" value={this.state.last_name} onChange={this.handleLastName} />
          <br />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="Email" autoComplete="off" value={this.state.email} onChange={this.handleEmail} />
          <br />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="Password" autoComplete="off" maxLength="16" value={this.state.password} onChange={this.handlePassword} />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" name="confirm_password" placeholder="Confirm Password" autoComplete="off" value={this.state.confirm_password} onChange={this.handleConfirmPassword} />
          <br />
          <label htmlFor="securityQuestion">Security Question</label>
          <select id="securityQuestion" name="security_question" value={this.state.security_question} onChange={this.handleSecurityQuestion} >
            <option value="">Select a Security Question</option>
            <option value="What is your favorite color?">What is your favorite color?</option>
            <option value="What is the name of the high school you attended?">What is the name of the high school you attended?</option>
            <option value="What city were you born in?">What city were you born in?</option>
          </select>
          <br />
          <label htmlFor="securityAnswer">Security Answer</label>
          <input id="securityAnswer" type="text" name="security_answer" placeholder="Security Answer" autoComplete="off" maxLength="32" value={this.state.security_answer} onChange={this.handleSecurityAnswer}/>
          <br />
          <button className="submitBtn" type="submit">Sign Up</button>
        </form>
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
    onAddUser: (user) => {
      dispatch(addUser(user));
    },
    onUserErrorMsg: (userErrorMessage) => {
      dispatch(userErrorMsg(userErrorMessage))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
