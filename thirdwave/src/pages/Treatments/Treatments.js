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

  }
  return (
    <div id="parent">
      <Header />
      <section id="container">

        <div className="treatments-parent">

          <div className="treatments-list">
            <header class="section-header">
              <h1>
                Tedaviler
              </h1>
            </header>
            <ul>
              <Link className="list-items" to="/treatments/dis-beyazlatma">Dis Beyazlatma</Link>
              <Link className="list-items" to="/treatments/dolgu-islemleri">Dolgu islemleri</Link>
              <Link className="list-items" to="/treatments/dis-cekimleri">Dis Cekimleri</Link>
              <Link className="list-items" to="/treatments/implant-uygulamalari">Implant Uygulamalari</Link>
              <Link className="list-items" to="/treatments/kanal-tedavileri">Kanal Tedavileri</Link>
              <Link className="list-items" to="/treatments/protez-tedavileri">Protez Tedavileri</Link>
              <Link className="list-items" to="/treatments/dis-beyazlatma">Dis Beyazlatma</Link>
              <Link className="list-items" to="/treatments/dolgu-islemleri">Dolgu islemleri</Link>
              <Link className="list-items" to="/treatments/dis-cekimleri">Dis Cekimleri</Link>
              <Link className="list-items" to="/treatments/implant-uygulamalari">Implant Uygulamalari</Link>
              <Link className="list-items" to="/treatments/kanal-tedavileri">Kanal Tedavileri</Link>
              <Link className="list-items" to="/treatments/protez-tedavileri">Protez Tedavileri</Link>
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
