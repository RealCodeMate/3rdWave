import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_treatments.scss";
import image1 from "../../assets/home.jpg";
import image2 from "../../assets/home2.jpg";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import ImplantMethods from "./TreatmentsMethods/ImplantMethods";
import ProstheticTreatments from "./TreatmentsMethods/ProstheticTreatments";
import RootCanalTreatments from "./TreatmentsMethods/RootCanalTreatments";
import TeethFillings from "./TreatmentsMethods/TeethFillings";
import TeethWhitening from "./TreatmentsMethods/TeethWhitening";
import ToothPulling from "./TreatmentsMethods/ToothPulling";

export default function Treatments() {
  const { string } = useParams();
  console.log(string)

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
              
              <li>
                <Link className="list-items" to="/treatments/dis-beyazlatma">Dis Beyazlatma</Link>
              </li>
              <li>
                <Link className="list-items" to="/treatments/dolgu-islemleri">Dolgu islemleri</Link>
              </li>
              <li>
                <Link className="list-items" to="/treatments/dis-cekimleri">Dis Cekimleri</Link>
              </li>
              <li>
                <Link className="list-items" to="/treatments/implant-uygulamalari">Implant Uygulamalari</Link>
              </li>
              <li>
                <Link className="list-items" to="/treatments/kanal-tedavileri">Kanal Tedavileri</Link>
              </li>
              <li>
                <Link className="list-items" to="/treatments/protez-tedavileri">Protez Tedavileri</Link>
              </li>
            </ul>
          </div>
          <div className="treatments-info">
            {changePage()}
          </div>
        </div>
        <Footer />
      </section>

    </div>
  );
}
