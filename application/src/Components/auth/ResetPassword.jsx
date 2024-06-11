import { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Signup = () => {
  const [password, setPassword] = useState("");
  const {token} = useParams()

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/reset-password/" + token, {
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container mx-auto py-28">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#3454D1] rounded-xl mx-auto shadow-lg overflow-hidden">
          {/* left side */}
          <div className="w-full lg:w-1/2 py-16 px-12 bg-[#FFFFFF]">
            <h2 className="text-3xl mb-4 font-extrabold">
              MAP<span className="text-[#4379EE]">IT</span>
            </h2>
            <p className="font-bold mb-1 text-[#27303F]">Reset Password</p>
            <p className="mb-5 text-sm text-[#A9A9A9]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
            </p>
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <div className="mt-5">

                {/* Password input field */}
                <div>
                  <input
                    className="w-full border border-gray-300 rounded-sm p-3 text-sm mt-5"
                    placeholder="Enter new password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mt-10 flex flex-col gap-y-4">
                  <button
                    className="bg-[#4379EE] text-white active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all rounded-sm py-3 text-sm font-medium"
                    type="submit"
                  >
                    RESET
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* right side */}
          <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
            <img src="/Frame.png" alt="Frame" width={250} height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
