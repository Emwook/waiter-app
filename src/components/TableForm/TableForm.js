import { Col, Row, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { requestTableAdd } from '../../redux/tablesRedux';

const TableForm = (props) => {
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        const table = {};
        const formData = new FormData(e.target);

        for (const [key, value] of formData.entries()) {
            table[key] = value.length > 0 ? value : undefined;
        }

        if(table.maxNumPeople > 10){
            table.maxNumPeople = 10;
        }
        else if(table.maxNumPeople < 0){
            table.maxNumPeople = 0;
        }

        table.numPeople = '0';
        table.bill = '0';
        table.status = 'free';
        table.id = props.maxId;

        e.preventDefault();
        dispatch(requestTableAdd(table));
    }
    return (
        <li>
        <Form onSubmit={handleAdd}>
        <Row className="text-dark py-4 px-3 d-flex justify-content-between align-items-center border-bottom border-dark">
            <Col xs={2}><h2>New Table</h2></Col>
            <Col xs={1}>
                <span className="px-2 fs-5 text-center lead d-inline-block">capacity: </span>
            </Col>
            <Col xs={1}>
                <Form.Control
                    type="string" 
                    size="sm"
                    name="maxNumPeople" 
                    className="border-dark text-center d-inline-block" 
                />
            </Col>
            <Col className='d-flex justify-content-end'>
                <Button type="submit" variant="primary" className="border-light">
                    <i className="fa fa-plus"/>
                </Button>
            </Col>
        </Row>
        </Form>
        </li>
    );
}

export default TableForm;