"use client";
import { signup } from "@/app/actions/user";
import React, { useState } from "react"; // Added import statement for React
export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [] = useState("");
  // Fixed typo in function name
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <label>Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
        />
        <br />
        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
        <button onClick={() => signup(email, password)}>Submit</button>
      </div>
    </div>
  );
}
