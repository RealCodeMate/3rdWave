import Carousel from "react-bootstrap/Carousel";
import messi from "../../assets/15.jpeg";
import ronaldo from "../../assets/17.jpeg";
import jarzinho from "../../assets/7.jpg";
import "../../sass/components/_carousel.scss";

function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark" className="container-carousel">
      <Carousel.Item interval={5000}>
        <img className="d-block" src={ronaldo} alt="First slide" />
        <Carousel.Caption className="carosuel-content"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block" src={messi} alt="First slide" />
        <Carousel.Caption className="carosuel-content"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block" src={jarzinho} alt="First slide" />
        <Carousel.Caption className="carosuel-content"></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
