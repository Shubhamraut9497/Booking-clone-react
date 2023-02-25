import React, { useState } from "react";
import "./Register.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add logic to submit the form
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("name", name);
    console.log("account created successfully");
    setId("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="login">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
          <div className="log-ele">
              <MdOutlineEmail className="ic" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="inputs"
              />
            </div>
            <div className="log-ele">
              <MdOutlineEmail className="ic" />
              <input
                type="email"
                placeholder="Email"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="inputs"
              />
            </div>
            <div className="log-ele">
              <RiLockPasswordLine className="ic" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputs"
              />
            </div>
            <div className="log-ele">
              <button
                style={{ width: "300px" }}
                className="siCbutton"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
