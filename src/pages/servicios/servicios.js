import React from "react";
import Navbar from "../../components/navbar";
import Carrousel from '../../components/carrousel';
import edificios_banner from "../../assets/images/edificios_banner.jpg";

export default function Servicios() {
  const items = [
    {
      img: edificios_banner,
      title: "Administracion de consorcios",
      description: "Hestias ofrece una forma mas efectiva para la administracion de lo consorcios, brindando una experiencia rapida, facil de usar y de acceso disponible ya sea vea web o app moviles"
    },
    {
      img: edificios_banner,
      title: "Liquidacion de expensas",
      description: "Hestia cuenta con su propia herramienta para llevar a cabo los registros de los ingresos y egresos de sus consorcios, asi como la posiblidad de registrar a sus proveedores frecuentes, y la posiblidad de que una vez que la liquidacion de expensas fue emita, esta sera entregada via mail y mensajeria interna a todos los inquilinos y propietatios"
    },
    {
      img: edificios_banner,
      title: "Administracion de Amenities",
      description: "Si su consorcio posee partes comunes, Hestia cuenta con un sistema de registro de dichos amenities, para llevar a cabo su seguimiento, y ademas disponibilizando los mismos para que mediante la plataforma, inquilinos y propietarios puedan consultar la disponibilidad y reservar los mismos."
    },
    {
      img: edificios_banner,
      title: "Seguimientos de pedidos",
      description: "En Hestia nos hemos preocupado por mejorar la experiencia de avisos de visita u otras notifaciones importante, hemos dejado de lado los avisos manuales por llamados o letreros, y hemos incorporado un sistema de notificaciones, el cual al registrar un aviso de visita, en ese mismo momento se notificara a cada usario del consorcio."
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