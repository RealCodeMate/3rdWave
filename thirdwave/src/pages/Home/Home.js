import React from "react";
import "./style.css";
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
          <div>
            <h1>
              Welcome to <br />{" "}
              <span className="wave-header" onClick={() => clickMe()}>
                3rd Wave
              </span>
            </h1>
            <h1>...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
