import React, { useEffect } from "react";
import Header from "../../compenents/Header/Header";
import "../../sass/pages/_about.scss";
import image from "../../assets/aboutMe.jpeg"
import Footer from "../../compenents/Footer/Footer";
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";

const TITLE = 'Hakkımda | Dt. Mustafa Akyılmaz';

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="parent">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header />
      <div className="about">
        <div className="left-about">
          <h1>{t("aboutPage.header")}</h1>
          <p>{t("aboutPage.whoAmI")}</p>
        </div>
        <div className="right-about"></div>
      </div>
      <Footer />
    </div>
  );
}
