import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';

export default function Navbar() {
return (
  <>
    <AppBar position="static">
        <Link to="/">About</Link>
        <Link to="/contactos">Contactos</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/equipo">Equipo</Link>
        <Link to="/testimonios">Testimonios</Link>
    </AppBar>
  </>
  );
}
