import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

import logo from "..//assets/logo.png";

export default function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" width="50" height="50" />
            ProShop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill style={{ marginLeft: "5px" }}>
                    {cartItems.reduce((a, c) => Number(a) + Number(c.qty), 0)}
                  </Badge>
                )}
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

//import { Navbar, Nav, Container } from "react-bootstrap";
//import { FaShoppingCart, FaUser } from "react-icons/fa";
//import { LinkContainer } from "react-router-bootstrap";
//import logo from "..//assets/logo.png";

//export default function Header() {
//  return (
//    <header>
//      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
//        <Container>
//          {/*<LinkContainer to="/">*/}
//          <Navbar.Brand>
//            <img src={logo} alt="logo" width="50" height="50" />
//            ProShop
//          </Navbar.Brand>
//          {/*</LinkContainer>*/}

//          <Navbar.Toggle aria-controls="basic-navbar-nav" />

//          <Navbar.Collapse id="basic-navbar-nav">
//            <Nav className="ml-auto">
//              {/*<LinkContainer to="/cart">*/}
//              <Nav.Link>
//                <FaShoppingCart /> Cart
//              </Nav.Link>
//              {/*</LinkContainer>*/}

//              {/*<LinkContainer href="/login">*/}
//              <Nav.Link>
//                <FaUser /> Sign In
//              </Nav.Link>
//              {/*</LinkContainer>*/}
//            </Nav>
//          </Navbar.Collapse>
//        </Container>
//      </Navbar>
//    </header>
//  );
//}
