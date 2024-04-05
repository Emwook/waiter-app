import { Navbar} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Menu = () =>{
    return(
        <Navbar expand="lg" bg="light" className="text-muted px-4 my-2 d-flex justify-content-between">
            <Navbar.Brand className="text-muted">Waiter-app</Navbar.Brand>
            <Navbar.Brand className="text-dark">
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>home</NavLink>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Menu;