import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  fetchData,
  updateUser,
} from "../store/actions/action";
import FormUser from "../component/formuser/FormUser";
import { Link, Navigate } from "react-router-dom";
export default function Home() {
  const [show, setShow] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [data, setData] = useState({
    id: 0,
    email: "",
    password: "",
  });
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [page, setPage] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((store) => store.dataReducer.users);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(data.id));
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteUser(id)).then(() => setDeleted(!deleted));
  };
  const setDefault = () => {
    setData({
      id: 0,
      email: "",
      password: "",
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(createUser(data))
      .then((result) => setNewUser(!newUser))
      .catch(() => console.log);
  };
  const handleLogout = () => {
    localStorage.clear();
  };
  useEffect(() => {
    dispatch(fetchData());
  }, [deleted, newUser]);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  if (!page) {
    return (
      <div className="w-3/4 flex justify-center items-center">
        <div className="bg-white flex flex-col gap-1 p-5 rounded-md relative">
          <div className="flex justify-between">
            <button
              onClick={() => (setDefault(), setPage("create"))}
              className="bg-blue-600 hover:bg-blue-500 rounded-full px-2 w-2/5 mb-4 py-1 text-white"
            >
              Add New User
            </button>
            <Link
              to={"/login"}
              onClick={() => handleLogout()}
              className="hover:text-gray-400"
            >
              Logout
            </Link>
          </div>
          {users.map((el, i) => {
            return (
              <div
                key={i}
                className="border-b px-6 py-2 flex justify-between gap-4"
              >
                <p>{el.email}</p>
                <div className="flex gap-2 text-white">
                  <button
                    onClick={() => (setPage("update"), setData(el))}
                    className="bg-green-600 hover:bg-green-400 rounded-full px-2"
                  >
                    edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, el.id)}
                    className="bg-red-600 hover:bg-red-400 rounded-full px-2"
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (page === "create") {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-white p-5 rounded-md relative">
          <button
            onClick={() => setPage("")}
            className="absolute top-2 left-2 rounded-full w-6 h-6 bg-slate-300"
          >
            {"<"}
          </button>
          <h1 className="text-center mb-4">Create New Users</h1>
          <FormUser
            show={show}
            handleRegister={handleRegister}
            changeData={changeData}
            type="register"
            setShow={setShow}
            data={data}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-white p-5 rounded-md relative">
          <button
            onClick={() => setPage("")}
            className="absolute top-2 left-2 rounded-full w-6 h-6 bg-slate-300"
          >
            {"<"}
          </button>
          <h1 className="text-center mb-4">Update</h1>
          <FormUser
            show={show}
            handleUpdate={handleUpdate}
            changeData={changeData}
            type="update"
            setShow={setShow}
            data={data}
          />
        </div>
      </div>
    );
  }
}
