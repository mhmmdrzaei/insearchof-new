"use client"
import React, { useState, ReactNode } from 'react';
import Cookie from 'js-cookie';

type PasswordProtectedProps = {
  children: ReactNode;
  pw: string;
};

const PasswordProtected: React.FC<PasswordProtectedProps> = ({ children, pw }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(Cookie.get("auth") === "true");

  const handlePasswordSubmit = () => {
    if(password === pw){ 
      setIsAuthenticated(true);
      Cookie.set("auth", "true", { expires: 7 }); // expires in 7 days
    } else {
      alert("Incorrect password!");
    }
  }

  if(!isAuthenticated) {
    return (
      <section className='passwordContainer'>
        <h3>Please enter the password to access this page</h3>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password"/>
        <button onClick={handlePasswordSubmit}>Submit</button>
      </section>
    );
  }

  return <>{children}</>;
}

export default PasswordProtected;
