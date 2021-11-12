import React from "react";
import Navbar from "../../components/navbar";
import Home_bg from  "../../assets/images/home_bg.jpg";
import Button from '@material-ui/core/Button';
import contactos from "../contactos/contactos.js";
import { Box } from "@mui/system";
import { Grid } from '@material-ui/core';
import aboutus from  "../../assets/images/home_about_us.jpg";
import comunication from  "../../assets/images/home_comunication.jpg";


export default function Home() {
    return (
    <>
        <Navbar />
        <section id ='home_img'>
            <div >
                <img src = {Home_bg} alt = 'relax'/>
                <div class = 'home_title'><h1>Bienvenido a Hestia sistemas</h1></div>
            </div>
        </section>

        <section id = 'aboutus'>
            <div>
                <Grid container rowSpacing = {1} columnSpacing = {1}>
                    <Grid item md = {6}>
                        <div class = 'home_aboutus'>
                            <h2>
                                Acerca de Nosotros
                            </h2>
                        </div>
                        <div class = 'home_description'>
                            <p>
                            Hestia Sistemas nació en 2021 y propone una solución innovadora para poder brindar una plataforma que mejore la comunicación y organización, entre administradores, propietarios e inquilinos. Así podemos olvidarnos de los recordatorios en el celular, los miles de grupos de whatsapp llenos de memes, las notitas nunca leídas en el ascensor y la puerta, y de los mails abandonados en el interminable abismo de la casilla de spam.
                            </p>
                        </div>

                    </Grid>
                    <Grid item md = {6}>
                        <div class = 'home_image_aboutus'>
                            <img src = {aboutus} alt = 'team thinking'/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div>
                <Grid container rowSpacing = {1} columnSpacing = {1}>
                    <Grid item md = {6}>
                        <div class = 'home_image_aboutus'>
                            <img src = {comunication} alt = 'girl talking'/>
                        </div>
                    </Grid>
                    <Grid item md = {6}>
                        <div class = 'home_aboutus'>
                            <h2>
                                ¿Que nos Diferencia?
                            </h2>
                        </div>
                        <div class = 'home_description'>
                            <p>
                                Desde Hestia Sistemas nos preocupamos por nuestros clientes, es por ellos que nuestra aplicación te va a permitir que obtengas mejoras en la comunicación con el consorsio y dueños e inquilinos, va a ayudar a que aumente tu productividad desde la administración de los servicios concernientes al edificio, hasta la solicitud de reparaciones y mantenimiento de tu hogar. Nuestra platadorma es accesible y de rápido aprendisaje por lo que te resultara muy comoda en muy poco tiempo.
                            </p>

                        </div>

                    </Grid>
                </Grid>
            </div>
            <div class = 'home_button'>
            <Grid container rowSpacing = {1} columnSpacing = {1}>
                <Grid item md = {12}>
                    <Box textAlign='center'>
                        <Button href = 'contactos' variant = 'contained' color = 'primary'>
                        Contactanos
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            </div>
        </section>
                
    </>
    );
}