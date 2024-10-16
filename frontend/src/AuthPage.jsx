import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  // State to track login failure and show signup form
  const [loginFailed, setLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => {
        props.onAuth({ ...r.data, secret });
        setLoginFailed(false); // Reset login failure on success
      })
      .catch((e) => {
        setErrorMessage("Login failed. Please sign up if you don't have an account.");
        setLoginFailed(true); // Show signup form if login fails
      });
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => {
        props.onAuth({ ...r.data, secret });
        setLoginFailed(false); // Reset after successful signup
      })
      .catch((e) => setErrorMessage(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page">
      <h1 className="welcome-title">WELCOME TO MAI CHAT</h1>
      <div className="card">
        {/* Login Form */}
        <form onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit">LOG IN</button>
        </form>

        {/* Error Message */}
        {loginFailed && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        {/* Sign Up Form (Visible after login fails) */}
        {loginFailed && (
          <form onSubmit={onSignup}>
            <div className="title">Sign Up</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <button type="submit">SIGN UP</button>
          </form>
        )}
      </div>

      
    </div>
  );
};

export default AuthPage;
