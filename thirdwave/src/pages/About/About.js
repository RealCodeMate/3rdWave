import React, { useEffect } from "react";
import Header from "../../compenents/Header/Header";
import "../../sass/pages/_about.scss";
import image from "../../assets/aboutMe.jpeg"
import Footer from "../../compenents/Footer/Footer";

export default function About() {
  return (
    <div id="parent">
      <Header />
      <div className="about">
        <div className="left-about">
          <h1>Diş hekimi Mustafa Akyılmaz kimdir ? </h1>
          <p>1975 Mersin doğumluyum. İlk ve ortaoğretimi Mersin'de okudum. 1993 yılında Özel Toros Koleji'nden mezun oldum ve
            Gazi Üniversitesi Diş Hekimligi Fakültesi’ni kazandım. 1999 yılında fakültemi bitirerek askeri görevimi yaptım.
            2000 yılından itibaren aktif olarak Erdemli'deki muayenehanemde çalışmaktayım. Evli ve 3 kız çocuk babasıyım.
          </p>
        </div>
        <div className="right-about">
          <img src={image} alt="img" className="aboutmeImage" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
