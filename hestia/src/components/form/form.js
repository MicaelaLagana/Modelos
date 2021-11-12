import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Textfield from "../textfield";
import { Button } from "@mui/material";
import { Grid } from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


export default function ContactForm() {

function handleClick(){
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
    <Grid container justify="center" >
      <Paper
        elevation={12}
        style={{
          width: "800px",
          height: "600px",
          textAlign: "center"
        }}
      >
        <Grid item sx={4}>
          <Textfield label={"Nombre"} placeholder={"Nombre"} value={valueName} onChange={(e) => setValueName(e)}/>
        </Grid>
        <Grid item sx={4}>
          <Textfield label={"Apellido"} placeholder={"Apellido"} value={valueLastName} onChange={(e) => setValueLastName(e)}/>
          </Grid>
        <Grid item sx={4}>
          <Textfield label={"Email"} placeholder={"Email"} value={valueEmail} onChange={(e) => setValueEmail(e)}/>
        </Grid>
        <Grid item sx={6}
        style={{
          width: "600"
        }}>
          <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={6}
              onChange={(e) => setValueMultitex(e)}
              value={valueMultitext}
              style={{
                width: "500"
              }}
            />
          </Grid>
          <Grid item sx={6} 
          style={{
            textAlign: "center"
          }}>
          <RadioGroup row aria-label="soy" name="row-radio-buttons-group" style={{
            textAlign: "center"
          }}>
            <FormControlLabel control={<Radio />} label="Administrador" />
            <FormControlLabel control={<Radio />} label="Propietario" />
          </RadioGroup>
            </Grid>
          <Grid item sx={4}>
            <Button variant="contained" onclick={() => handleClick()}
            >Enviar</Button>
          </Grid>
      </Paper>
    </Grid>
  );
}