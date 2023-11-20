import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import PropTypes from "prop-types";

export default function NewUserForm({ onSubmit }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      firstName: user.firstName,
      lastName: user.lastName,
    });
    setUser({
      firstName: "",
      lastName: "",
    });
  };

  const handleFirstNameChange = (e) =>
    setUser((prev) => ({ ...prev, firstName: e?.target?.value }));
  const handleLastNameChange = (e) =>
    setUser((prev) => ({ ...prev, lastName: e?.target?.value }));
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          required
          value={user.firstName}
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          requried
          value={user.lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          ADD USER
        </Button>
      </FormGroup>
    </Form>
  );
}

NewUserForm.propTypes = {
  onSubmit: PropTypes.func,
};
