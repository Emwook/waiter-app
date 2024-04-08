import { Form, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  getTableById } from "../../redux/tablesRedux";
import { requestUpdateDetails } from "../../redux/tablesRedux";
import PoepleInput from "../PeopleInput/PeopleInput.js";
import StatusInput from "../StatusInput/StatusInput.js";
import BillInput from "../BillInput/BillInput.js";

// > to add min/max range for people and maxPeople, 
// > fix loading icon when loading
const Details = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const table = useSelector(state => getTableById(state, id));
    let tableStatus, bill, maxNumPeople, numPeople;

    if(table){
        tableStatus = table.status;
        bill = table.bill;
        maxNumPeople = table.maxNumPeople;
        numPeople = table.numPeople;
    };
    const previousStatus = tableStatus;    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};

        for (const [key, value] of formData.entries()) {
            data[key] = value.length > 0 ? value : undefined;
        }

        data.id = parseInt(id);

        if((Number(data.maxNumPeople) < Number(data.numPeople))
            || (Number(data.maxNumPeople) < Number(numPeople))
            || (Number(maxNumPeople) < Number(data.numPeople)))
            {
            data.numPeople = data.maxNumPeople;
        }

        if(data.status !== previousStatus && data.status === 'busy'){
            data.bill = 0;
        }
        if(data.status !== previousStatus && (data.status === 'cleaning' || data.status === 'free')){
            data.numPeople = 0;
        }

        dispatch(requestUpdateDetails(data));
        navigate('/');
    }

   
    return (
        <Container>
            <h1 className="py-4">Table {id}</h1>
            <Form onSubmit={handleSubmit}>
                <StatusInput id={id} tableStatus={tableStatus}/>
                <PoepleInput id ={id} numPeople={numPeople} maxNumPeople={maxNumPeople}/>
                {tableStatus === 'busy' ? (<BillInput bill={bill}/>) : null}
                <Button size="sm" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
export default Details;