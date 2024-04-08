import { Form, Row, Col } from "react-bootstrap";
import FormInput from "../FormInput/FormInput";

const BillInput = (props) => {
    const bill = props.bill;
    
    return (
        <Form.Group className="w-50" >
            <Row className="my-2">
                <Col sm={6}><Form.Label>Bill: </Form.Label></Col>
                <Col sm={1}><span>$</span></Col>
                <FormInput name="bill" id="bill" defaultValue={bill ? bill : 0} width={3}/>
            </Row>
        </Form.Group>
    )
}

export default BillInput;