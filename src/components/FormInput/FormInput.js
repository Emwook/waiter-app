import {Form, Col} from 'react-bootstrap'

const FormInput = (props) => {
    return(
        <Col sm={props.width}>
            <Form.Control 
            type="string" 
            size="sm" 
            id={props.id} 
            className="border-dark text-center" 
            defaultValue={props.id}
            />
        </Col>      
    );
}

export default FormInput;