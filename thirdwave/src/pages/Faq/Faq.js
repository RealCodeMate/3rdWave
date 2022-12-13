import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_faq.scss";
import AllQA from "../../compenents/Accordion/AllQA";
import GoToTop from "../../utils/GoToTop";
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";

const TITLE = 'SSS | Dt. Mustafa Akyılmaz';

export default function Faq() {
    const { t } = useTranslation();

    return (
        <div id="parent">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <Header />
            <div className="faq">
                <h1>{t("faqPage.header")}</h1>
                <AllQA />

            </div>

            <Footer />
            <GoToTop />
        </div>
    )
}
