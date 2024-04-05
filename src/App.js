import Menu from './components/Menu/Menu';
import Details from './components/Details/Details';
import Home from './components/Home/Home.js'
import NotFound from './components/NotFound.js/NotFound';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllTableData } from './redux/tablesRedux.js';


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=> dispatch(fetchAllTableData()), [dispatch])
  return (
    <main>
      <Menu/>
      <Container>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/table/:tableId" element={<Details/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Container>
    </main>
  );
}

export default App;
