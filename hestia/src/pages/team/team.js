import React from "react";
import Navbar from "../../components/navbar";
import { Grid } from '@material-ui/core'
import anubis from  "../../assets/images/anubis.jpg";
import hathor from  "../../assets/images/hathor.jpg";
import horus from  "../../assets/images/horus.jpg";
import thot from  "../../assets/images/thot.jpg";

export default function Team() {
  return (
    <>
      <Navbar />
      <h2>Nuesto equipo</h2>
      <div className='teamgrid'>
        <Grid container spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={4}>
            <div className='card'>
              <div className='card-inner'>
                <div className='card-front'>
                  <div>
                    <img className='teamimg' src={anubis}/>
                  </div>
                  <li>
                    <strong>Federico Santos</strong>
                  </li>
                  <li>
                    <strong>Programador</strong>
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
                    <img className='teamimg' src={hathor}/>
                  </div>
                  <li>
                    <strong>Micaela Lagana</strong>
                  </li>
                  <li>
                    <strong>Programador</strong>
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
                    <img className='teamimg' src={horus}/>
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
                    <img className='teamimg' src={thot}/>
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