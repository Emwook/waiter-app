import { Form, Col, Row } from "react-bootstrap";
import FormInput from '../FormInput/FormInput.js'

const PeopleInput = (props) =>  {
    let numPeople = props.numPeople;
    let maxNumPeople = props.maxNumPeople; 
    const maxValue = 10;
    const minValue = 0;

    return (
        <Form.Group className="w-50">
            <Row className="my-2">
                <Col xs={3}><Form.Label>People: </Form.Label></Col>
                <FormInput
                    name="numPeople" 
                    id="numPeople" 
                    defaultValue={numPeople} 
                    minValue={minValue} 
                    maxValue={maxValue} 
                />
                <Col xs={1}><span className="px-2 fs-5 text-center lead">/</span></Col>
                <FormInput 
                    name="maxNumPeople" 
                    id="maxNumPeople" 
                    defaultValue={maxNumPeople} 
                    minValue={minValue} 
                    maxValue={maxValue} 
                />
            </Row>
        </Form.Group>
    );
}
export default PeopleInput;