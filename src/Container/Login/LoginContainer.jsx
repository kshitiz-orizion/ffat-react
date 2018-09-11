import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login,register } from '../../Store/Actions/auth/auth.action';
import Login from '../../Component/Login/Login';
import '../../Styles/login.css';
class LoginContainer extends Component {
  onSubmit = userCredential => {
    this.props.onLoginClick({ userCredential });
  };

  onRegister=userData=>{
    console.log(userData);
    this.props.onRegisterClick({userData});
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xs-12">
          <div>
            <Login onSubmit={this.onSubmit} onRegister={this.onRegister} isLoading={this.props.isLoading} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth,
  };
};
const mapDispatchToProps = {
  onLoginClick: login,
  onRegisterClick:register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
