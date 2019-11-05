import React from "react";

const ValidateForm = (WrappedComp, validationRules) => {
  return class FormHOC extends React.Component {
    constructor() {
      super();

      this.state = {
        errorDetails: this.initializeErrorObject()
      };
    }

    initializeErrorObject = () => {
      const errObj = {};
      Object.keys(validationRules).forEach(eachRule => {
        errObj[eachRule] = {
          name: eachRule,
          msg: "",
          val: "",
          isValid: false
        };
      });

      return errObj;
    };

    onElementChangehandler = event => {
      const getElementName = event.target.name,
        getElementType = event.target.type,
        getElementValue = event.target.value.trim(),
        rules = validationRules[getElementName];

      // Check for Input, Checkbox, Radio Button
      switch (getElementType) {
        case "text":
        case "email":
        case "password":
          this.checkValidation(getElementName, getElementValue, rules);
      }
    };

    checkValidation = (elementName, elementValue, validRules) => {
      const validationError = {};

      if (
        validRules.isRequired &&
        validRules.isRequired.value === true &&
        elementValue.length === 0
      ) {
        validationError.id = elementName;
        validationError.msg = validRules.isRequired.errMsg;
        validationError.val = elementValue;
        validationError.isValid = false;
      } else if (
        validRules.minValue &&
        elementValue.length !== 0 &&
        elementValue.length <= validRules.minValue.value
      ) {
        validationError.id = elementName;
        validationError.msg = validRules.minValue.errMsg;
        validationError.val = elementValue;
        validationError.isValid = false;
      } else if (
        validRules.regexExp &&
        elementValue.length !== 0 &&
        !elementValue.match(validRules.regexExp.value)
      ) {
        validationError.id = elementName;
        validationError.msg = validRules.regexExp.errMsg;
        validationError.val = elementValue;
        validationError.isValid = false;
      } else if (validRules.cannotBeSameAs && elementValue.length !== 0) {
        const dummy = validRules.cannotBeSameAs.value;
        for (let cnt = 0; cnt < dummy.length; cnt++) {
          if (elementValue === this.state.errorDetails[dummy[cnt]].val) {
            validationError.id = elementName;
            validationError.msg = validRules.cannotBeSameAs.errMsg;
            validationError.val = elementValue;
            validationError.isValid = false;
            break;
          } else {
            validationError.id = elementName;
            validationError.msg = "";
            validationError.val = elementValue;
            validationError.isValid = true;
          }
        }
      } else {
        validationError.id = elementName;
        validationError.msg = "";
        validationError.val = elementValue;
        validationError.isValid = true;
      }

      this.updateErrorState(elementName, validationError);
    };

    updateErrorState = (elementId, errorObj) => {
      const errorDetail = { ...this.state.errorDetails };
      errorDetail[elementId].msg = errorObj.msg;
      errorDetail[elementId].val = errorObj.val;
      errorDetail[elementId].isValid = errorObj.isValid;

      this.setState({
        errorDetails: errorDetail
      });
    };

    validateFormAndReturnStatus = (targetForm, formConfig) => {
      let isValidStatus = true,
        formValue = {};
      formConfig.forEach(eachConfig => {
        let elementname = eachConfig.name,
          elementvalue = targetForm[elementname].value;
        return this.checkValidation(
          elementname,
          elementvalue,
          validationRules[elementname]
        );
      });

      Object.keys(this.state.errorDetails).forEach(eachkey => {
        formValue[eachkey] = this.state.errorDetails[eachkey].val;
        if (!this.state.errorDetails[eachkey].isValid) {
          isValidStatus = false;
        }
      });

      return {
        isValidStatus,
        formValue
      };
    };

    render() {
      return (
        <WrappedComp
          {...this.props}
          errorDetails={this.state.errorDetails}
          ElementChangehandler={this.onElementChangehandler}
          validateForm={this.validateFormAndReturnStatus}
        />
      );
    }
  };
};

export default ValidateForm;
