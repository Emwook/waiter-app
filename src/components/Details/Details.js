import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {  getTableById } from "../../redux/tablesRedux";
import FormInput from "../FormInput/FormInput.js";
import { requestUpdateDetails, fetchAllTableData } from "../../redux/tablesRedux";

const Details = () => {
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));
    let status, numPeople, maxNumPeople, bill;

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const status = formData.get('status'); 
        const numPeople = formData.get('numPeople'); 
        const maxNumPeople = formData.get('maxNumPeople');
        const bill = formData.get('bill');

        const data = {
            id:  parseInt(id),
            status: status,
            numPeople: numPeople,
            maxNumPeople: maxNumPeople,
            bill: bill
        };
        dispatch(requestUpdateDetails(data));
        dispatch(fetchAllTableData());
    }
    if(table){
        status = table.status;
        numPeople = table.numPeople;
        maxNumPeople = table.maxNumPeople;
        bill = table.bill;
    }    
    const possibleStatus = ['free','busy','cleaning','reserved'];

    return(
        <Container>
            <h1 className="py-4">Table {id}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="w-50">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>Select: </Form.Label></Col>
                        <Col sm={5}>
                            <Form.Select name="status" data-bs-theme="light" size="sm" className="border-dark" defaultValue={status}>
                                {console.log(status)}
                                {possibleStatus.map(possibleStatus => <option key={possibleStatus} value={possibleStatus} selected={status === possibleStatus}> {possibleStatus}</option>)}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>    
                <Form.Group className="w-50">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>People: </Form.Label></Col>
                        <FormInput name="numPeople" id="numPeople" defaultValue={numPeople} width={2}/>
                        <Col sm={1}><span>/</span></Col>
                        <FormInput name="maxNumPeople" id="maxNumPeople" defaultValue={maxNumPeople} width={2}/>
                    </Row>
                </Form.Group>
                <Form.Group className="w-50">
                    <Row className="my-2">
                        <Col sm={6}><Form.Label>Bill: </Form.Label></Col>
                        <Col sm={1}><span>$</span></Col>
                        <FormInput name="bill" id="bill" defaultValue={bill} width={3}/>
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