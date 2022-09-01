import { DATA } from "../actions/actionType";
let initialState = {
  users: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
