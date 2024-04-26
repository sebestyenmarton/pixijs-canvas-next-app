// reducers.ts
import { combineReducers } from "redux";
import {
  FETCH_OBJECT_REQUEST,
  FETCH_OBJECT_SUCCESS,
  FETCH_OBJECT_FAILURE,
} from "./actions";

const objectReducer = (
  state = { data: null, loading: false, error: null },
  action: any
) => {
  switch (action.type) {
    case FETCH_OBJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_OBJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_OBJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  object: objectReducer,
});
