import Carousel from "react-bootstrap/Carousel";
import "../../sass/components/_carousel.scss";

function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark" className="container-carousel">
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/17.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className="carosuel-content"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/15.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption className="carosuel-content"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          src="https://raw.githubusercontent.com/RealCodeMate/3rdWave/main/thirdwave/src/assets/7.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="carosuel-content"></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
