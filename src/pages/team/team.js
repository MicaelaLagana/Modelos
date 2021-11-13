import React from "react";
import Navbar from "../../components/navbar";
import fede from "../../assets/images/Federico_Santos.jpg";
import mica from "../../assets/images/Micaela_Lagana.jpg";
import chris from "../../assets/images/Christian_Giliberti.jpg";
import nes from "../../assets/images/Nestor_Rivera.jpg";
import bgImage from "../../assets/images/bg.jpg";
import { Row, Col } from 'react-bootstrap';

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="bgContainer">
        <img src={bgImage} />
      </div>
      <div className='titulo mt-5'>
        <h2>Nuestro Equipo</h2>
      </div>

      <div className='teamgrid'>
        <Row sm={12} md={12} lg={12}>
          <Col sm={2} md={2} lg={2}></Col>
          <Col sm={3} md={3} lg={3}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div>
                    <img className='teamimg' src={fede} />
                  </div>
                  <li>
                    <strong>Federico Santos</strong>
                  </li>
                  <li>
                    <strong>Software Developer</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={1} md={1} lg={1}></Col>
          <Col sm={3} md={3} lg={3}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div>
                    <img className='teamimg' src={mica} />
                  </div>
                  <li>
                    <strong>Micaela Lagana</strong>
                  </li>
                  <li>
                    <strong>Software Developer</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={2} md={2} lg={2}></Col>
        </Row>
        <Row className="mt-3" sm={12} md={12} lg={12}>
          <Col sm={2} md={2} lg={2}></Col>
          <Col sm={3} md={3} lg={3}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div>
                    <img className='teamimg' src={chris} />
                  </div>
                  <li>
                    <strong>Christian Giliberti</strong>
                  </li>
                  <li>
                    <strong>Ux</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={1} md={1} lg={1}></Col>
          <Col sm={3} md={3} lg={3}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div>
                    <img className='teamimg' src={nes} />
                  </div>
                  <li>
                    <strong>Nestor Rivera</strong>
                  </li>
                  <li>
                    <strong>QA</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={2} md={2} lg={2}></Col>
        </Row>
      </div>
    </>
  );
}