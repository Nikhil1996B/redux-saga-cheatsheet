import { Button, ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";

export default function UserList({ users, onDelete }) {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((user) => (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "0 auto" }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button
                  outline
                  color="danger"
                  onClick={() => onDelete(user.id)}
                >
                  DELETE
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
}

UserList.propTypes = {
  users: PropTypes.string,
  onDelete: PropTypes.func,
};
