import React, { useState } from "react";
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

export default function Home() {
  const [lng, setLng] = useState(34.313821201725084);
  const [lat, setLat] = useState(36.602693172981596);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="parent">
      <Header />

      <div id="home">
        <div className="home-container">
          <div className="left-bg" />
          <div className="right-bg">
            <div className="main-info">
              <h1>
                Sizin <span className="life-header">gülüşünüz</span>
                <br />
                bizim için <br />
                önemli.
                <br />
              </h1>
              <br />
              <span
                className="wave-header"
                onClick={() => {
                  window.scrollTo({ top: 1051, behavior: "smooth" });
                }}
              >
                Başlayalım
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-b">
        <div className="section-b-main">
          <div className="row">
            <h1>Tedaviler</h1>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  <h2>Diş Beyazlatma</h2>
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/dis-beyazlatma">Devami</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  Dolgu islemleri
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/dolgu-islemleri">Devami</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">Diş Çekimleri</div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/dis-cekimleri">Devami</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  İmplant Uygulamaları
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/implant-uygulamalari">Devami</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">
                  Kanal Tedavileri
                </div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/kanal-tedavileri">Devami</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards-side cards-side-front">Protezler</div>
                <div className="cards-side cards-side-back">
                  <div className="backside-1-header">
                    <Link to="/treatments/protez-tedavileri">Devami</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-d">
        <div className="section-d-slide">
          <h1>Foto Galeri</h1>
          <p>
            Güzel bir <span className="life-header">gülümseme</span> için
            sizleri bekliyoruz.
          </p>
          <CarouselHome />
        </div>
      </div>

      <div className="section-a">
        <div className="sss-info">
          <h1>
            <span>S</span>ıkça <span>S</span>orulan <span>S</span>orular
          </h1>

          <MyAccordion />
          <Link to="/faq" className="faq-button">
            Daha Fazlası
          </Link>
          <div className="sss-animation">
            <section>
              <div className="leaf">
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
                <h2>Çalışma Saatleri</h2>
                <div class="card">
                  <div class="content">
                    <i data-feather="calendar"></i>
                    <span> Pazartesi </span>
                  </div>

                  <div class="content">
                    <i data-feather="clock"></i>
                    <span> 10:00 - 16:38 </span>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <i data-feather="calendar"></i>
                    <span> Salı </span>
                  </div>

                  <div class="content">
                    <i data-feather="clock"></i>
                    <span> 10:00 - 16:38 </span>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <i data-feather="calendar"></i>
                    <span> Çarşamba </span>
                  </div>

                  <div class="content">
                    <i data-feather="clock"></i>
                    <span> 10:00 - 16:38 </span>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <i data-feather="calendar"></i>
                    <span> Perşembe </span>
                  </div>

                  <div class="content">
                    <i data-feather="clock"></i>
                    <span> 10:00 - 16:38 </span>
                  </div>
                </div>

                <div class="card">
                  <div class="content">
                    <i data-feather="calendar"></i>
                    <span> Cuma </span>
                  </div>

                  <div class="content">
                    <i data-feather="clock"></i>
                    <span> 08:00 - 14:00 </span>
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
