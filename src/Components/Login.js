import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../Actions";
import ValidateForm from "../UtilityComponents/Form/FormValidateHOC";
import { LoginForm } from "../Assets/FormConfig";
import { LoginFormValidation } from "../Assets/FormValidationConfig";
import "../Assets/CSS/register.css";
import LoginImg from "../Assets/Images/signin-image.jpg";

class Login extends React.Component {
  state = {
    eleName: []
  };

  buildErrorElement = elementName => {
    const errorContent =
      this.props.errorDetails[elementName].msg !== "" ? (
        <div className="ui error message">
          <div className="header">
            {this.props.errorDetails[elementName].msg}
          </div>
        </div>
      ) : (
        ""
      );

    return errorContent;
  };

  buildElementWrapper = eleConfig => {
    let eleControl;
    const { isRequired, labelName, ...eleProps } = eleConfig;
    switch (eleConfig.type) {
      default:
        eleControl = (
          <>
            <label>{labelName}</label>
            <input
              {...eleProps}
              onChange={this.props.ElementChangehandler}
              autoComplete="off"
            />
            {this.buildErrorElement(eleConfig.name)}
          </>
        );
        break;
    }

    return (
      <div key={eleConfig.id} className="field">
        {eleControl}
      </div>
    );
  };

  buildElements = config => {
    const ele = config.map(eachConfig => {
      return this.buildElementWrapper(eachConfig);
    });

    return ele;
  };

  loginUserForm = event => {
    event.preventDefault();
    const getFormValidity = this.props.validateForm(event.target, LoginForm);

    if (getFormValidity.isValidStatus) {
      this.props.loginUser(getFormValidity.formValue);
    }
  };

  componentDidMount() {
    const eleArry = [];
    LoginForm.map(eachConfig => {
      return eleArry.push(eachConfig.name);
    });

    this.setState({
      eleName: eleArry
    });
  }

  render() {
    return (
      <div className="registerContainer signin-content">
        <div className="signin-image">
          <figure>
            <img src={LoginImg} />
          </figure>
          <Link to="/register" className="signup-image-link">
            Create an account
          </Link>
        </div>
        <div className="signin-form">
          <h2>Login</h2>
          <hr />
          <form className="ui form error" onSubmit={this.loginUserForm}>
            {this.buildElements(LoginForm)}
            <button className="ui button primary">Login</button>
          </form>
          <div className="social-login">
            <span className="social-label">Or login with</span>
            <ul className="socials">
              <li>
                <a href="#">
                  <i className="large google icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(ValidateForm(Login, LoginFormValidation));
