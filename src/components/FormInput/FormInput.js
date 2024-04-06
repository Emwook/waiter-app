import {Form, Col} from 'react-bootstrap'

const FormInput = (props) => {
    return(
        <Col sm={props.width}>
            <Form.Control 
            type="string" 
            size="sm" 
            name={props.name}
            id={props.id} 
            className="border-dark text-center" 
            defaultValue={props.defaultValue}
            />
        </Col>      
    );
}

export default FormInput;