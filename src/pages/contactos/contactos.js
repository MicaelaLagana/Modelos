import React from "react";
import Navbar from "../../components/navbar";
import styled from "styled-components";
import ContactForm from "../../components/form";

const MainContainer = styled.div`
  padding: 4vh 4vh 0 4vh;
`

export default function Contactos() {
    return (
        <>
        <Navbar />
        <MainContainer>
           <ContactForm />
        </MainContainer>
    </>
    );
}