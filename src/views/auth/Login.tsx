import { Link } from "react-router-dom";
import { ILogin } from "../../types/LoginType";
import React, { ChangeEvent } from "react";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import { loginUser } from "./actions/action";

const initialState: ILogin = {
  email: "",
  password: "",
};

const Login = () => {
  const [Inputs, setInputs] = React.useState(initialState);

  const { errors, authLoading } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(Inputs));
  };

  return (
    <>
      <form className="" onClick={handleSubmit}>
        {errors !== "" && (
          <div className="bg-red-600 my-3 rounded-md px-2 text-white">
            Something went wrong
          </div>
        )}
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          onChange={handleChange}
          value={Inputs.email}
          name="email"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={Inputs.password}
          name="password"
        />
        <div className="mt-4 flex justify-end font-semibold text-sm">
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            disabled={authLoading === true}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Don't have an account?{" "}
        <Link
          className="text-red-600 hover:underline hover:underline-offset-4"
          to="/register"
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default Login;
