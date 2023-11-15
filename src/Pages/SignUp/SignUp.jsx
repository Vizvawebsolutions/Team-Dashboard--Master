import React, { useState } from "react";
import supabase from "../../superbase"; // Import your Supabase client
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation

function UserSignLog() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      console.log(data);
      if (error) {
        console.error("Error logging in:", error.message);
      } else {
        // Successful login, continue with user role checks
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div
            className="box"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "10px",
              backgroundColor: "#090912",
              minWidth: 375,
            }}
          >
            <h1 style={{ textAlign: "center" }}>Sign In</h1>

            <form
              onSubmit={handleLogin}
              noValidate
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="field">
                <label className="label" style={{ fontSize: "25px" }}>
                  Email Address
                </label>
                <div className="control">
                  <input
                    value={formData.email}
                    autoComplete="off"
                    type="email"
                    name="email"
                    style={{ padding: "10px", fontSize: "15px" }}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" style={{ fontSize: "25px" }}>
                  Password
                </label>
                <div className="control">
                  <input
                    value={formData.password}
                    type="password"
                    name="password"
                    style={{ padding: "10px", fontSize: "15px" }}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
                style={{
                  marginTop: "15px",
                  padding: "10px 25px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Submit
              </button>
              <h4 style={{ textAlign: "center", fontSize: "18px" }}>Already have an account? <a href="/Login">Log In</a></h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignLog;
