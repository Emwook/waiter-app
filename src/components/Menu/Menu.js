import { Navbar, Nav } from "react-bootstrap";

const Menu = () =>{
    return(
        <Navbar expand="lg" bg="light" className="text-muted px-4 my-2 d-flex justify-content-between">
            <Navbar.Brand className="text-muted">Waiter-app</Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">home</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Menu;