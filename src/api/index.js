import axios from "axios";

export const users = () =>
  axios("/users", {
    params: {
      limit: 1000,
    },
  });

export const createUser = (user) => axios.post("/users", user);
export const deleteUser = (userId) => axios.delete(`/users/${userId}`)