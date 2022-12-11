import React, { useEffect } from "react";
import Header from "../../compenents/Header/Header";
import "../../sass/pages/_about.scss";
import image from "../../assets/aboutMe.jpeg"
import Footer from "../../compenents/Footer/Footer";
import { Helmet } from 'react-helmet';

const TITLE = 'Hakkımda | Dt. Mustafa Akyılmaz';

export default function About() {
  return (
    <div id="parent">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header />
      <div className="about">
        <div className="left-about">
          <h1>Diş hekimi Mustafa Akyılmaz kimdir ? </h1>
          <p>1975 Mersin doğumluyum. İlk ve ortaoğretimi Mersin'de okudum. 1993 yılında Özel Toros Koleji'nden mezun oldum ve
            Gazi Üniversitesi Diş Hekimligi Fakültesi’ni kazandım. 1999 yılında fakültemi bitirerek askeri görevimi yaptım.
            2000 yılından itibaren aktif olarak Erdemli'deki muayenehanemde çalışmaktayım. Evli ve 3 kız çocuk babasıyım.
          </p>
        </div>
        <div className="right-about"></div>
      </div>
      <Footer />
    </div>
  );
}
