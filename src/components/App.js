import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createUsersRequest,
  deleteUserRequest,
  getUsers,
  usersErrorAction,
} from "../actions/users";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";
import { Alert } from "reactstrap";

export default function App() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.users);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleFormSubmit = ({ lastName, firstName }) => {
    dispatch(createUsersRequest({ firstName, lastName }));
  };

  const onDelete = (userId) => {
    dispatch(deleteUserRequest(userId));
  };

  const handleCloseAlert = () => {
    dispatch(usersErrorAction({ error: "" }));
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <Alert color="info" isOpen={error} toggle={handleCloseAlert}>
        {error}
      </Alert>
      <NewUserForm onSubmit={handleFormSubmit} />
      <UserList users={items} onDelete={onDelete} />
    </div>
  );
}
