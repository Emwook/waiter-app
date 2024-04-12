import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { requestTableRemove } from "../../redux/tablesRedux";

const TableBar = (props) => {
    const table = props.table;
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(requestTableRemove(table));
    }
    return(
        <li>
        <Row className="text-dark py-4 px-3 d-flex justify-content-between align-items-center border-bottom border-dark">
            <Col><h2>Table {table.id}</h2></Col>
            <Col>{props.home ? "Status: " : "Capacity: "} <span className="text-muted">{props.home ? table.status : table.maxNumPeople}</span></Col>
            <Col xs={8} className="d-flex justify-content-end">
                {(props.home) 
                ? (
                    <Button variant="primary" className="border-light text-right ml-auto">
                        <NavLink to={`/table/${table.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Show more
                        </NavLink> 
                    </Button>
                )
                :(
                    <Button variant="primary" className="border-light text-right ml-auto" onClick={handleDelete}>
                        <i className="fa fa-trash"/>
                    </Button>
                )}
            </Col>
        </Row>
        </li>
    );
}

export default TableBar