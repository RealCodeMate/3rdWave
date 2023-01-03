import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_gallery.scss";
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";


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
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/profile-1.jpg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/23.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/24.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/25.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/2.jpeg"
                alt="2"
              />
            </figure>
          </li>

          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/9.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/11-min.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/12-min.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/14-min.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/16-min.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/26.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/certificates.jpg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/3-min.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/4-min.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/28.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/29.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/30.jpeg"
                alt="2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/27.jpg"
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
