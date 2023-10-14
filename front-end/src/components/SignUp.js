import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = () => {
    console.log(`${name} - ${email} - ${password}`);
  };
  return (
    <div className="register">
      <h1>REGISTER</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter NAME"
        onChange={(e) => setName(e.target.value)}></input>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={collectData}>Sign Up</button>
    </div>
  );
};

export default SignUp;
