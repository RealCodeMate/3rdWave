import React from "react";
import "../../sass/pages/_home.scss";
import "../../sass/components/_accordion.scss";
// import "../../sass/components/_carousel.scss";
import Header from "../../compenents/Header/Header";
import MyAccordion from "../../compenents/Accordion/MyAccordion";
import CarouselHome from "../../compenents/Carousel/CarouselHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import messi from "../../assets/home2.jpg";
import Footer from "../../compenents/Footer/Footer";

export default function Home() {
  const clickMe = () => {
    alert("hello 3rd wave");
  };

  return (
    <div id="parent">
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

        <MyAccordion />
      </div>
      <div className="section-b">
        <div className="section-b-main">
          <Container>
            <Row>
              <Col sm>
                <h1>Even more great stuff</h1>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <h1>Even more</h1>
              </Col>
              <Col sm>
                <h1>great </h1>
              </Col>
              <Col sm>
                <h1> stuff</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="section-c">
        <div className="section-c-main">
          <Container className="container-c">
            <Row>
              <Col sm>
                <img src={messi} alt="img" className="section-c-main-img"></img>
              </Col>
              <Col sm>
                <h1>Even more great stuff</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis laborum animi non ut, ratione eos id? Dolore
                  repellendus illum facilis et dolorum officiis totam similique
                  consequuntur, magni nobis obcaecati voluptatibus!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="section-d">
        <div className="section-d-slide">
          <h1>Photo Gallery</h1>
          <p>
            Your <span className="life-header">eyes</span> can't lie. Just look
            at this.
          </p>
          <CarouselHome />
        </div>
      </div>
      <div className="section-e">
        <Container>
          <Row>
            <Col sm>
              <div className="section-e-head">
                <h3>Even more great stuff</h3>
                <h1>Some words from our 1400+ customers.</h1>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="section-e-rate">
              <div>
                <h1>5.0</h1>
                <p>out of 5</p>
              </div>
              <p className="section-e-star">⭐⭐⭐⭐⭐</p>
            </Col>
            <Col sm={8}>
              <p className="section-e-paragraph">
                "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Modi
                ullam in distinctio placeat, repellendus similique quod illo
                alias enim, asperiores veritatis, repudiandae."{" "}
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={4} className="section-e-rate">
              <div>
                <h1>4.0</h1>
                <p>out of 5</p>
              </div>
              <p className="section-e-star">⭐⭐⭐⭐</p>
            </Col>
            <Col sm={8}>
              <p className="section-e-paragraph">
                "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Modi
                ullam in distinctio placeat, repellendus similique quod illo
                alias enim, asperiores veritatis, repudiandae."{" "}
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={4} className="section-e-rate">
              <div>
                <h1>3.0</h1>
                <p>out of 5</p>
              </div>
              <p className="section-e-star">⭐⭐⭐</p>
            </Col>
            <Col sm={8}>
              <p className="section-e-paragraph">
                "Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Modi
                ullam in distinctio placeat, repellendus similique quod illo
                alias enim, asperiores veritatis, repudiandae."{" "}
              </p>
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
      <div className="section-f">
        <Container className="section-f-container">
          <Row>
            <Col sm={4}>
              <h1 className="section-f-container-price"><span>$</span>9.99</h1>
            </Col>
            <Col sm={8}>
              <h1>
                One year access to all designs listed on this page and all our
                templates.
              </h1>
            </Col>
            <Col sm={{ span: 8, offset: 4 }}>
              <Row>
                <Col sm={{ span: 12 }}>
                  <Row className="price-content-1">
                    <Col>
                    <div className="price-content-tick">
                      <h5>✔</h5>
                      <h4> Variable and OpenType fonts</h4>
                      </div>
                    </Col>
                    <Col>
                    <div className="price-content-tick">
                      <h5>✔</h5>
                      <h4> Pixel-level precision</h4>
                      </div>
                    </Col>
                  </Row>
                  <Row className="price-content-1">
                    <Col>
                    <div className="price-content-tick">
                      <h5>✔</h5>
                      <h4> Multi-team management</h4>
                      </div>
                    </Col>
                    <Col>
                    <div className="price-content-tick">
                      <h5>✔</h5>
                      <h4> Reusable components</h4>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
               <div className="btn-display">
                 <a className="section-f-btn">Buy Now</a>
               </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}
