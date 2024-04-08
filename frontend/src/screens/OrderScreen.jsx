import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice";

const OrderScreen = () => {
  const { id } = useParams();
  const {
    data: order,
    error,
    isLoading,
    refetch,
  } = useGetOrderDetailsQuery(id);

  return <div>asd</div>;
};

export default OrderScreen;
