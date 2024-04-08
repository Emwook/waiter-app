import { Form, Row, Col } from "react-bootstrap";
import FormInput from "../FormInput/FormInput";

const BillInput = (props) => {
    const bill = props.bill;
    
    return (
        <Form.Group className="w-50" >
            <Row className="my-2">
                <Col xs={2}><Form.Label>Bill: </Form.Label></Col>
                <Col xs={1}><span className="px-2 fs-5 text-center lead">$</span></Col>
                <FormInput name="bill" id="bill" defaultValue={bill ? bill : 0}/>
            </Row>
        </Form.Group>
    )
}

export default BillInput;