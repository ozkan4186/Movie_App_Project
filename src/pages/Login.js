import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="flex justify-center mt-2 ">
      <div className="form-image hidden md:block">
        <img
          src="https://picsum.photos/800/800"
          alt="sample-movie"
          className="object-cover h-screen w-full"
          style={{
            height: "100vh",
          }}
        />
      </div>
      <div
        className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]"
        style={{
          height: "100vh",
        }}
      >
        <div
          className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
        >
          <h1 className="display-3 text-danger text-center ">Sign İn</h1>
          <form onSubmit={handleSubmit} className="w-75 mx-auto fs-2">
            <div className="mb-3 mx-auto">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white  "
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email adress.."
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-white  "
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your email password.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{
                color: "red",
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </div>
            <br />
            <button type="submit" className="btn btn-danger w-100">
              Login
            </button>

            <br />
            <button type="submit" className="btn btn-danger w-100">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
