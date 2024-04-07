import TableBar from "../TableBar/TableBar";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";

const Home = () => {
    const tables = useSelector(state => getAllTables(state));

    return(
        <ul className="mt-5">
            {tables.map(table => <TableBar key={table.id} id={table.id} status={table.status}></TableBar>)}
        </ul>
    );
}

export default Home;