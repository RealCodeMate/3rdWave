import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import "../../sass/pages/_tedaviler.scss";
import image1 from "../../assets/home.jpg";
import image2 from "../../assets/home2.jpg";

export default function Tedaviler() {
  return (
    <div id="parent">
      <Header />
      <section id="cases" className="flex-grid">
        <header class="section-header">
          <h4>This is what we do</h4>
          <h2>
            <span>Business</span> Cases
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            exercitationem!
          </p>
        </header>
        <div className="flex-img">
          <div className="container">
            <div className="row-1">
              <div className="column-1"></div>
              <div className="column-2"></div>
              <div className="column-3"></div>
              <div className="column-4"></div>
            </div>
            <div className="row-2">
              <div className="column-5"></div>
              <div className="column-6"></div>
              <div className="column-7"></div>
              <div className="column-9"></div>
            </div>
            <div className="row-3">
              <div className="column-10"></div>
              <div className="column-11"></div>
              <div className="column-12"></div>
              <div className="column-13"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
