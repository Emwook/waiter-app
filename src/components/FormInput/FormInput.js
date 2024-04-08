import {Form, Col} from 'react-bootstrap'
import { useState } from 'react';

const FormInput = (props) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        let newValue = event.target.value;
        
        if ( newValue > props.maxValue) {
            newValue = props.maxValue;
        }
        else if(isNaN(Number(newValue)) || newValue < props.minValue){
            newValue = props.minValue;
        }
        setInputValue(newValue);
    };

    return(
        <Col sm={props.width}>
            <Form.Control 
                type="string" 
                size="sm" 
                name={props.name}
                id={props.id} 
                className="border-dark text-center" 
                placeholder={props.defaultValue}
                value = {inputValue}
                onChange={handleInputChange}
            />
        </Col>      
    );
}

export default FormInput;