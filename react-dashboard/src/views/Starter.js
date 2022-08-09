import { Col, Row } from "reactstrap";
import Map from "../components/dashboard/Map";
import Tables from "../components/dashboard/Tables";
import './Starter.css';
import Footer from '../Footer.js';

const Starter = () => {
  return (
    <div>
      <div className="main-div">

        {/*** Map ***/}
        <Row className="row-map">
          <Col>
            <Map />
          </Col>
        </Row>
        {/***Table ***/}
        <Row className="row-table">
          <Col>
            <Tables />
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Starter;
