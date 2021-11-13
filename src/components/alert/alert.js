import React, { useState } from "react";
import { Alert, Button } from 'react-bootstrap';

export default function AlertDismissible() {
    const [show, setShow] = useState();
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Mensaje Enviado!</Alert.Heading>
          <p>
            En breve nos contactaremos con usted!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Cerrar
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }