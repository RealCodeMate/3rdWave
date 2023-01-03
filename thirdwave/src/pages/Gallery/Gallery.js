import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_gallery.scss";
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";
import GoToTop from "../../utils/GoToTop";


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
                alt="Image 1"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/23.jpeg"
                alt="Image 2"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/24.jpeg"
                alt="Image 3"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/25.jpeg"
                alt="Image 4"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/2.jpeg"
                alt="Image 5"
              />
            </figure>
          </li>

          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/9.jpeg"
                alt="Image 6"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/11-min.jpeg"
                alt="Image 7"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/12-min.jpeg"
                alt="Image 8"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/14-min.jpeg"
                alt="Image 9"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/16-min.jpeg"
                alt="Image 10"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/26.jpeg"
                alt="Image 11"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/certificates.jpg"
                alt="Image 12"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/3-min.jpeg"
                alt="Image 13"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/4-min.jpeg"
                alt="Image 14"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/28.jpeg"
                alt="Image 15"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/29.jpeg"
                alt="Image 16"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/30.jpeg"
                alt="Image 17"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/27.jpg"
                alt="Image 18"
              />
            </figure>
          </li>
        </ul>
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}
