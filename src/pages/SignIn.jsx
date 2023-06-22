import React, { useEffect, useState } from "react";
import { provider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import Glogo from "../assets/Image/glogo.png";
import "../Style/SignUp.css";

const SignIn = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="splitScreen">
      <div className="left">
        <section className="copy">
          <h1>Board.</h1>
        </section>
      </div>
      <div className="right">
        <form>
          <section className="copy">
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </section>
          <button
            className="signupBtn google"
            type="submit"
            onClick={handleClick}
          >
            <img src={Glogo} alt="Glogo" />
            Sign in with Google
          </button>
       
          <div className="inputCointainer email">
            <label for="email">Email address</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="inputCointainer password">
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Must be 6 characters"
            />
            <i className="far fa-eye-slash"></i>
          </div>
          <button className="signupBtn" type="submit">
            Sign In
          </button>

          <section className="copy">
            <div className="loginCointainer">
              <p>
                Don't have an account <Link to="signup">Register here</Link>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
