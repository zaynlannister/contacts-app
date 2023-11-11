import { useDispatch } from "react-redux";
import "./login.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { login } from "../../stores/slices/authSlice";
import styled from "styled-components";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange } = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/contacts");
    dispatch(login({ ...values }));
  };
  return (
    <StyledLogin className="login">
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="login__txt-field">
          <input onChange={handleChange} name="name" type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="login__txt-field">
          <input
            onChange={handleChange}
            name="phoneNumber"
            type="text"
            required
          />
          <span></span>
          <label>Phone number</label>
        </div>
        <input className="login__submit-btn" type="submit" value="Login" />
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  @media (max-width: 405px) {
    width: 100%;
    border-radius: 0;
  }
`;

export default LoginPage;
