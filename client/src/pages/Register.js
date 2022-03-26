import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
    showAlert: false,
  };

  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert } = useAppContext();

  const handleChange = (e) => {
    console.log(e.target);
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {showAlert && <Alert />}
        {/* Name input */}
        {!values.isMember && (
          <FormRow
            name="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* Email input */}
        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* passwprd input */}
        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button className="btn btn-block">Submit</button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
