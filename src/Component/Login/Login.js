import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../Utils/input.util';
import { required } from '../../Utils/validation.util';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      login:true,
      signup:false,
      setOtp:false
    };
  }

  // generic method for changing value of input fields.
  onChangeSetToState = stateKey => e => {
    this.setState({ [stateKey]: e.currentTarget.value.trim() });
  };

  onSubmitLogin = () => {
    this.props.onSubmit(this.state);
  };
  onSubmitRegister=()=>{
    this.props.onRegister(this.state);
  }
  registerPage=()=>{
    this.setState({
      login:false,
      signup:true
    })
  }
  loginPage=()=>{
    this.setState({
      login:true,
      signup:false
    })
  }

  setOtpToTrue=()=>{
    this.setState({
      setOtp:!this.state.setOtp,
    });
  }

  generateOTP(){
    console.log(this.state.phone);
  }
  render() {
    return (
      <div className="login-container">
        {this.state.login && <div className="form-login">
          <h4>Admin Login</h4> <button type="button" style={{position:'relative',bottom:'50px',float:'right'}} className="btn btn-success" onClick={this.registerPage}>Register</button>
          <form onSubmit={this.props.handleSubmit(this.onSubmitLogin)}>
            <Field
              name="phone"
              placeholder="Phone Number"
              component={renderInput}
              type="number"
              value={this.state.phone}
              onChange={this.onChangeSetToState('phone')}
              validate={required}
              className="form-control"
              parentClass="form-group"
            />
            {!this.state.setOtp && <Field
              name="password"
              placeholder="Password"
              component={renderInput}
              type="password"
              value={this.state.password}
              onChange={this.onChangeSetToState('password')}
              validate={required}
              className="form-control"
              parentClass="form-group"
            />}
            {this.state.setOtp && <Field
              name="otp"
              placeholder="OTP"
              component={renderInput}
              type="number"
              value={this.state.otp}
              onChange={this.onChangeSetToState('otp')}
              validate={required}
              className="form-control"
              parentClass="form-group"
            />}
            <br />
            <div className="wrapper">
              <button className="btn btn-primary" type="submit" disabled={this.props.isLoading}>
                {this.props.isLoading ? <span className="spinner" /> : <span>Login</span>}
              </button>
              {!this.state.setOtp && <button type="button" style={{float:'right'}} className="btn btn-danger" onClick={this.setOtpToTrue}>Login Via OTP</button>}
              {this.state.setOtp && <button type="button" style={{float:'right'}} className="btn btn-danger" onClick={this.setOtpToTrue}>Login Via Password</button>}
              {this.state.setOtp && <button type="button" style={{float:'left'}} className="btn btn-danger" onClick={this.generateOtp}>SEND OTP</button>}
            </div>
          </form>
        </div>}
        {this.state.signup && <div className="form-login">
          <h4>Register</h4><button type="button" style={{position:'relative',bottom:'50px',float:'right'}}className="btn btn-success" onClick={this.loginPage}>Login</button>
          <form onSubmit={this.props.handleSubmit(this.onSubmitRegister)}>
            <Field
              name="Registerphone"
              placeholder="Phone Number"
              component={renderInput}
              type="number"
              value={this.state.RegisterPhone}
              onChange={this.onChangeSetToState('Registerphone')}
              validate={required}
              className="form-control"
              parentClass="form-group"
            />
            <Field
              name="Registerpassword"
              placeholder="Password"
              component={renderInput}
              type="password"
              value={this.state.Registerpassword}
              onChange={this.onChangeSetToState('Registerpassword')}
              validate={required}
              className="form-control"
              parentClass="form-group"
            />
            <br />
            <div className="wrapper">
              <button className="btn btn-primary" type="submit" disabled={this.props.isLoading}>
                {this.props.isLoading ? <span className="spinner" /> : <span>Register</span>}
              </button>
              
            </div>
          </form>
        </div>}
      </div>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(Login);
