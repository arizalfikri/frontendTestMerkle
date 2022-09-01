import axios from "axios";
import { DATA } from "./actionType";
import swal from "sweetalert";
const url = "http://localhost:3000/";
export const createUser = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(url + "users", data);
        swal({
          icon: "success",
          text: "success ",
        });
        resolve();
      } catch (err) {
        swal({
          icon: "error",
          text: err.response.data,
        });
        reject(err);
      }
    });
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(url + "login", data);
        localStorage.setItem("token", response.data.accessToken);
        swal({
          icon: "success",
          text: "success login",
        });
        resolve();
      } catch (err) {
        swal({
          icon: "error",
          text: err.response.data,
        });
        reject(err);
      }
    });
  };
};

export const fetchData = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url + "users");
        dispatch({
          type: DATA,
          payload: response.data,
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const updateUser = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.patch(url + "users/" + id);
        swal({
          icon: "success",
          text: "success update data user",
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.delete(url + "users/" + id);
        swal({
          icon: "success",
          text: "success delete user",
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
};
