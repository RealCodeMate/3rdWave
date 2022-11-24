import React, { useState } from "react";
import "../../sass/components/_footer.scss";
import Map, { Marker } from "react-map-gl";

export default function Footer() {
  const [lng, setLng] = useState(34.313821201725084);
  const [lat, setLat] = useState(36.602693172981596);

  return (
    <div className="footer">
      <div className="footer-top">
        <div>
          <h1>3rdWave</h1>
        </div>
        <div className="footer-top-sections">
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
            style={{ width: 400, height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker latitude={lat} longitude={lng} />
          </Map> */}
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>Copyrights © 2021</p>
        </div>
        <div>
          <a href="#">instagram</a>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
        </div>
        <div>
          <p>Merkez Mahallesi Erdemli</p>
        </div>
      </div>
    </div>
  );
}
