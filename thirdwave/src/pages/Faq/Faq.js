import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_faq.scss";
import AllQA from "../../compenents/Accordion/AllQA";
import GoToTop from "../../utils/GoToTop";

export default function Faq() {
    return (
        <div id="parent">

            <Header />
            <div className="faq">
                <h1>Sıkça Sorulan Sorular</h1>
                <AllQA />

            </div>

            <Footer />
            <GoToTop />
        </div>
    )
}
