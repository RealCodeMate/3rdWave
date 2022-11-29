import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


import "../../sass/components/_footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">

        <a href="#">İletişim</a>
        <div className="footer-top-icons">
          <FontAwesomeIcon icon={faTwitter} className="twitterLogo" onClick={() => window.open("https://github.com/bayogluteoman", "_blank")} />
          <FontAwesomeIcon icon={faFacebook} className="facebookLogo" onClick={() => window.open("https://tr-tr.facebook.com/mustafa.akyilmaz", "_blank")} />
          <FontAwesomeIcon icon={faInstagram} className="instagramLogo" onClick={() => window.open("https://www.instagram.com/makyilmaz33/", "_blank")} />
        </div>
        <p>Copyright © 3rdWave 2022. Tüm hakları saklıdır.</p>

      </div>
    </div>
  );
}
