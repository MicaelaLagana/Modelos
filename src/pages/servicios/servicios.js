import React from "react";
import Navbar from "../../components/navbar";
import Carrousel from '../../components/carrousel';
import edificios_banner from "../../assets/images/edificios_banner.jpg";

export default function Servicios() {
  const items = [
    {
      img: edificios_banner,
      title: "Administracion de consorcios",
      description: "Hestia ofrece una forma más efectiva para la administración de consorcios, brindando una experiencia rápida, fácil de usar y de acceso disponible ya sea vía web o app moviles."
    },
    {
      img: edificios_banner,
      title: "Liquidacion de expensas",
      description: "Hestia cuenta con su propia herramienta para llevar a cabo los registros de los ingresos y egresos de sus consorcios, así como la posibilidad de registrar a sus proveedores frecuentes, y la posibilidad de que una vez que la liquidación de expensas fue emitida, esta será entregada vía mail y mensajería interna a todos los inquilinos y propietarios."
    },
    {
      img: edificios_banner,
      title: "Administracion de Amenities",
      description: "Si su consorcio posee partes comunes, Hestia cuenta con un sistema de registro de dichos amenities, para llevar a cabo su seguimiento, y además disponibilizando los mismos para que mediante la plataforma, inquilinos y propietarios puedan consultar la disponibilidad y reservarlos."
    },
    {
      img: edificios_banner,
      title: "Seguimientos de pedidos",
      description: "En Hestia nos hemos preocupado por mejorar la experiencia de avisos de visita u otras notificaciones importantes, dejado de lado los avisos manuales, llamados o letreros, incorporando un sistema de notificaciones, el cual al registrar un aviso de visita, en ese mismo momento se notificará a cada usuario del consorcio."
    },
  ];

  return (
    <>
      <Navbar />
      <div className="service-container">
        <Carrousel items={items} />
      </div>
    </>
  );
}