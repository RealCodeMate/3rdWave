import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import "../../sass/pages/_home.scss";
import "../../sass/components/_accordion.scss";
import Header from "../../compenents/Header/Header";
import MyAccordion from "../../compenents/Accordion/MyAccordion";
import CarouselHome from "../../compenents/Carousel/CarouselHome";
import Footer from "../../compenents/Footer/Footer";
import { Link } from "react-router-dom";
import toothBrush from "../../assets/toothbrush.png";
import Map, {
  Marker,
  ScaleControl,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import GoToTop from "../../utils/GoToTop";
import { useTranslation } from 'react-i18next';

const TITLE = 'Anasayfa | Dt. Mustafa Akyılmaz';

export default function Home() {
  const [lng, setLng] = useState(34.313821201725084);
  const [lat, setLat] = useState(36.602693172981596);

  const { t } = useTranslation();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="parent">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <Header />

      <div id="home">
        <div className="home-container">
          <div className="left-bg" />
          <div className="right-bg">
            <div className="main-info">
              <h1 className="firstWord">{t('homePage.welcomeTitle.word1')}
                <span className="life-header"> {t('homePage.welcomeTitle.word2')}</span>
              </h1>
              <h1 className="secondWord">{t('homePage.welcomeTitle.word3')}</h1>
              <h1 className="thirdWord">{t('homePage.welcomeTitle.word4')}</h1>
              <br />
              <span
                className="wave-header"
                onClick={() => {
                  window.scrollTo({ top: 1051, behavior: "smooth" });
                }}
              >
                {t('homePage.welcomeButton.text')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-b">
        <div className="section-b-main">
          <div className="row">
            <h1>{t('homePage.treatmentsSection.treHeader')}</h1>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  {t('homePage.treatmentsSection.tre1')}
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/dis-beyazlatma">{t('homePage.treatmentsSection.more')}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  {t('homePage.treatmentsSection.tre2')}
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/dolgu-islemleri">{t('homePage.treatmentsSection.more')}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">{t('homePage.treatmentsSection.tre3')}</div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/dis-cekimleri">{t('homePage.treatmentsSection.more')}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  {t('homePage.treatmentsSection.tre4')}
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/implant-uygulamalari">{t('homePage.treatmentsSection.more')}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  {t('homePage.treatmentsSection.tre5')}
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/kanal-tedavileri">{t('homePage.treatmentsSection.more')}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">{t('homePage.treatmentsSection.tre6')}</div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/protez-tedavileri">{t('homePage.treatmentsSection.more')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-d">
        <div className="section-d-slide">
          <h1>{t('homePage.photoGallerySection.header')}</h1>
          <p>
            {t('homePage.photoGallerySection.word1')} <span className="life-header">{t('homePage.photoGallerySection.word2')}</span> {t('homePage.photoGallerySection.word3')}
          </p>
          <CarouselHome />
        </div>
      </div>

      <div className="section-a">
        <div className="sss-info">
          <h1>
            <span>{t('homePage.faqSection.header.word1')}</span>
            {t('homePage.faqSection.header.word2')}
            <span> {t('homePage.faqSection.header.word3')}</span>
            {t('homePage.faqSection.header.word4')} <span>
              {t('homePage.faqSection.header.word5')}</span>
            {t('homePage.faqSection.header.word6')}
          </h1>

          <MyAccordion />
          <Link to="/faq" className="faq-button">
            {t('homePage.faqSection.button.more')}
          </Link>
          <div className="sss-animation">
            <section>
              <div className="toothBrush">
                <div>
                  <div>
                    <img src={toothBrush} className="brush"></img>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={toothBrush} className="brush"></img>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={toothBrush} className="brush"></img>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={toothBrush} className="brush"></img>
                  </div>
                </div>
                <div>
                  <img src={toothBrush} className="brush"></img>
                </div>
                <div>
                  <img src={toothBrush} className="brush"></img>
                </div>
                <div>
                  <img src={toothBrush} className="brush"></img>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="section-f">
        <div className="left-map">
          <Map
            mapboxAccessToken="pk.eyJ1IjoidHQzMyIsImEiOiJjbGF1MWloZm4wMjZrM3BuMGZ1d2g1Z2p1In0.BKizdKlGEIXhMxYo-dbYWA"
            center
            initialViewState={{
              longitude: lng,
              latitude: lat,
              zoom: 15,
            }}
            style={{
              width: "85%",
              height: "70%",
              borderRadius: "10px",
            }}
            className="map"
            mapStyle="mapbox://styles/tt33/clauy32th004814n9nvnwcabp"
          >
            <Marker
              latitude={lat}
              longitude={lng}
              color={"red"}
              onClick={() =>
                openInNewTab(
                  "https://www.google.com/maps/place/di%C5%9F+hekimi+mustafa+aky%C4%B1lmaz/@36.6026435,34.3138118,15z/data=!4m5!3m4!1s0x0:0x28a876623e2b81e!8m2!3d36.6026435!4d34.3138118"
                )
              }
            />
            <ScaleControl />
            <NavigationControl />
            <GeolocateControl />
            <FullscreenControl />
          </Map>
        </div>
        <div className="right-map">
          <div className="right-map-text">
            <div class="opening-hours-container">
              <div class="left-col">
                <h2>{t('homePage.workingDaysAndHours.header')}</h2>
                <div class="card">
                  <div class="content">

                    <span> {t('homePage.workingDaysAndHours.day1')} </span>
                  </div>

                  <div class="content">
                    <i data-feather="clock"></i>
                    <span> 09:00 - 17:00 </span>
                  </div>
                </div>
                <div class="card">
                  <div class="content">

                    <span> {t('homePage.workingDaysAndHours.day2')} </span>
                  </div>

                  <div class="content">
                    <span> 09:00 - 17:00 </span>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <span> {t('homePage.workingDaysAndHours.day3')} </span>
                  </div>

                  <div class="content">
                    <span> 09:00 - 17:00 </span>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <span> {t('homePage.workingDaysAndHours.day4')} </span>
                  </div>

                  <div class="content">
                    <span> 09:00 - 17:00 </span>
                  </div>
                </div>

                <div class="card">
                  <div class="content">
                    <span> {t('homePage.workingDaysAndHours.day5')} </span>
                  </div>

                  <div class="content">
                    <span> 09:00 - 17:00 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
}
