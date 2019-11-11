import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../Actions";
import ValidateForm from "../UtilityComponents/Form/FormValidateHOC";
import { RegisterForm } from "../Assets/FormConfig";
import { RegisterFormValidation } from "../Assets/FormValidationConfig";
import "../Assets/CSS/register.css";
import RegisterImg from "../Assets/Images/signup-image.jpg";

class Register extends React.Component {
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

  registerUserForm = event => {
    event.preventDefault();
    const getFormValidity = this.props.validateForm(event.target, RegisterForm);

    if (getFormValidity.isValidStatus) {
      this.props.registerUser(getFormValidity.formValue);
    }
  };

  componentDidMount() {
    const eleArry = [];
    RegisterForm.map(eachConfig => {
      return eleArry.push(eachConfig.name);
    });

    this.setState({
      eleName: eleArry
    });
  }

  render() {
    return (
      <div className="registerContainer signup-content">
        <div className="signup-form">
          <h2>Register</h2>
          <hr />
          <form className="ui form error" onSubmit={this.registerUserForm}>
            {this.buildElements(RegisterForm)}
            <button className="ui button primary">Register</button>
          </form>
        </div>
        <div className="signup-image">
          <figure>
            <img src={RegisterImg} />
          </figure>
          <Link to="/login" className="signup-image-link">
            I am already a member
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(ValidateForm(Register, RegisterFormValidation));
