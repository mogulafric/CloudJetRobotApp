import axios from "axios";

import {
  TRAINING_DATA_LIST_FAIL,
  TRAINING_DATA_LIST_REQUEST,
  TRAINING_DATA_LIST_SUCCESS,
} from "../Constants/TrainingDataConstants";

import { toast } from "react-toastify";

export const listTraingData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TRAINING_DATA_LIST_REQUEST });

    //get userInfo from redux state using getState()
    const {
      userLogin: { userInfo },
    } = getState();

    // var accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));
    // console.log("********",accessTokenObj)
    // const token = accessTokenObj.data.jwtToken;
    // console.log("My Token",token)

    const config = {
      headers: { Authorization: `Bearer ${userInfo.data.jwtToken}` },
    };

    const { data } = await axios.get("/api/schools/true", config);

    dispatch({
      type: TRAINING_DATA_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: TRAINING_DATA_LIST_FAIL,
      payload: message,
    });
  }
};
