import React from 'react';
import { Carousel } from 'react-bootstrap';
import homeDelivery from "../pictures/home_delivery.jpg"
import onlinePayment from "../pictures/online_payment.png"
import safetyPayment from "../pictures/safety_payment.jpg"
import "./CarouselComponent.css"

function CarouselComponent() {
    return (
        <div>
            <Carousel className='carousel_body'>
                <Carousel.Item className="carousel_item" interval={2000}>
                    <img
                        className="carousel_picture"
                        src={homeDelivery}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carousel_heading'>Free Delivery Service</h3>
                        <p className="carousel_text">Delivery services can operate on a local, regional, or national levels.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel_item" interval={2000}>
                    <img
                        className="carousel_picture"
                        src={onlinePayment}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carousel_heading'>Rich variety of Products </h3>
                        <p className="carousel_text">Different types of products could be found here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel_item" interval={2000}>
                    <img
                        className="carousel_picture"
                        src={safetyPayment}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carousel_heading'> Safe Payment Methods</h3>
                        <p className="carousel_text">Buy and pay online safely without spending too much time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default CarouselComponent;