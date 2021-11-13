import React from "react";
import { Alert, Button } from 'react-bootstrap';

export default function AlertDismissible(props) {

console.log("props en el alert", props);

    function handleClick() {
      window.location.reload();
    }

  
    return (
      <>
        <Alert show variant="success">
          <Alert.Heading>Mensaje Enviado!</Alert.Heading>
          <p>
            En breve nos contactaremos con usted!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleClick} variant="outline-success">
              Cerrar
            </Button>
          </div>
        </Alert>
      </>
    );
  }