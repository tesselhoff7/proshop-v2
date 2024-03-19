import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";

export default function CartScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Row>
      <Col md={8}>
        <h1 styles={{ marginBottom: "20px" }}>
          {cartItems.length === 0
            ? "Your cart is empty"
            : `You have ${cartItems.length} items in your cart`}
        </h1>
      </Col>
    </Row>
  );
}
