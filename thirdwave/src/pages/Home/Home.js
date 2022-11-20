import React from "react";
import "../../sass/pages/_home.scss";
import "../../sass/components/_accordion.scss";
import Header from "../../compenents/Header/Header";
import { accordionData } from "../../utils/content";
import Accordion from "../../compenents/Accordion/Accordion";

export default function Home() {
  const clickMe = () => {
    alert("hello 3rd wave");
  };

  return (
    <div>
      <Header />

      <div id="home">
        <div className="left-bg" />
        <div className="right-bg">
          <div className="main-info">
            <h1>
              Welcome To <br />
              Your Goal In <br />
              <span className="life-header">Real</span> Life.
              <br />
            </h1>
            <br />
            <span className="wave-header" onClick={() => clickMe()}>
              3rd Wave
            </span>
          </div>
        </div>
      </div>

      <div className="section-a">
        <h1>
          If you want to enjoy moments
          <br /> with passion and persistence, <br />
          you are in right place.
        </h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      <div className="section-b">
        <h1>
          If you want to enjoy moments with passion and persistence, you are in
          right place.
        </h1>
      </div>
    </div>
  );
}
