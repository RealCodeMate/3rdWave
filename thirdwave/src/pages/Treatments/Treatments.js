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
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const TITLE = 'Tedaviler | Dt. Mustafa Akyılmaz';

export default function Treatments() {
  const { string } = useParams();
  const { t } = useTranslation();

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
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      
      <Header />
      <section id="container">
        <header class="section-header">
          <h1>
            {t('treatmentsPage.header')}
          </h1>
        </header>
        <div className="treatments-parent">

          <div className="treatments-list">

            <ul>
              <Link className="list-items" to="/treatments/dis-beyazlatma">{t('treatmentsPage.sideMenu.m1')}</Link>
              <Link className="list-items" to="/treatments/dolgu-islemleri">{t('treatmentsPage.sideMenu.m2')}</Link>
              <Link className="list-items" to="/treatments/dis-cekimleri">{t('treatmentsPage.sideMenu.m3')}</Link>
              <Link className="list-items" to="/treatments/implant-uygulamalari">{t('treatmentsPage.sideMenu.m4')}</Link>
              <Link className="list-items" to="/treatments/kanal-tedavileri">{t('treatmentsPage.sideMenu.m5')}</Link>
              <Link className="list-items" to="/treatments/protez-tedavileri">{t('treatmentsPage.sideMenu.m6')}</Link>
              <Link className="list-items" to="/treatments/zirkonyum-kaplama">{t('treatmentsPage.sideMenu.m7')}</Link>
              <Link className="list-items" to="/treatments/laminat-kaplama">{t('treatmentsPage.sideMenu.m8')}</Link>
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
