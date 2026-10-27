import React from 'react';
import './Tereftash.css';

function Tereftash() {
  return (
    <section className="terefdashlar">
      <h2>Tərəfdaşlarımız</h2>
      <p className="altbasliq">
        Azərbaycanın aparıcı şirkətləri ilə əməkdaşlıq edirik
      </p>

      <div className="sirketler">

        <div className="sirketkart">
          <div className="sirketikon">
            <i className="fa-regular fa-building"></i>
          </div>
          <h3>Dövlət Məşğulluq Agentliyi</h3>
          <span>Dövlət Qurumu</span>
        </div>


        <div className="sirketkart">
          <div className="sirketikon">
            <i className="fa-regular fa-building"></i>
          </div>
          <h3>SOCAR</h3>
          <span>Enerji</span>
        </div>


        <div className="sirketkart">
          <div className="sirketikon">
            <i className="fa-regular fa-building"></i>
          </div>
          <h3>PASHA Holding</h3>
          <span>Holding</span>
        </div>

        <div className="sirketkart">
          <div className="sirketikon">
            <i className="fa-regular fa-building"></i>
          </div>
          <h3>Azercell</h3>
          <span>Telekommunikasiya</span>
        </div>


        <div className="sirketkart">
          <div className="sirketikon">
            <i className="fa-regular fa-building"></i>
          </div>
          <h3>Kapital Bank</h3>
          <span>Bank</span>
        </div>


        <div className="sirketkart">
          <div className="sirketikon">
            <i className="fa-regular fa-building"></i>
          </div>
          <h3>ASCO</h3>
          <span>Aviasiya</span>
        </div>
      </div>
    </section>
  );
}

export default Tereftash;