import Menu from './components/Menu/Menu';
import Details from './components/Details/Details';
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home.js'
import NotFound from './components/NotFound.js/NotFound';
import { Routes, Route } from 'react-router-dom';


const App = () => {
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
