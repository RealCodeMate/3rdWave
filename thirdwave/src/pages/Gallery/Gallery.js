import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_gallery.scss";
import image1 from "../../assets/tooth.jpg";

export default function Gallery() {
  return (
    <div id="parent">
      <Header />
      <main class="gallery">
        <h1>Galeri</h1>
        <ul class="gallery__list">
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22944_hires.jpg" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23021_hires.jpg" alt="A first look at dunes" />
            </figure>ƒ
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23004_hires.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) " />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21212_hires.jpg" alt="Small Prominences" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22983_hires.jpg" alt="Ezinu Crater" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22990_hires.jpg" alt="Polar Ice" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22963_hires.jpg" alt="Jupiter" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22918_hires.jpg" alt="Star Gaia 17pbi Seen by Spitzer" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22900_hires.jpg" alt="Another Cloudy Day" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22941_hires.jpg" alt="South Equatorial Belt Brown Barge Close-up" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22936_hires.jpg" alt="Earth-based Observation of Jupiter" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22937_hires.jpg" alt="Jupiter's South Tropical Disturbance" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22933_hires.jpg" alt="Jupiter's Southern Circumpolar Cyclones" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22906_hires.jpg" alt=" Juno Flyby Movie " />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22895_hires.jpg" alt="Swiss Cheese on a Red Planet" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21211_hires.jpg" alt="Solar Active Region's Cameo Appearance" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22914_hires.jpg" alt="Bow Shock Around Young Star" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22695_hires.jpg" alt="Jupiter's North Equatorial Belt" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22770_hires.jpg" alt="Titan Mosaic: The Surface Under the Haze" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA18144_hires.jpg" alt="Reappearing Coronal Hole" />
            </figure>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}