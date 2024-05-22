import { useState } from "react";
import Axios from "axios";
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then(response => {
        if(response.data.status){
          navigate('/login')
        }
      }) 
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container flex items-center justify-center min-h-screen">
      <div className="bg-[#F3EDE4] px-8 py-5 rounded-3xl w-full max-w-md">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <p className="text-4xl font-bold text-[#122315] mt-2 text-center">
            Create Account
          </p>
          <div className="mt-5">
            <div>
              <label className="text-lg font-medium">Username</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1"
                autoComplete="off"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1"
                placeholder="********"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-5 flex flex-col gap-y-4">
              <button
                className="bg-[#122315] text-white active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all rounded-xl py-4 text-lg font-bold"
                type="submit"
              >
                Sign Up
              </button>
              <p className="flex items-center justify-center">
                Have an Account?
                <Link to='/login' className="font-medium underline text-[#122315]">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div> 
  );
};

export default Signup;
