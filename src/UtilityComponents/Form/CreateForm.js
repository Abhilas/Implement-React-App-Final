import React from "react";
import ValidateForm from "./FormValidateHOC";
import { RegisterFormValidation } from "../../Assets/FormValidationConfig";

class BuildForm extends React.Component {
  //const { configData, submitHandler, changeHandler, errorDetails } = props;

  buildErrorElement = elementName => {
    return (
      <div className="ui error message">
        <div className="header">{this.props.errorDetails[elementName].msg}</div>
      </div>
    );
  };

  buildElementWrapper = eleConfig => {
    let eleControl;
    const { isRequired, labelName, ...eleProps } = eleConfig;
    switch (eleConfig.type) {
      default:
        eleControl = (
          <>
            <label>{labelName}</label>
            <input {...eleProps} onChange={this.props.formChangeHandler} />
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

  buildElements = () => {
    this.props.configData.map(eachConfig => {
      return this.buildElementWrapper(eachConfig);
    });
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.submitHandler}>
        {this.buildElements()}
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default ValidateForm(BuildForm, RegisterFormValidation);
