import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from "react-bootstrap";
import { Navegation } from './components/navegation/navbarfornav';

function App() {
  return React.createElement(
    Container,
    { fluid: true },
    React.createElement(
      Row,
      null,
      React.createElement(Navegation, null)
    )
  );
}

export default App;