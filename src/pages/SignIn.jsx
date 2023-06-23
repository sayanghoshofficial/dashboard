import React, { useContext, useEffect, useState } from "react";
import { signInWithGoogle } from "../firebase";

import { Link, useNavigate } from "react-router-dom";
import Glogo from "../assets/Image/glogo.png";
import "../Style/SignUp.css";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();

    signInWithGoogle();
  };

  useEffect(()=>{
    if(currentUser){
      navigate("/dashboard")
    }
  },[currentUser])

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
            onClick={handleSignIn}
          >
            <img src={Glogo} alt="Glogo" />
            Sign in with Google
          </button>

          <div className="inputCointainer email">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="inputCointainer password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Must be 6 characters"
            />
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
