import { Form, Col, Row, } from "react-bootstrap"

const StatusInput = (props) => { 
    let tableStatus = props.tableStatus;
    
    const possibleStatus = ['free','busy','cleaning','reserved'];
    return (
        <Form.Group className="w-50">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>Select: </Form.Label></Col>
                        <Col sm={5}>
                            <Form.Select name="status" data-bs-theme="light" size="sm" className="border-dark" defaultValue={tableStatus}>
                                {possibleStatus.map(possibleStatus => <option key={possibleStatus} value={possibleStatus} selected={tableStatus === possibleStatus}> {possibleStatus}</option>)}
                            </Form.Select>
                        </Col>
                    </Row>
        </Form.Group>    
    );
}

export default StatusInput;