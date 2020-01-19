import Axios from "axios";

export const getData = () => {
  return {
    type: "GET_DATA",
    //fetching data from jsonplaceholder for get Users
    payload: Axios.get(`https://jsonplaceholder.typicode.com/users`)
  };
};