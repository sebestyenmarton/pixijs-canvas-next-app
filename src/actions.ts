// actions.ts
import axios from "axios";
import { Dispatch } from "redux";

export const FETCH_OBJECT_REQUEST = "FETCH_OBJECT_REQUEST";
export const FETCH_OBJECT_SUCCESS = "FETCH_OBJECT_SUCCESS";
export const FETCH_OBJECT_FAILURE = "FETCH_OBJECT_FAILURE";

export interface FetchObjectRequestAction {
  type: typeof FETCH_OBJECT_REQUEST;
}

export interface FetchObjectSuccessAction {
  type: typeof FETCH_OBJECT_SUCCESS;
  payload: any; // A response-ban várható adatok típusa
}

export interface FetchObjectFailureAction {
  type: typeof FETCH_OBJECT_FAILURE;
  error: string; // Hibaszöveg típusa
}

export type ObjectActionTypes =
  | FetchObjectRequestAction
  | FetchObjectSuccessAction
  | FetchObjectFailureAction;

export const fetchObjectRequest = (): FetchObjectRequestAction => ({
  type: FETCH_OBJECT_REQUEST,
});

export const fetchObjectSuccess = (data: any): FetchObjectSuccessAction => ({
  type: FETCH_OBJECT_SUCCESS,
  payload: data,
});

export const fetchObjectFailure = (
  error: string
): FetchObjectFailureAction => ({
  type: FETCH_OBJECT_FAILURE,
  error: error,
});

export const fetchObject = (id: string) => {
  return async (dispatch: Dispatch<ObjectActionTypes>) => {
    dispatch(fetchObjectRequest());
    try {
      const response = await axios.get(
        `https://api.restful-api.dev/objects/${id}`
      );
      dispatch(fetchObjectSuccess(response.data));
    } catch (error) {
      dispatch(fetchObjectFailure(error.message));
    }
  };
};
