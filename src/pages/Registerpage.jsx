import React, { useState } from "react";
import "../style/register.css";

const Registerpage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    const formData = { fullName, email, password, phone };
    console.log(formData);
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <form className="form" onSubmit={register}>
          <h2>Register</h2>
          <div className="input-container">
            <label>Full Name</label>
            <input
              value={fullName}
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label>Email</label>
            <input
              value={email}
              type="email"
              placeholder="Enter your full name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label>Phone</label>
            <input
              value={phone}
              type="tel"
              placeholder="Enter your full name"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input
              value={password}
              type="password"
              placeholder="Enter your full name"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registerpage;
