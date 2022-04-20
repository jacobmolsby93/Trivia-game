import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router";
import { withRouter } from "react-router-dom";
import defaultProfile from "../images/profile-image.png";

const AddUser = () => {
  const [profile_image, setImage] = useState(null);
  const [name, setName] = useState("");

  const history = useNavigate();

  const AddUserInfo = async (e) => {
    e.preventDefault();

    let formField = new FormData();
    formField.append("name", name);
    if (profile_image !== null) {
      formField.append("profile_image", profile_image);
    }

    await axios({
      method: "POST",
      url: "https://triv-rest.herokuapp.com/api/trivia/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      const User = response.data
      history(`/play/${User.id}`, { state: User });
    });
  };

  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid d-flex align-items-center h-100">
        <div className="flex-wrapper w-100 p-0 m-0">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 d-flex justify-content-center">
              <div className="inner-wrapper text-center">
                <h3 className="text-white sub-title">Enter your details</h3>
                <div className="spacebox-50"></div>
                <div className="form-group w-100 m-0 p-0 d-flex align-items-center details-form">
                  <div className="form-wrapper">
                    <label for="imgInp">
                      <img
                        src={
                          profile_image
                            ? URL.createObjectURL(profile_image)
                            : defaultProfile
                        }
                        alt="Profile Image"
                        className="profile-image mb-4"
                      />
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      name="profile_image"
                      id="imgInp"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div className="form-wrapper">
                    <input
                      placeholder="Enter your name"
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="submit-container">
                    <input
                      className="enter-button mt-4"
                      value="Submit"
                      onClick={AddUserInfo}
                      type="submit"
                      id="submitDetails"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
