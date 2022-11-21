import Carousel from 'react-bootstrap/Carousel';
import messi from "../../assets/home2.jpg";
import "../../sass/components/_carousel.scss";


function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark" className="container-carousel" >
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={messi}
          alt="First slide"
        />
        <Carousel.Caption className="carosuel-content">
          <h3>First</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={messi}
          alt="Second slide"
        />
        <Carousel.Caption className="carosuel-content">
          <h3>Second</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={messi}
          alt="Third slide"
        />
        <Carousel.Caption className="carosuel-content">
          <h3>Third</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;