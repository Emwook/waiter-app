import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllTables } from "../../redux/tablesRedux";
import SelectOption from "../SelectOption/SelectOption.js";

const Details = () => {
    const { tableId } = useParams();
    const tables = useSelector(state => getAllTables(state));
    let table = tables[1]; //default option in case of bad load
    let status = 'free';
    for(const aTable of tables){
        if(tableId && String(aTable.id) === String(tableId)){
            table = aTable;
            status = table.status;
        }
    }
    
    const possibleStatus = ['free','busy','cleaning','reserved'];
    return(
        <Container>
            <h1 className="py-4">Table {tableId}</h1>
            <Form onSubmit={e => e.preventDefault()}>
                <Form.Group className="w-25">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>Select: </Form.Label></Col>
                        <Col sm={5}>
                            <Form.Select data-bs-theme="light" size="sm" className="border-dark">
                                {possibleStatus.map(possibleStatus => <SelectOption key={possibleStatus} selectedStatus={status} status={possibleStatus} />)}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>    
                <Form.Group className="w-25">
                    <Row className="my-2">
                        <Col sm={7}><Form.Label>People: </Form.Label></Col>
                        <Col sm={2}><Form.Control type="string" size="sm" id="numPeople" className="border-dark text-center"/></Col>
                        <Col sm={1}><span>/</span></Col>
                        <Col sm={2}><Form.Control type="string" size="sm" id="maxNumPeople" className="border-dark text-center"/></Col>
                    </Row>
                </Form.Group>
                <Form.Group className="w-25">
                    <Row className="my-2">
                        <Col sm={6}><Form.Label>Bill: </Form.Label></Col>
                        <Col sm={1}><span>$</span></Col>
                        <Col sm={2}><Form.Control type="string" size="sm" id="bill" className="border-dark text-center"/></Col>
                    </Row>
                </Form.Group>
                <Button size="sm" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
export default Details;