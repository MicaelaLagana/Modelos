import React, { useState } from "react";
import { Form, Button, Container, Card, FloatingLabel } from 'react-bootstrap';
import AlertDismissible from "../alert";
import './form.css';

const {
  Group,
  Label,
  Control,
  Check,

} = Form;

export default function ContactForm() {
  const [show, setShow] = useState(false);

  function handleClick() {
    console.log("funcion on click: ", show);
    setShow(true)
  }
  console.log(show);
  return (
    <div className="body" style={{
      display: "flex",
      justifyContent: "end",
    }}>
      <div className=" p-5 col-6" className="contactForm">
        <Card className="p-4"
        style={{ height: show ? '700px' : '500px' }}>
          <Form>
            <Group className="mb-3" controlId="formBasicEmail">
              <Label>Nombre</Label>
              <Control type="text" placeholder="Nombre"  />
            </Group>
            <Group className="mb-3" controlId="formBasicEmail">
              <Label>Apellido</Label>
              <Control type="text" placeholder="Apellido"  />
            </Group>
            <Group className="mb-3" controlId="formBasicEmail">
              <Label>Email</Label>
              <Control type="email" placeholder="Email" />
            </Group>

            <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
              <Control
                as="textarea"
                placeholder="Escribanos su mensaje"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <div key="inline-radio" className="mt-3">
              <Check
                inline
                label="Administrador"
                name="row-radio-buttons-group"
                type="radio"
                id="inline-radio-admin"
              />
              <Check
                inline
                label="Propietario"
                name="row-radio-buttons-group"
                type="radio"
                id="inline-radio-prop"
              />
            </div>
            {show && <AlertDismissible/>}
            <Button variant="primary mt-3" onClick={handleClick} >
            Enviar
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}