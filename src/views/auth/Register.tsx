import { Link } from "react-router-dom";
import { IRegister } from "../../types/RegisterType";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import React, { ChangeEvent, useEffect } from "react";
import { registerUser } from "./actions/action";

const initialState: IRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
};

const Register = () => {
  const [Inputs, setInputs] = React.useState(initialState);

  const { errors, authLoading, successResponse } = useTypedSelector(
    (state) => state.auth
  );

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(Inputs);
    dispatch(registerUser(Inputs));
  };

  useEffect(() => {
    if (successResponse) {
      (Inputs.firstName = ""),
        (Inputs.lastName = ""),
        (Inputs.email = ""),
        (Inputs.password = ""),
        (Inputs.confirmPassword = ""),
        (Inputs.username = "");
    }
  }, [successResponse]);
  return (
    <div className="">
      {errors && (
        <div className="bg-red-600 my-3 rounded-md px-2 text-white py-2">
          {typeof errors === "string" ? errors : errors.data.message}
        </div>
      )}

      {successResponse && (
        <div className="bg-green-600 my-3 rounded-md px-2 text-white py-2">
          Registration is successful, you can now login
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          value={Inputs.firstName}
          name="firstName"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded  mt-4"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={Inputs.lastName}
          name="lastName"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded  mt-4"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={Inputs.email}
          name="email"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded  mt-4"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={Inputs.username}
          name="username"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={Inputs.password}
          name="password"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={Inputs.confirmPassword}
          name="confirmPassword"
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            disabled={authLoading === true}
          >
            {authLoading === true ? "Registering" : "Register"}
          </button>
        </div>
      </form>

      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        You have an account?{" "}
        <Link
          className="text-red-600 hover:underline hover:underline-offset-4"
          to="/"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
