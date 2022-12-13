import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Calculator from "../../components/Calculator";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <>
      <Row className="show-grid">
          <Col xsHidden md={4}></Col>
          <Col xs={12} md={4} id="calculatorBox">
            <Calculator />
          </Col>
          <Col xsHidden md={4}></Col>
        </Row>
      </>
                 
    </div>
  );
}

export default Home;