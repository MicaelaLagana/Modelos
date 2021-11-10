import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import logo from  "../../assets/images/logo_h.png";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src={logo}/>
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
            <Button color="inherit"> <Link className="menu_link" to="/">About</Link></Button>
            <Button color="inherit"><Link className="menu_link" to="/servicios">Servicios</Link></Button>
            <Button color="inherit"><Link className="menu_link" to="/testimonios">Testimonios</Link></Button>
            <Button color="inherit"><Link className="menu_link" to="/equipo">Equipo</Link></Button>
            <Button color="inherit"><Link className="menu_link" to="/contactos">Contactos</Link></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
