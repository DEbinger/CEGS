<<<<<<< Updated upstream
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/usersAction';
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
        // console.log('User Signed Up: ', user);
        this.props.onAddUser(user);
        this.props.history.push('/signin');          
      });
  }

  handleSubmit(event){
    // console.log('WHAT THE STATE: ', this.state);
    
    event.preventDefault();

    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    function validatePassword(){
      if(password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity('Passwords Don\'t Match');
      }else{
        confirmPassword.setCustomValidity('');
      }      
    }

    password.oninput = validatePassword;
    confirmPassword.oninput = validatePassword;

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
    // console.log('SIGN UP STATE: ', this.state);
    return (
      <div id="signUp" className="user">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} ref="reset">
          <input type="text" name="first_name" pattern="[A-Za-z]+" title="Enter your first name. Letters only."placeholder='First Name' autoComplete='off' value={this.state.first_name} onChange={this.handleFirstName} required/>
          <br />
          <input type="text" name="last_name" pattern="[A-Za-z]+" title="Enter your last name. Letters only."placeholder="Last Name" autoComplete="off" value={this.state.last_name} onChange={this.handleLastName} required/>
          <br />
          <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Your email is not valid. Please enter a valid email address." placeholder="Email" autoComplete="off" value={this.state.email} onChange={this.handleEmail} required/>
          <br />
          <input id="password" type="password" minLength="8" maxLength="128" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters." placeholder="Password" autoComplete="off" value={this.state.password} onChange={this.handlePassword} required/>
          <br />
          <input id="confirmPassword" type="password" name="confirm_password" placeholder="Confirm Password" autoComplete="off" value={this.state.confirm_password} onChange={this.handleConfirmPassword} required/>
          <br />
          <select name="security_question" value={this.state.security_question} onChange={this.handleSecurityQuestion} required>
            <option>Select a Security Question</option>
            <option value="What is your favorite color?">What is your favorite color?</option>
            <option value="What is the name of the high school you attended?">What is the name of the high school you attended?</option>
            <option value="What city were you born in?">What city were you born in?</option>
          </select>
          <br />
          <input type="text" name="security_answer" pattern="[A-Za-z0-9]{4,}" title="Enter a security question. Letters and Numbers only. Must be 4 characters long." maxLength="32" placeholder="Security Answer" autoComplete="off" value={this.state.security_answer} onChange={this.handleSecurityAnswer} required/>
          <br />
          <input type="submit" value="Sign Up" />
        </form>
        <input type="submit" value="Sign Up with Google" />
        <input type="submit" value="Sign Up with Facebook" />
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
    }
  }
=======
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : ' Required'
const letters = value => value && !/^[A-Za-z]+[^*0-9]/.test(value) ? 'Letters only' : undefined
const alphanum = value => value && !/^[A-Za-z0-9 ]{4,}/ ? ' Must be at least 4 characters long and contain only letters and numbers' : undefined
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(value) ?
  'Invalid email address' : undefined
const userPassword = value =>
  value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,32}/.test(value) ? ' Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.' : console.log(value)

const renderInputFields = ({ input, select, placeholder, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

const renderSelectField = ({ input, select, placeholder, label, type, meta: { touched, error, warning }, children }) => (
  <div>
    <select { ...input}>
     {children}
   </select>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

const SignUp = (props) => {
  const { handleSubmit,
          handleFirstName,
          handleLastName,
          handleEmail,
          handlePassword,
          handleConfirmPassword,
          handleSecurityQuestion,
          handleSecurityAnswer
   } = props
  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <Field name="firstName" type="text"
          component={renderInputFields} placeholder="First Name"
          autoComplete='off'
          validate={[required, letters]}
        />
        <br />
        <Field name="lastName" type="text"
          component={renderInputFields} placeholder="Last Name"
          autoComplete="off"
          validate={[required, letters]}
        />
        <br />
        <Field name="email" type="email"
          component={renderInputFields} placeholder="Email"
          autoComplete="off"
          validate={[required, email]}
        />
        <br />
        <Field name="password" type="password"
          component={renderInputFields} placeholder="Password"
          autoComplete="off"
          validate={[required, userPassword]}
        />
        <br />
        <Field name="confirmPassword" type="password"
          component={renderInputFields} placeholder="Confirm Password"
          autoComplete="off"
          validate={[required]}
        />
        <br />
        <Field name="securityQuestion"
          component={renderSelectField}
          validate={[required]}
        >
          <option>Select a Security Question</option>
          <option value="What is your favorite color?">What is your favorite color?</option>
          <option value="What is the name of the high school you attended?">What is the name of the high school you attended?</option>
          <option value="What city were you born in?">What city were you born in?</option>
        </Field>
        <br />
        <Field name="securityAnswer" type="text"
          component={renderInputFields} maxLength="32"
          placeholder="Security Answer"
          autoComplete="off"
          validate={[required, alphanum]}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <input type="submit" value="Sign Up with Google" />
      <input type="submit" value="Sign Up with Facebook" />
    </div>
  )
>>>>>>> Stashed changes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);