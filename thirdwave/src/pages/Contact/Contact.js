import React, { useState, useRef } from "react";
import { Helmet } from 'react-helmet';
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import emailjs from '@emailjs/browser';
import "../../sass/pages/_contact.scss";
import barcode from "../../assets/contact.svg";
import { useTranslation } from "react-i18next";
import GoToTop from "../../utils/GoToTop";

const TITLE = 'İletişim | Dt. Mustafa Akyılmaz';

export default function Contact() {
  const { t } = useTranslation();

  const [inputs, setInputs] = useState({
    displayName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'gmail',
      'template_0fcv719',
      form.current,
      'user_RimOnGyUfCEMCL9yCSP74'
    )
      .then((result) => {
        alert('Thank you ' + inputs.displayName + '😊');
      }, (error) => {
        alert(error.text);
      });

    setInputs(
      {
        displayName: "",
        email: "",
        message: "",
      }
    )
  };

  const { displayName, email, message } = inputs;

  return (
    <div id="parent">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <Header />
      <div className="contact">
        <div className="row-1">
          <div className="col-1">
            <div className="contact-form">
              <form ref={form} onSubmit={handleSubmit}>
                <input
                  name="displayName"
                  type="text"
                  className="feedback-input"
                  placeholder={t("contactPage.name")}
                  value={displayName}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="text"
                  required
                  className="feedback-input"
                  placeholder={t("contactPage.email")}
                  value={email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  className="feedback-input-2"
                  placeholder={t("contactPage.message")}
                  value={message}
                  onChange={handleChange}
                />
                <input type="submit" value={t("contactPage.submitBtn")} />
              </form>
            </div>
          </div>
          <div className="col-2">
            <img src={barcode} alt="Whatsapp Qr Code" className="col-2-img" />
          </div>
        </div>
        <div className="row-2">
          <div className="row-2-container">
            <div className="card-1">
              <i class="fa-solid fa-location-dot fa-3x" />
              <div className="card-header">
                <h3>{t("contactPage.addressHeader")}</h3>
              </div>
              <p>{t("contactPage.address1")}</p>
              <p>{t("contactPage.address2")}</p>
            </div>
            <div className="card-2">
              <i class="fa-solid fa-phone fa-3x" />
              <div className="card-header">
                <h3>{t("contactPage.phoneHeader")}</h3>
              </div>
              <p>+90 533 430 03 22</p>
              <p>(0324) 515 21 14</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
}
