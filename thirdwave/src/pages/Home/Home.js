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
    </div>
  );
}
