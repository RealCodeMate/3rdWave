import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_gallery.scss";
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";
import photo2 from "../../assets/2-min.jpeg";
import photo3 from "../../assets/3-min.jpeg";
import photo4 from "../../assets/4-min.jpeg";
import photo9 from "../../assets/9-min.jpeg";
import photo11 from "../../assets/11-min.jpeg";
import photo12 from "../../assets/12-min.jpeg";
import photo14 from "../../assets/14-min.jpeg";
import photo16 from "../../assets/16-min.jpeg";
import photo21 from "../../assets/21-min.jpeg";
import photo23 from "../../assets/23.jpeg";
import photo24 from "../../assets/24.jpeg";
import photo25 from "../../assets/25.jpeg";
import photo26 from "../../assets/26.jpeg";
import photo27 from "../../assets/27.jpg";
import photo28 from "../../assets/28.jpeg";
import photo29 from "../../assets/29.jpeg";
import photo30 from "../../assets/30.jpeg";

const TITLE = 'Galeri | Dt. Mustafa Akyılmaz';

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <div id="parent">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <Header />
      <main class="gallery">
        <h1>{t("galleryPage.header")}</h1>
        <ul class="gallery__list">
          <li>
            <figure>
              <img
                src={photo21}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo23}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo24}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo25}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo2}
                alt="2"
              />
            </figure>
          </li>

          <li>
            <figure>
              <img
                src={photo9}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo11}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo12}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo14}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo16}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo26}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo3}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo4}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo28}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo29}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo30}
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={photo27}
                alt="2"
              />
            </figure>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
