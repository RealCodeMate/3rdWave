import React, { useEffect, useState } from "react";
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
  const [selectedId, setSelectedId] = useState(0);
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

  const url = window.location.href;
  const partUrl = url.slice(22, url.length)

  const arr = [
    { id: 1, url: "dis-beyazlatma", title: `${t('treatmentsPage.sideMenu.m1')}` },
    { id: 2, url: "dolgu-islemleri", title: `${t('treatmentsPage.sideMenu.m2')}` },
    { id: 3, url: "dis-cekimleri", title: `${t('treatmentsPage.sideMenu.m3')}` },
    { id: 4, url: "implant-uygulamalari", title: `${t('treatmentsPage.sideMenu.m4')}` },
    { id: 5, url: "kanal-tedavileri", title: `${t('treatmentsPage.sideMenu.m5')}` },
    { id: 6, url: "protez-tedavileri", title: `${t('treatmentsPage.sideMenu.m6')}` },
    { id: 7, url: "zirkonyum-kaplama", title: `${t('treatmentsPage.sideMenu.m7')}` },
    { id: 8, url: "laminat-kaplama", title: `${t('treatmentsPage.sideMenu.m8')}` },
  ];

  const HandleChangeBg = (id) => {
    useEffect(() => {
      if (partUrl.length === 10) {
        setSelectedId(0)
      } 
      else { setSelectedId(id) };
    });

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
              {arr.map(el => {
                return (
                  <Link
                    onClick={() => HandleChangeBg(el.id)}
                    className="list-items"
                    to={'/treatments/' + el.url}
                    style={{ backgroundColor: ((selectedId === el.id || string === el.url) ? "#a4be7b" : "") }}
                  >
                    {el.title}
                  </Link>
                )
              })}
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
