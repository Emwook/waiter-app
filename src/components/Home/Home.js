import TableBar from "../TableBar/TableBar";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";

const Home = () => {
    const tables = useSelector(state => getAllTables(state));

    return(
        <ul>
            {tables.map(table => <TableBar id={table.id} status={table.status}></TableBar>)}
        </ul>
    );
}

export default Home;