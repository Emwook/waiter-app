import Menu from "../Menu/Menu.js";
import { Container } from 'react-bootstrap';
import TablesSection from "../TablesSection/TablesSection.js";


const Home = () => {
    return (
        <>
            <Menu/>
            <Container>
                <TablesSection/>
            </Container>
        </>
    );
}

export default Home;