import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TableBar = (props) => {
    return(
        <Row className="text-dark py-4 px-3 d-flex justify-content-between align-items-center border-bottom border-dark">
            <Col><h2>Table {props.id}</h2></Col>
            <Col>Status: <span className="text-muted">{props.status}</span></Col>
            <Col xs={8} className="d-flex justify-content-end">
                <Button variant="primary" className="border-light text-right ml-auto">
                    <NavLink to={`/table/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        Show more
                    </NavLink>
                </Button>
            </Col>
        </Row>
    );
}

export default TableBar