import React from "react";
import { Form, Button, Container, Card, FloatingLabel } from 'react-bootstrap';
import AlertDismissible from "../alert";

const {
  Group,
  Label,
  Control,
  Check,
  Text,
} = Form;

export default function ContactForm() {

  function handleClick() {
    AlertDismissible();
    window.location.reload();
  }



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
      <Text> Agendá una demo con nosotros </Text>
      <Card className="p-4"
       style={{ height: '600px' }}>
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
          <Button variant="primary mt-3" onClick={handleClick} >
          Enviar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}