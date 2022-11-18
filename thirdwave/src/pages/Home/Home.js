import React from "react";
import "../../sass/pages/_home.scss";
import Header from "../../compenents/Header/Header";

export default function Home() {
  const clickMe = () => {
    alert("hello 3rd wave");
  };

  return (
    <div>
      <Header />
      <div class="left-bg" />
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
  );
}
