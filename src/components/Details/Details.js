import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {  getTableById } from "../../redux/tablesRedux";
import SelectOption from "../SelectOption/SelectOption.js";
import FormInput from "../FormInput/FormInput.js";
import { requestUpdateDetails } from "../../redux/tablesRedux";

const Details = () => {
    const { tableId } = useParams();
    const table = useSelector(state => getTableById(state, tableId));
    let status, numPeople, maxNumPeople, bill;
    if(table){
        status = table.status;
        numPeople = table.numPeople;
        maxNumPeople = table.maxNumPeople;
        bill = table.bill;
    }    
    const possibleStatus = ['free','busy','cleaning','reserved'];

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(requestUpdateDetails(table)) //change 'table' to actual info from the form
    }

    return(
        <Container>
            <h1 className="py-4">Table {tableId}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="w-25">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>Select: </Form.Label></Col>
                        <Col sm={5}>
                            <Form.Select data-bs-theme="light" size="sm" className="border-dark">
                                {possibleStatus.map(possibleStatus => <SelectOption key={possibleStatus} selectedStatus={status} status={possibleStatus} />)}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>    
                <Form.Group className="w-25">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>People: </Form.Label></Col>
                        <FormInput id={numPeople} width={2}/>
                        <Col sm={1}><span>/</span></Col>
                        <FormInput id={maxNumPeople} width={2}/>
                    </Row>
                </Form.Group>
                <Form.Group className="w-25">
                    <Row className="my-2">
                        <Col sm={6}><Form.Label>Bill: </Form.Label></Col>
                        <Col sm={1}><span>$</span></Col>
                        <FormInput id={bill} width={3}/>
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