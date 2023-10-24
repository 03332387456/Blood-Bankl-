// import React from "react";
// import { useState } from "react";
// import Buttons from "../Component/Buttons";
// import { useNavigate } from "react-router-dom";


// function Acceptor() {

// const navigate = useNavigate()
//   const go = () => {
//     navigate("/AcceptorForm")
//   }

//   return (
//     <div>
//       <h1>Acceptor Screen</h1>


// <h4 className="text-center p-2 m-2 my-5 " >Acceptor registration </h4>
// <p  className="text-center p-2 m-2 ">If you have not the same blood group so go to the registration Form
// <Buttons onClick={go} label="Register" />
// </p>
//     </div>
//   );
// }

// export default Acceptor;


import React from "react";
import Buttons from "../Component/Buttons";
import { useNavigate } from "react-router-dom";

export default function Acceptor({ location }) {
  const navigate = useNavigate();
  const go = () => {
    navigate("/AcceptorForm");
  }

  // Use optional chaining to safely access location.state and provide a default empty array.
  const donorData = location?.state?.donorData || [];

  return (
    <div className="container">
      <h1>Acceptor Screen</h1>
      <h4 className="text-center p-2 m-2 my-5">Acceptor registration</h4>
      <p className="text-center p-2 m-2">If you have not the same blood group, go to the registration Form</p>
      <Buttons onClick={go} label="Register" />

      <table className="table text-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Num</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {donorData.map((data, index) => (
            <tr key={index}>
              <td>{data.Name}</td>
              <td>{data.Address}</td>
              <td>{data["Phone Num"]}</td>
              <td>{data["Blood Group"]}</td>
              <td>{data.Gender}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



