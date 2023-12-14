import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import './Rajistration.css';

function RajistrationAgain() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const clearName = () => {
    setName('');
  };

  const clearEmail = () => {
    setEmail('');
  };

  const clearPassword = () => {
    setPassword('');
  };

  return (
    <div className="container">
      <div className="head">
        <p id="text">Sign Up</p>
        <button>
          <ImCross />
        </button>
      </div>
      <div className="inputone">
        <p>Full Name :</p>
      </div>
      <div className="inputfieldOne">
        <div className="single">
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="firstbutton">
          <button
            style={{
              display: name.length > 0 ? 'inline' : 'none',
            }}
            onClick={clearName}
          >
            <ImCross />
          </button>
        </div>
      </div>
      <div className="inputone">
        <p>Password :</p>
      </div>
      <div className="inputfieldOne">
        <div className="single">
          <input
            type="password" 
            placeholder="Enter your Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="firstbutton">
          <button
            style={{
              display: password.length > 0 ? 'inline' : 'none',
            }}
            onClick={clearPassword}
          >
            <ImCross />
          </button>
        </div>
      </div>
      <div className="Emailtext">
        <p>Email :</p>
      </div>
      <div className="inputtwo">
        <div className="inputEmail">
          <input
            id="inputsecond"
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="buttonsecond">
          <button
            style={{ display: email.length > 0 ? 'inline' : 'none' }}
            onClick={clearEmail}
          >
            <ImCross />
          </button>
        </div>
      </div>
      <div className="sbtn">
        <button style={{ display: email.length > 0 ? 'inline' : 'none' }}>
          Create Account
        </button>
      </div>
      <div className="lastbutton">
        <p>Already have an account?</p>
        <button>LogIn</button>
      </div>
    </div>
  );
}
export default RajistrationAgain;
