import React, { useState } from "react";
import "./Login.css";
import Signup from "./Signup";
const Login = () => {
  const [signin, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {!signin ? (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getstarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        ) : (
          <Signup />
        )}
      </div>
    </div>
  );
};

export default Login;
