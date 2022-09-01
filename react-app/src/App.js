import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./component/protectedRoute";
import Home from "./views/Home";
import Login from "./views/Login";
function App() {
  return (
    <div className="App min-h-screen min-w-full bg-gray flex justify-center text-sm">
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
