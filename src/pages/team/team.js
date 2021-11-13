import React from "react";
import Navbar from "../../components/navbar";
import fede from "../../assets/images/Federico_Santos.jpg";
import mica from "../../assets/images/Micaela_Lagana.jpg";
import chris from "../../assets/images/Christian_Giliberti.jpg";
import nes from "../../assets/images/Nestor_Rivera.jpg";
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Team() {
  return (
    <>
      <Navbar />
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
                  <li></li>
                  <li>
                    <h1>Federico Santos</h1>
                  </li>
                  <li>
                    <p>Software Developer</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Software Developer</h1>
                  <ul>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
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
                  <li></li>
                  <li>
                    <h1>Micaela Lagana</h1>
                  </li>
                  <li>
                    <p>Software Developer</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Software Developer</h1>
                  <ul>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
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
                  <li></li>
                  <li>
                    <h1>Christian Giliberti</h1>
                  </li>
                  <li>
                    <p>Customer Support</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Customer Support</h1>
                  <ul>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
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
                  <li></li>
                  <li>
                    <h1>Nestor Rivera</h1>
                  </li>
                  <li>
                    <p>Marketing Officer</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Marketing Officer</h1>
                  <ul>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
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