import React from "react";
export default function FormUser({
  show,
  handleLogin,
  type,
  changeData,
  setShow,
  handleRegister,
  handleUpdate,
  data,
}) {
  const connectToServer = (e) => {
    e.preventDefault();
    if (type === "login") {
      return handleLogin(e);
    }
    if (type === "register") {
      return handleRegister(e);
    }
    return handleUpdate(e);
  };
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={(e) => connectToServer(e)}
      >
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={changeData}
            value={data.email}
            className="border rounded-full px-4 py-1"
          />
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="">Password</label>
          <input
            type={show ? "password" : "text"}
            placeholder="password"
            name="password"
            value={data.password}
            onChange={changeData}
            className="border rounded-full px-4 py-1"
          />
          <button
            className="absolute top-7 right-3 text-xs text-gray-500"
            onClick={(e) => (e.preventDefault(), setShow(!show))}
          >
            {show ? "show" : "hide"}
          </button>
        </div>
        <div className="m-auto">
          <button
            type="submit"
            className="rounded-lg bg-green-500 text-white mt-2 px-2"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
