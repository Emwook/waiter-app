import { Container, Navbar} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Menu = () =>{
    return(
        <Container>
        <Navbar expand="lg" bg="primary" className=" rounded-3 text-light lead h1 px-4 mb-2 d-flex justify-content-between">
            <Navbar.Brand className="text-light">Waiter-app</Navbar.Brand>
            <Navbar.Brand className="text-light">
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>home</NavLink>
            </Navbar.Brand>
        </Navbar>
        </Container>
    );
}

export default Menu;