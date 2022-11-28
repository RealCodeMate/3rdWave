import React, { useState } from "react";
import "../../sass/pages/_home.scss";
import "../../sass/components/_accordion.scss";
// import "../../sass/components/_carousel.scss";
import Header from "../../compenents/Header/Header";
import MyAccordion from "../../compenents/Accordion/MyAccordion";
import CarouselHome from "../../compenents/Carousel/CarouselHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../compenents/Footer/Footer";

import Map, {
  Marker,
  ScaleControl,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() {
  const clickMe = () => {
    alert("hello 3rd wave");
  };

  const [lng, setLng] = useState(34.313821201725084);
  const [lat, setLat] = useState(36.602693172981596);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="parent">
      <Header />

      <div id="home">
        <div className="messi">

          <div className="left-bg" />
          <div className="right-bg">
            <div className="main-info">
              <h1>
                Sizin gülüşünüz<br />
                bizim için <br />
                <span className="life-header">önemli</span>.
                <br />
              </h1>
              <br />
              <span className="wave-header" onClick={() => clickMe()}>
                Başlayalım
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-b">
        <div className="section-b-main">
          <Container>
            <Row>
              <Col sm>
                <h1>Even more great stuff</h1>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <h1>Even more</h1>
              </Col>
              <Col sm>
                <h1>great </h1>
              </Col>
              <Col sm>
                <h1> stuff</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="section-d">
        <div className="section-d-slide">
          <h1>Foto Galeri</h1>
          <p>
            Kaliteli <span className="life-header">hizmet</span>  için sizleri bekliyoruz.
          </p>
          <CarouselHome />
        </div>
      </div>
      <div className="section-a">
        <h1>
          Sıkça Sorulan Sorular
        </h1>

        <MyAccordion />
        <a href="#" className="faq-button">Daha Fazlasi</a>
      </div>

      <div className="section-f">
        <Map
          mapboxAccessToken="pk.eyJ1IjoidHQzMyIsImEiOiJjbGF1MWloZm4wMjZrM3BuMGZ1d2g1Z2p1In0.BKizdKlGEIXhMxYo-dbYWA"
          center
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 15,
          }}
          style={{
            width: "62%",
            height: "60%",

          }}
          className="map"
          mapStyle="mapbox://styles/tt33/clauy32th004814n9nvnwcabp"
        >
          <Marker
            latitude={lat}
            longitude={lng}
            color={'red'}
            onClick={() =>
              openInNewTab(
                "https://www.google.com/maps/place/di%C5%9F+hekimi+mustafa+aky%C4%B1lmaz/@36.6026435,34.3138118,15z/data=!4m5!3m4!1s0x0:0x28a876623e2b81e!8m2!3d36.6026435!4d34.3138118"
              )
            }
          />
          <ScaleControl />
          <NavigationControl />
          <GeolocateControl />
        </Map>
      </div>
      <Footer />
    </div>
  );
}