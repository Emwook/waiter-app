import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {  getTableById } from "../../redux/tablesRedux";
import FormInput from "../FormInput/FormInput.js";
import { requestUpdateDetails } from "../../redux/tablesRedux";
import { useState } from "react";

// > to add min/max range for people and maxPeople, 
// > to add routing back to homepage on submit 
// > to change routing when page address not found 

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const table = useSelector(state => getTableById(state, id));
    let tableStatus, numPeople, maxNumPeople, bill;
    const [loading, setLoading] = useState(false);

    if(table){
        tableStatus = table.status;
        numPeople = table.numPeople;
        maxNumPeople = table.maxNumPeople;
        bill = table.bill;
    };
    const previousStatus = tableStatus;    
    const possibleStatus = ['free','busy','cleaning','reserved'];

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
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
        if(status !== previousStatus && status === 'busy'){
            data.bill = 0;
        }
        if(status !== previousStatus && (status === 'cleaning' || status === 'free')){
            data.numPeople = 0;
        }
        
        try {
            await dispatch(requestUpdateDetails(data));
            navigate('/'); //change it so it actually happens after reload
        } finally {
            setLoading(false);
        }
    }

   
    return (
        <Container>
            <h1 className="py-4">Table {id}</h1>
            {/* condition it so its only when its loading */}
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="w-50">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>Select: </Form.Label></Col>
                        <Col sm={5}>
                            <Form.Select name="status" data-bs-theme="light" size="sm" className="border-dark" defaultValue={tableStatus}>
                                {console.log(tableStatus)}
                                {possibleStatus.map(possibleStatus => <option key={possibleStatus} value={possibleStatus} selected={tableStatus === possibleStatus}> {possibleStatus}</option>)}
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
                {tableStatus === 'busy' ?
                (<Form.Group className="w-50" >
                    <Row className="my-2">
                        <Col sm={6}><Form.Label>Bill: </Form.Label></Col>
                        <Col sm={1}><span>$</span></Col>
                        <FormInput name="bill" id="bill" defaultValue={bill ? bill : 0} width={3}/>
                    </Row>
                </Form.Group>) : null }
                <Button size="sm" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
export default Details;