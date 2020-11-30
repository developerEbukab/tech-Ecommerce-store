import React, {useState} from 'react';
import "./Register.styles.scss";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from '../../../firebase.js';

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async  (e) => {
    e.preventDefault();
    console.log("clicked")
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true
    }
    console.log("email", email)
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(`Email is sent to ${email}. Click the link to complete your registration`)
    window.localStorage.setItem("emailForRegistration", email);
    setEmail("")
  }
  console.log("email", email)

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__container__heading">
          <h1>Don't have an account ?</h1>
          <p>Please enter your email to recieve a registration link.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="auth__container__input">
            <p className="label">Email :</p>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
          </div>
          <div className="auth__container__footer">
            <div  className="auth__container__footer__button">Send Link</div>
            <NavLink to="login" >
              <p className="auth__container__footer__link">Already have an account ? <span className="auth__container__footer__link--highlight">  Sign In</span></p>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
