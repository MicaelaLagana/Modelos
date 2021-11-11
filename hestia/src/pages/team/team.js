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
                  <div className='card-img'>
                    <img className='teamimg' src={fede}/>
                  </div>
                  <li>
                    <h1>Federico Santos</h1>
                    <p>Software Developer</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Software Developer</h1>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
                    </li>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                <div className='card-img'>
                    <img className='teamimg' src={mica}/>
                  </div>
                  <li>
                    <h1>Micaela Lagana</h1>
                    <p>Software Developer</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Software Developer</h1>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
                    </li>
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
                <div className='card-img'>
                    <img className='teamimg' src={chris}/>
                  </div>
                  <li>
                    <h1>Christian Giliberti</h1>
                    <p>Customer Support</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Customer Support</h1>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
                    </li>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                <div className='card-img'>
                    <img className='teamimg' src={nes}/>
                  </div>
                  <li>
                    <h1>Nestor Rivera</h1>
                    <p>Marketing Officer</p>
                  </li>
                </div>
                <div className='card-back'>
                  <h1>Marketing Officer</h1>
                    <li>
                      <p>En Hestia sistemas hago de todo</p>
                    </li>
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