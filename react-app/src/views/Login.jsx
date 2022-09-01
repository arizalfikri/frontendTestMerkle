import React from "react";
import { useState } from "react";
import { createUser, loginUser } from "../store/actions/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import FormUser from "../component/formuser/FormUser";
import { Navigate } from "react-router-dom";
export default function Login() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [pageLogin, setPageLogin] = useState(true);
  const [isLogin, setLogin] = useState(false);
  const dispatch = useDispatch();
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(data))
      .then(() => setLogin(true))
      .catch(() => console.log);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(createUser(data))
      .then((result) => console.log("result", result))
      .catch(() => console.log);
  };
  if (isLogin) {
    return <Navigate to={"/"} />;
  }
  if (pageLogin) {
    return (
      <div className="w-3/5 h-60 bg-white m-auto flex rounded-md drop-shadow-sm overflow-hidden">
        <div className="w-1/2 items-center flex flex-col justify-center p-5 gap-4">
          <h1>Login</h1>
          <FormUser
            show={show}
            handleLogin={handleLogin}
            type="login"
            changeData={changeData}
            setShow={setShow}
            data={data}
          />
        </div>
        <div className="w-1/2 items-center flex flex-col justify-center bg-blue-400 text-white gap-4 p-5">
          <h1>Sign UP</h1>
          <p>sign up here, if you don't have account</p>
          <button
            onClick={() => setPageLogin(!pageLogin)}
            className="rounded-full w-1/2 bg-blue-400 border border-white"
          >
            sign up
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white p-5 rounded-md drop-shadow-md relative">
          <button
            onClick={() => setPageLogin(!pageLogin)}
            className="absolute top-2 left-2 rounded-full w-6 h-6 bg-slate-300"
          >
            {"<"}
          </button>
          <h1 className="text-center mb-4">Sign Up</h1>
          <FormUser
            show={show}
            handleRegister={handleRegister}
            type="register"
            changeData={changeData}
            setShow={setShow}
            data={data}
          />
        </div>
      </div>
    );
  }
}
