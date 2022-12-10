import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_treatments.scss";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import ImplantMethods from "./TreatmentsMethods/ImplantMethods";
import ProstheticTreatments from "./TreatmentsMethods/ProstheticTreatments";
import RootCanalTreatments from "./TreatmentsMethods/RootCanalTreatments";
import TeethFillings from "./TreatmentsMethods/TeethFillings";
import TeethWhitening from "./TreatmentsMethods/TeethWhitening";
import ToothPulling from "./TreatmentsMethods/ToothPulling";
import ZirconiumCoating from "./TreatmentsMethods/ZirconiumCoating";
import LaminateCoating from "./TreatmentsMethods/LaminateCoating";
import GoToTop from "../../utils/GoToTop";

export default function Treatments() {
  const { string } = useParams();

  const changePage = () => {
    if (string === undefined) { return <TeethWhitening data={string} /> }
    if (string === 'dis-beyazlatma') { return <TeethWhitening data={string} /> }
    if (string === 'dolgu-islemleri') { return <TeethFillings data={string} /> }
    if (string === 'dis-cekimleri') { return <ToothPulling data={string} /> }
    if (string === 'implant-uygulamalari') { return <ImplantMethods data={string} /> }
    if (string === 'kanal-tedavileri') { return <RootCanalTreatments data={string} /> }
    if (string === 'protez-tedavileri') { return <ProstheticTreatments data={string} /> }
    if (string === 'zirkonyum-kaplama') { return <ZirconiumCoating data={string} /> }
    if (string === 'laminat-kaplama') { return <LaminateCoating data={string} /> }

  }
  return (
    <div id="parent">
      <Header />
      <section id="container">
      <header class="section-header">
              <h1>
                Tedaviler
              </h1>
            </header>
        <div className="treatments-parent">

          <div className="treatments-list">
            
            <ul>
              <Link className="list-items" to="/treatments/dis-beyazlatma">Diş Beyazlatma</Link>
              <Link className="list-items" to="/treatments/dolgu-islemleri">Dolgu işlemleri</Link>
              <Link className="list-items" to="/treatments/dis-cekimleri">Diş Çekimleri</Link>
              <Link className="list-items" to="/treatments/implant-uygulamalari">İmplant Uygulamaları</Link>
              <Link className="list-items" to="/treatments/kanal-tedavileri">Kanal Tedavileri</Link>
              <Link className="list-items" to="/treatments/protez-tedavileri">Protez Tedavileri</Link>
              <Link className="list-items" to="/treatments/zirkonyum-kaplama">Zirkonyum Kaplama</Link>
              <Link className="list-items" to="/treatments/laminat-kaplama">Laminat Kaplama</Link>
            </ul>
          </div>
          <div className="treatments-info">
            {changePage()}
          </div>
        </div>
        <Footer />
        <GoToTop />
      </section>

    </div>
  );
}
