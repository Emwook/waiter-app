import { Form, Col, Row } from "react-bootstrap";
import FormInput from '../FormInput/FormInput.js'
import { useState } from "react";

const PeopleInput = (props) =>  {
    let numPeople = props.numPeople;
    const [maxNumPeople, setMaxNumPeople] = useState(props.maxNumPeople);
    const maxValue = 10;
    const minValue = 0;

    return (
        <Form.Group className="w-50">
            <Row className="my-2">
                <Col sm={7}><Form.Label>People: </Form.Label></Col>
                <FormInput
                    name="numPeople" 
                    id="numPeople" 
                    defaultValue={numPeople} 
                    width={2} 
                    minValue={minValue} 
                    maxValue={maxValue} 
                    currentMax={maxNumPeople}
                />
                <Col sm={1}><span>/</span></Col>
                <FormInput 
                    name="maxNumPeople" 
                    id="maxNumPeople" 
                    defaultValue={maxNumPeople} 
                    width={2} minValue={minValue} 
                    maxValue={maxValue} 
                    setMaxNumPeople={setMaxNumPeople}
                />
            </Row>
        </Form.Group>
    );
}
export default PeopleInput;