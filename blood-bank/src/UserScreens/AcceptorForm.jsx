import React, { useState } from "react";
import Buttons from "../Component/Buttons";
import { fbLogin, fbSignUp } from "../Router/Fbmethods";
import Input from "../Component/Input";
import { useNavigate } from "react-router-dom";
import Select from "../Component/Select";
import DonorData from "./DonorData";

export default function AcceptorForm() {
  const [model, setModel] = useState({});
  const [donorData, setDonorData] = useState([]);
 
  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();
  const signUpUser = () => {
    fbSignUp(model)
      .then((res) => {
        setDonorData([...donorData, model]);
        navigate({ state: { donorData } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className="container-fluid gbcolor">
      <div className="container">
        <h1 className="pt-3 bg-transparent fs-2">
          <b className="text-white">Blood Acceptor  </b>
        </h1>
        <hr className="w-25 text-center custom-hr" />
      </div>
      <div className="container-fluid m-auto py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto border rounded p-2 shadow">
              <h1 className="login fs-3">Acceptor Form</h1>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Name", e.target.value)}
                  label="Full Name"
                  type="text"
                />
              </div>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Address", e.target.value)}
                  label="Address"
                  type="text"
                />
              </div>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Phone Num", e.target.value)}
                  label="Phone Num"
                  type="text"
                />
              </div>

 
              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Gender", e.target.value)}
                  label="Gender"
                  type="text"
                />
              </div>

              <div>
                <Select
                  getValue={(e) => fillModel("role", e)} 
                  label="Blood Group"
                  options={[
                    {
                      value: "A Blood ",
                      displayName: "A Blood",
                    },
                    {
                      value: "B Blood",
                      displayName: "B Blood",
                    },
                    {
                        value: "AB Blood",
                        displayName: "AB Blood",
                      },
                      {
                        value: "O Blood",
                        displayName: "O Blood",
                      },
                  ]}
                />
              </div>

          

              <div className="text-white">
                <Input
                  value={model.Email}
                  onChange={(e) => fillModel("email", e.target.value)}
                  label="Email"
                  type="email"
                />
              </div>

              <div className="text-white">
                <Input
                  type="password"
                  value={model.password}
                  onChange={(e) => fillModel("password", e.target.value)}
                  label="Password"
                />
              </div>

              <Buttons onClick={signUpUser} label="Donate" />
            </div>

            <DonorData donorData={donorData} /> 


          </div>
        </div>
      </div>
    </div>
  );
}
