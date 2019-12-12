import { FETCH_QUOTES, NEW_QUOTE } from "../actions";

const initialState = {
  loading: true,
  error: false,
  data: [],
  randomNumber: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        loading: false,
        data: action.quotes
      };
    case NEW_QUOTE:
      return {
        ...state,
        randomNumber: action.quotes
      };
    default:
      return state;
  }
}