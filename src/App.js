import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row} from "react-bootstrap";
import { Navegation } from './components/navegation/navbarfornav';

function App() {
  return (
    <Container fluid>
      <Row>
        <Navegation />
      </Row>
    </Container>
  );
}

export default App;
