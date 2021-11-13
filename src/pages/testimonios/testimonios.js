import React from "react";
import Navbar from "../../components/navbar";
import Carrousel from '../../components/carrousel';
import styled from "styled-components";
import bgImage from "../../assets/images/bg.jpg";
const MainContainer = styled.div`
    padding: 2em;
    z-index: 5;
    position: relative;
`;
export default function Testimonios() {
  const items = [

    {
        date: "24 Agosto 2020",
        name: "Marcelo Lopez",
        comment: "Desde que utilizamos el sistema de Hestia la comunicación con los propietarios es mucho más ágil y fluida, hace más fácil el seguimiento de los pedido.",
        role: "Cecil Inmobiliaria",
    },
    {
        date: "14 Agosto 2020",
        name: "Eugenia Salafia",
        comment: "Estamos muy satisfechos con el sistema, mejoro el tiempo de las confecciones de liquidaciones y envíos de las mismas.",
        role: "Dorrego SA",
    },
    {
        date: "12 Enero 2021",
        name: "Mariano Juanes",
        comment: "La recomiendo, las notificaciones me permiten estar al tanto de todo lo que ocurre en el edificio.",
        role: "Duce Hogar",
    },
    {
        date: "13 Febrero 2021",
        name: "Sofia Suarez",
        comment: "Enviar las expensas en forma digital nos ahorra mucho tiempo.",
        role: "Inmobiliarte",
    },
  ];

  return (
    <div className="testimonio-page">
      <Navbar />
      <div className="bgContainer">
        <img src={bgImage} />
      </div>
      <MainContainer>
        <Carrousel items={items} itemRender="card" variant="dark" />
      </MainContainer>
    </div>
  );
}