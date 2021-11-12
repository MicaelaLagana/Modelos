import React from "react";
import Navbar from "../../components/navbar";
import Home_bg from "../../assets/images/home_bg.jpg";
import { Row, Col, Button } from 'react-bootstrap';
import aboutus from "../../assets/images/home_about_us.jpg";
import comunication from "../../assets/images/home_comunication.jpg";


export default function Home() {
  return (
    <>
      <Navbar />
      <section id='home_img'>
        <div >
          <img src={Home_bg} alt='relax' />
          <div class='home_title'><h1>Bienvenido a Hestia sistemas</h1></div>
        </div>
      </section>

      <section id='aboutus'>
        <Row sm={12} md={12} lg={12} className="mt-2">
          <Col sm={6} md={6} lg={6}>
            <div class='home_aboutus'>
              <h2>
                Acerca de Nosotros
              </h2>
            </div>
            <div class='home_description'>
              <p>
                Hestia Sistemas nació en 2021 y propone una solución innovadora para poder brindar una plataforma que mejore la comunicación y organización, entre administradores, propietarios e inquilinos. Así podemos olvidarnos de los recordatorios en el celular, los miles de grupos de whatsapp llenos de memes, las notitas nunca leídas en el ascensor y la puerta, y de los mails abandonados en el interminable abismo de la casilla de spam.
              </p>
            </div>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <div class='home_image_aboutus'>
              <img src={aboutus} alt='team thinking' />
            </div>
          </Col>
        </Row>
        <Row sm={12} md={12} lg={12} className="mt-4">
          <Col sm={6} md={6} lg={6}>
            <div class='home_image_aboutus'>
              <img src={comunication} alt='girl talking' />
            </div>

          </Col>
          <Col sm={6} md={6} lg={6}>
            <div class='home_aboutus'>
              <h2>
                ¿Que nos Diferencia?
              </h2>
            </div>
            <div class='home_description'>
              <p>
                Desde Hestia Sistemas nos preocupamos por nuestros clientes, es por ellos que nuestra aplicación te va a permitir que obtengas mejoras en la comunicación con el consorsio y dueños e inquilinos, va a ayudar a que aumente tu productividad desde la administración de los servicios concernientes al edificio, hasta la solicitud de reparaciones y mantenimiento de tu hogar. Nuestra platadorma es accesible y de rápido aprendisaje por lo que te resultara muy comoda en muy poco tiempo.
              </p>

            </div>
          </Col>
        </Row>
        <Row sm={12} md={12} lg={12} className="mt-4">
         <div class='home_button'>
            <Button color='primary'>
              Contactanos
            </Button>
          </div>
        </Row>

      </section>

    </>
  );
}