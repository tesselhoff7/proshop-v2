import { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useProfileMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const [updateProfile, { isLoading: loadingUpdateProfile, error, data }] =
    useProfileMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("submitHandler");

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();

        dispatch(setCredentials(res));
        toast.success("Profile Updated");
      } catch (error) {
        toast.error(error.data.message || error.error);
      }
    }
  };

  useEffect(() => {
    if (!userInfo) {
      return;
    }

    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo, userInfo.name, userInfo.email]);

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
      </Col>
      <Col md={9}>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-2">
            Update
          </Button>
          {loadingUpdateProfile && <Loader />}
        </Form>
      </Col>
      ;
    </Row>
  );
}
