import React, {useState, useEffect} from 'react';
import "./Register.styles.scss";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from '../../../firebase.js';

const RegisterComplete = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"))
  }, []);

  const handleSubmit = async  (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
      return toast.error("Password must be at least 6 charaters");
    }

    if (!email || !password) {
      return toast.error("Email and password is required");
    }

    try {
      const result = await auth.signInWithEmailLink(
        email, window.location.href
      )
      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult()
        history.push("/")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__container__heading">
          <h1>Complete Registration </h1>
          <p>Please enter your email to recieve a registration link.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="auth__container__input">
            <p className="label">Email :</p>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled
              autoFocus
            />
          </div>
          <div className="auth__container__input">
            <p className="label">Password :</p>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              
            />
          </div>
          <div className="auth__container__footer">
            <button  className="auth__container__footer__button">Sign Up</button>
            <NavLink to="login" className="auth__container__footer__link">
              Already have an account ? <span className="auth__container__footer__link--highlight">Sign In</span>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterComplete;
