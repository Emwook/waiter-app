import Menu from './components/Menu/Menu';
import Details from './components/Details/Details';
import Home from './components/Home/Home.js'
import { Container } from 'react-bootstrap';
import { Routes, Route,  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllTableData, getAllTables } from './redux/tablesRedux.js';


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchAllTableData())},
    [dispatch])
  const tables = useSelector(state => getAllTables(state));
  const ids = tables.map(table => table.id);

  return (
    <main>
      <Menu/>
      <Container>
        <Routes>
            <Route path="/*" element={<Home/>}/>
            {ids.map(id => <Route
              path={`/table/${id}`}
              element={<Details id={id}/>}
            /> )}
        </Routes>
      </Container>
    </main>
  );
}

export default App;
