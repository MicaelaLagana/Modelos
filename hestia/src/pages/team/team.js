import React from "react";
import Navbar from "../../components/navbar";
import { Grid } from '@material-ui/core'
import fede from  "../../assets/images/Federico_Santos.jpg";
import mica from  "../../assets/images/Micaela_Lagana.jpg";
import chris from  "../../assets/images/Christian_Giliberti.jpg";
import nes from  "../../assets/images/Nestor_Rivera.jpg";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className='titulo'>
      <h2>Nuestro Equipo</h2>
      </div>
      
      <div className='teamgrid'>
        <Grid container spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={4}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div>
                    <img className='teamimg' src={fede}/>
                  </div>
                  <li>
                    <strong>Federico Santos</strong>
                  </li>
                  <li>
                    <strong>Software Developer</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                <div>
                    <img className='teamimg' src={mica}/>
                  </div>
                  <li>
                    <strong>Micaela Lagana</strong>
                  </li>
                  <li>
                    <strong>Software Developer</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={4}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                <div>
                    <img className='teamimg' src={chris}/>
                  </div>
                  <li>
                    <strong>Christian Giliberti</strong>
                  </li>
                  <li>
                    <strong>Ux</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                <div>
                    <img className='teamimg' src={nes}/>
                  </div>
                  <li>
                    <strong>Nestor Rivera</strong>
                  </li>
                  <li>
                    <strong>QA</strong>
                  </li>
                </div>
                <div className='card-back'>
                  <h1></h1>
                  <ul>
                    <li>
                      <strong>En Hestia sistemas hago de todo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>

    </>

  );
}