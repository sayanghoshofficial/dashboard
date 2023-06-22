import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import Glogo from "../assets/Image/glogo.png";
import "../Style/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
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
            <h2>Sign Up</h2>
            <p>Sign up to your account</p>
          </section>
          <button
            className="signupBtn google"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
              navigate("/dashboard");
            }}
          >
            <img src={Glogo} alt="Glogo" />
            Sign up with Google
          </button>
          <div className="inputCointainer name">
            <label htmlFor="fname">Full Name</label>
            <input id="fname" name="fname" type="text" />
          </div>
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
            Sign Up
          </button>

          <section className="copy">
            <div className="loginCointainer">
              <p>
                Already have an account <Link to="/">Log In</Link>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
