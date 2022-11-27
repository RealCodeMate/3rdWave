import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


import "../../sass/components/_footer.scss";
// import Map, {
//   Marker,
//   ScaleControl,
//   NavigationControl,
//   GeolocateControl,
// } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

export default function Footer() {
  // const [lng, setLng] = useState(34.313821201725084);
  // const [lat, setLat] = useState(36.602693172981596);

  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-section-1">
          <h1>Mustafa Akyılmaz</h1>
        </div>
        <div className="footer-top-section-2">
          <ul>
            <li>
              <a href="#">documentation</a>
            </li>
            <li>
              <a href="#">components</a>
            </li>
            <li>
              <a href="#">blocks</a>
            </li>
            <li>
              <a href="#">changelog</a>
            </li>
          </ul>
        </div>
        <div className="footer-top-map">
          {/* <Map
            mapboxAccessToken="pk.eyJ1IjoidHQzMyIsImEiOiJjbGF1MWloZm4wMjZrM3BuMGZ1d2g1Z2p1In0.BKizdKlGEIXhMxYo-dbYWA"
            center
            initialViewState={{
              longitude: lng,
              latitude: lat,
              zoom: 15,
            }}
            className="messi"
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
          </Map> */}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-section-1">
          <p>Copyrights © 2021</p>
        </div>
        <div className="footer-bottom-section-2"> 
          <FontAwesomeIcon icon={faTwitter} className="twitterLogo" onClick={() => window.open("https://github.com/bayogluteoman", "_blank")}/>
          <FontAwesomeIcon icon={faFacebook} className="facebookLogo" onClick={() => window.open("https://tr-tr.facebook.com/mustafa.akyilmaz", "_blank")}/>
          <FontAwesomeIcon icon={faInstagram} className="instagramLogo" onClick={() => window.open("https://www.instagram.com/makyilmaz33/", "_blank")}/>
        </div>
        <div className="footer-bottom-section-3">
          <p>Merkez Mahallesi, Kamil Başaran Sokak, <br/> M.Çelikel Apt, A blok, No:2, D:7, 33730 Erdemli/Mersin</p>
        </div>
      </div>
    </div>
  );
}
