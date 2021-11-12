import React, { useState } from "react";
import { Form, Button, Container, Card, FloatingLabel } from 'react-bootstrap';

const {
  Group,
  Label,
  Control,
  Check,
  Text
} = Form;

export default function ContactForm() {

  function handleClick() {
    setValueLastName("");
    setValueLastName("");
    setValueEmail("");
    setValueMultitex("");
  }

  const [valueName, setValueName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueMultitext, setValueMultitex] = useState("");
  const [valueRadio, setValueRadio] = useState("");


  return (



    //       <Grid item sx={6} 
    //       style={{
    //         textAlign: "center"
    //       }}>
    //       <RadioGroup row aria-label="soy" name="row-radio-buttons-group" style={{
    //         textAlign: "center"
    //       }}>
    //         <FormControlLabel control={<Radio />} label="Administrador" />
    //         <FormControlLabel control={<Radio />} label="Propietario" />
    //       </RadioGroup>
    //         </Grid>
    //       <Grid item sx={4}>
    //         <Button variant="contained" onclick={() => handleClick()}
    //         >Enviar</Button>
    //       </Grid>
    //   </Paper>
    // </Grid>
    <Container className="justify-center p-5">
      <Card className="p-4">
        <Form>
          <Group className="mb-3" controlId="formBasicEmail">
            <Label>Nombre</Label>
            <Control type="text" placeholder="Nombre" value={valueName} onChange={(e) => setValueName(e)} />
          </Group>
          <Group className="mb-3" controlId="formBasicEmail">
            <Label>Apellido</Label>
            <Control type="text" placeholder="Apellido" value={valueLastName} onChange={(e) => setValueLastName(e)} />
          </Group>
          <Group className="mb-3" controlId="formBasicEmail">
            <Label>Email</Label>
            <Control type="email" placeholder="Email" value={valueEmail} onChange={(e) => setValueEmail(e)} />
          </Group>

          <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
            <Control
              as="textarea"
              placeholder="Escribanos su mensaje"
              style={{ height: '100px' }}
              onChange={(e) => setValueMultitex(e)}
              value={valueMultitext}
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
          <Button variant="primary mt-3" onclick={() => handleClick()} >
          Enviar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}