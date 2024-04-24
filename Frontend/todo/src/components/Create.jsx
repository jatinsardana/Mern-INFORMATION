import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault(); //remember
    const addUser = { name, email, age };
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if(response.ok){
      setName("");
      setEmail("");
      setAge("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded-md overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">My INFORMATION</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your age"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
