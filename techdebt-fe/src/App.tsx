import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Quadrant from './components/Quadrant';
import './css/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={6}>
              <Quadrant />
            </Col>
            <Col sm={6}>
              <Quadrant />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Quadrant />
            </Col>
            <Col sm={6}>
              <Quadrant />
            </Col>
          </Row>
        </Container>  
      </div>
    );
  }
}

export default App;
