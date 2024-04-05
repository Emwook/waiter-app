import { Row, Col, Button } from "react-bootstrap";

const TableBar = (props) => {
    return(
        <Row className="text-dark py-4 px-3 my-4 d-flex justify-content-between bg-light align-items-center">
            <Col><span>Table {props.id}</span></Col>
            <Col>Status: <span className="text-muted">{props.status}</span></Col>
            <Col xs={6} className="d-flex justify-content-end">
                <Button variant="light" className="border-dark text-right ml-auto">more info</Button>
            </Col>
        </Row>
    );
}

export default TableBar