import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {
    const { tableId } = useParams();

    return(
        <Container>
            <h1 className="py-4">Table {tableId}</h1>
            <Form onSubmit={e => e.preventDefault()}>
                <Form.Group controlId="selectStatus" className="w-25">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>Select: </Form.Label></Col>
                        <Col sm={5}>
                            <Form.Select data-bs-theme="light" size="sm" className="border-dark">
                            <option >free</option>
                            <option >busy</option>
                            <option >reserved</option>
                            <option >cleaning</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>    
                <Form.Group controlId="numPeopleBox" className="w-25">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>People: </Form.Label></Col>
                        <Col sm={2}><Form.Control type="string" size="sm" id="numPeople" className="border-dark text-center"/></Col>
                        <Col sm={1}><span>/</span></Col>
                        <Col sm={2}><Form.Control type="string" size="sm" id="numPeople" className="border-dark text-center"/></Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId="billAmount" className="w-25">
                    <Row className="my-2">
                        <Col sm={6}><Form.Label>Bill: </Form.Label></Col>
                        <Col sm={1}><span>$</span></Col>
                        <Col sm={2}><Form.Control type="string" size="sm" id="numPeople" className="border-dark text-center"/></Col>
                    </Row>
                </Form.Group>
                <Button size="sm" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
export default Details;