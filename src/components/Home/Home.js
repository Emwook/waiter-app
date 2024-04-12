import TableBar from "../TableBar/TableBar";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";
import { Spinner } from "react-bootstrap";

const Home = () => {
    const tables = useSelector(state => getAllTables(state));

    return(
        <>
        {tables.length === 0 && (
        <div className="d-flex pt-3">
            <Spinner animation="border" role="status" className="m-auto">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>)}
        <ul className="mt-5 px-3 list-unstyled">
            {tables.map(table => 
            <TableBar
                home={true}
                key={table.id}
                table={table}
            />)}
        </ul>
        </>
    );
}

export default Home;