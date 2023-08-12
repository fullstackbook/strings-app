"use client";
import React, { FormEvent, useState } from "react";

function Form() {
  const [username, setUsername] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");
  const [confirmPassword, setConfirmPassword] = useState<undefined | string>(
    ""
  );
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors([]);

    if (password != confirmPassword) {
      const newErrors = [];
      newErrors.push("Passwords do not match.");
      setErrors(newErrors);
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      window.location.href = "/signin";
    } else {
      alert("sign up failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg"
    >
      <div className="text-center">
        <h3 className="font-semibold">Sign Up</h3>
      </div>
      <div className="my-3">
        <hr />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input
            className="text-black p-3 border border-slate-700 rounded-lg"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="username"
            placeholder="Username"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Password</label>
        <input
          className="text-black p-3 border border-slate-700 rounded-lg"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Confirm Password</label>
        <input
          className="text-black p-3 border border-slate-700 rounded-lg"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          id="confirm-password"
          placeholder="Confirm Password"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-slate-900 text-white p-3 rounded-lg"
      >
        Sign Up
      </button>
      {errors.map((error) => {
        return (
          <div key={error} className="text-red-600">
            {error}
          </div>
        );
      })}
    </form>
  );
}

export default Form;
