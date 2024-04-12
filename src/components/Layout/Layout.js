import {Container, Spinner} from 'react-bootstrap';
import { useSelector } from "react-redux";
import { getAllTables } from '../../redux/tablesRedux';
import TableBar from '../TableBar/TableBar';
import TableForm from '../TableForm/TableForm';

const Layout = () => {
    const tables = useSelector(state => getAllTables(state));
    let maxId = 0;
    for (const table of tables){
        if(table.id > maxId){
            maxId = table.id;
        }
    }
    maxId +=1;
    return(
        <Container>
            {tables.length === 0 ? (
            <div className="d-flex pt-3">
                <Spinner animation="border" role="status" className="m-auto">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>) : (
            <ul className="mt-5 px-3 list-unstyled">
                {tables.map(table => 
                    <TableBar
                        home={false}
                        key={table.id}
                        table={table}
                    />)}
                    <TableForm maxId={maxId}/>
            </ul> )}
        </Container>
    )
}

export default Layout;