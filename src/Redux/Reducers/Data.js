const initialState = {
  userList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Data = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };

    case "GET_DATA_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "GET_DATA_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: action.payload.data
      };

    default:
      return state;
  }
};

export default Data;
