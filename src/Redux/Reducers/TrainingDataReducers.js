import {
  TRAINING_DATA_LIST_FAIL,
  TRAINING_DATA_LIST_REQUEST,
  TRAINING_DATA_LIST_SUCCESS,
} from "../Constants/TrainingDataConstants";

// TRAINING DATA LIST
export const trainingDataListReducer = (
  state = { trainingData: [] },
  action
) => {
  switch (action.type) {
    case TRAINING_DATA_LIST_REQUEST:
      return { loading: true, trainingData: [] };

    case TRAINING_DATA_LIST_SUCCESS:
      return {
        loading: false,
        trainingData: action.payload,
      };

    case TRAINING_DATA_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
