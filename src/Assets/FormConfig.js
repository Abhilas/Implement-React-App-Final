import * as Propery from "./Property";

export const RegisterForm = [
  {
    type: "text",
    name: "first_name",
    id: "tb_firstName",
    isRequired: true,
    labelName: Propery.first_name
  },
  {
    type: "text",
    name: "last_name",
    id: "tb_lastName",
    isRequired: true,
    labelName: Propery.last_name
  },
  {
    type: "email",
    name: "email",
    id: "tb_email",
    isRequired: true,
    labelName: Propery.email
  },
  {
    type: "text",
    name: "username",
    id: "tb_username",
    isRequired: true,
    labelName: Propery.usrname
  },
  {
    type: "password",
    name: "password",
    id: "tb_password",
    isRequired: true,
    labelName: Propery.password
  }
];

export const LoginForm = [
  {
    type: "text",
    name: "username",
    id: "tb_username",
    isRequired: true,
    labelName: Propery.usrname
  },
  {
    type: "password",
    name: "password",
    id: "tb_password",
    isRequired: true,
    labelName: Propery.password
  }
];
