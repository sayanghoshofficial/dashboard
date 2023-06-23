import React, { useContext, useEffect, useState } from "react";
import { signInWithGoogle, auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Glogo from "../assets/Image/glogo.png";
import "../Style/SignUp.css";
import { AuthContext } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [submit, setSubmit] = useState(false);

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    setSubmit(true);

    signInWithGoogle();
  };

  const handleSubmitUsingEmailAndPassword = (e) => {
    e.preventDefault();
    setSubmit(true);
    const email = e.target[1].value;
    const password = e.target[2].value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Successfully LogIn!...", {
          position: "top-left",
          theme: "colored",
        });

        navigate("/dashboard");
        setSubmit(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-left",
          theme: "colored",
        });
        // setLoading(false);
        setSubmit(false);
      });
  };
  useEffect(() => {
    if (currentUser) {
      setSubmit(false);
      navigate("/dashboard");
    }
  }, [currentUser]);

  return (
    <div className="splitScreen">
      <div className="left">
        <section className="copy">
          <h1>Board.</h1>
        </section>
      </div>
      <div className="right">
        <form onSubmit={handleSubmitUsingEmailAndPassword}>
          <section className="copy">
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </section>
          <button
            className="signupBtn google"
            type="submit"
            onClick={handleSignInWithGoogle}
            disabled={submit}
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
          <button
            className={`signupBtn ${submit ? "activeS" : ""}`}
            type="submit"
            disabled={submit}
            
          >
            {submit ? "Signingin" : "Signin"}
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
