import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(); // Notify parent
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} /><br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

