import React from 'react';
import './Slider.css';
import image from '../../assets/pngwing.com.png';
import { BsArrowRight } from 'react-icons/bs';

import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    // <Carousel variant="dark">
    //   <Carousel.Item key={1}>
    //     <div className="carousel-text">
    //       <h1 className="brandname">Brand</h1>
    //       <h4>Mens Collection</h4>
    //       <p>first carousel</p>
    //       <button className="carousel-button">
    //         Shop Now <BsArrowRight />
    //       </button>
    //     </div>
    //     <img
    //       className="d-block w-100 carousel-image"
    //       src={image}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="carousel-text">
    //       <h1 className="brandname">Brand</h1>
    //       <h4>Mens Collection</h4>
    //       <p>first carousel</p>
    //       <button className="carousel-button">
    //         Shop Now <BsArrowRight />
    //       </button>
    //     </div>
    //     <img
    //       className="d-block w-100 carousel-image"
    //       src={image}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="carousel-text">
    //       <h1 className="brandname">Brand</h1>
    //       <h4>Mens Collection</h4>
    //       <p>first carousel</p>
    //       <button className="carousel-button">
    //         Shop Now <BsArrowRight />
    //       </button>
    //     </div>
    //     <img
    //       className="d-block w-100 carousel-image"
    //       src={image}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="carousel-text">
    //       <h1 className="brandname">Brand</h1>
    //       <h4>Mens Collection</h4>
    //       <p>first carousel</p>
    //       <button className="carousel-button">
    //         Shop Now <BsArrowRight />
    //       </button>
    //     </div>
    //     <img
    //       className="d-block w-100 carousel-image"
    //       src={image}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="carousel-text">
    //       <h1 className="brandname">Brand</h1>
    //       <h4>Mens Collection</h4>
    //       <p>first carousel</p>
    //       <button className="carousel-button">
    //         Shop Now <BsArrowRight />
    //       </button>
    //     </div>
    //     <img
    //       className="d-block w-100 carousel-image"
    //       src={image}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    // </Carousel>
    <Carousel variant="dark">
      <Carousel.Item bsClass="carousel-item">
        <Carousel.Caption bsClass="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>first carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </Carousel.Caption>
        <img
          className="d-block w-50 carousel-img"
          src={image}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item bsClass="carousel-item">
        <Carousel.Caption bsClass="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>first carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </Carousel.Caption>
        <img
          className="d-block w-50 carousel-img"
          src={image}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item bsClass="carousel-item">
        <Carousel.Caption bsClass="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>first carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </Carousel.Caption>
        <img
          className="d-block w-50 carousel-img"
          src={image}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
