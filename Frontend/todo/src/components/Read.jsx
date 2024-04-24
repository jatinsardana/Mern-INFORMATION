import React, { useEffect, useState } from "react";

function Read() {
  const [data, setData] = useState([]);
  const [errori, setError] = useState("")

  async function getData() {
      const response = await fetch("http://localhost:3000/");
      const result = await response.json();
      setData(result.users);
  }

  const handleClick =async (id)=>{
    const response = await fetch(`http://localhost:3000/${id}`,{ //remember
      method : "DELETE"
    })
    const result = await response.json();

    if(response.ok){
      setError("Todo removed")
      setTimeout(() => {
        setError("")
        getData();
      }, 1300);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <h1 className="text-3xl text-center">All INFORMATION</h1>
      <h1 className=" w-screen text-center bg-white border border-black text-3xl font-bold">{errori}</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((user) => ( //remember
          <div
            key={user._id}
            className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded-md overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">User Information</h2>
              <div className="flex">
                <button onClick={()=> handleClick(user._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-gray-700 font-medium mb-1">Name:</div>
              <div className="text-gray-900">{user.name}</div>
            </div>
            <div className="mb-4">
              <div className="text-gray-700 font-medium mb-1">Email:</div>
              <div className="text-gray-900">{user.email}</div>
            </div>
            <div className="mb-4">
              <div className="text-gray-700 font-medium mb-1">Age:</div>
              <div className="text-gray-900">{user.age}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Read;