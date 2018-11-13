import { GET_LICENSE, POST_LICENSE} from "../actions/actionTypes";

const initialState = {
  license: {
    name: 'Alexander',
    date: '13.06.1990',
    category: 'A,B,C,D'
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LICENSE:
      return {
        ...state
      };
    case POST_LICENSE:
      return {
      ...state
    };
    default:
      return state;
  }
}