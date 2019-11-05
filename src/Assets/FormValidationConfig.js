import { RegisterFormError } from "./Property";

/* 
    To use the Validation Rules the following rules need to be followed:
    ====================================================================

    1. The key (first_name, last_name) should be same as of the 'name' property of the element.
    2. Each Property inside the Key should have 2 property
        1. value - Should be the validation rule value.
        2. errMsg - It is the Error message displayed when the 'value' is not met.
    3. Property such as 'cannotBeSameAs' is used to compare 2 element's value and has 2 property as well.
        1. value - Here the value is an array, if the value of an element should be compared with multiple values
        2. errMsg - It is the Error message displayed when the 'value' matches. 
        
*/

export const RegisterFormValidation = {
  first_name: {
    isRequired: {
      value: true,
      errMsg: RegisterFormError.emptyFirstName
    },
    minValue: {
      value: 3,
      errMsg: RegisterFormError.firstNameMin
    }
  },
  last_name: {
    isRequired: {
      value: true,
      errMsg: RegisterFormError.emptyLastName
    },
    minValue: {
      value: 3,
      errMsg: RegisterFormError.lastNameMin
    },
    cannotBeSameAs: {
      value: ["first_name"],
      errMsg: RegisterFormError.compareLastNameWithFirstName
    }
  },
  email: {
    isRequired: {
      value: true,
      errMsg: RegisterFormError.emptyEmail
    },
    regexExp: {
      value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
      errMsg: RegisterFormError.invalidEmailFormat
    }
  },
  username: {
    isRequired: {
      value: true,
      errMsg: RegisterFormError.emptyUsrname
    },
    minValue: {
      value: 3,
      errMsg: RegisterFormError.usrnameMin
    },
    cannotBeSameAs: {
      value: ["first_name", "last_name"],
      errMsg: RegisterFormError.compareLastNameWithFirstName
    }
  },
  password: {
    isRequired: {
      value: true,
      errMsg: RegisterFormError.emptyPassword
    },
    minValue: {
      value: 3,
      errMsg: RegisterFormError.passwordMin
    }
  }
};

export const LoginFormValidation = {
  username: {
    isRequired: {
      value: true,
      errMsg: RegisterFormError.emptyUsrname
    },
    minValue: {
      value: 3,
      errMsg: RegisterFormError.usrnameMin
    }
  },
  password: {
    isRequired: {
      value: true,
      errMsg: RegisterFormError.emptyPassword
    },
    minValue: {
      value: 3,
      errMsg: RegisterFormError.passwordMin
    }
  }
};
