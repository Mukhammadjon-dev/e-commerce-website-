import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><a href="#"><i className="fa fa-map-marker"> </i> Amir Temur 60A, 100000<br />
                                &emsp;Tashkent City, Uzbekistan</a></li>
                            <li><a href="#"><i className="fa fa-phone"> </i> +998 99 545 61 42<br />
                                &emsp; +998 94 280 61 42</a></li>
                            {/* <li><a href="#">+998 94 280 61 42</a></li> */}
                            <li><a href="#"><i className="fa fa-envelope"> </i> super.shop@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className='row mt-5 text-center'>
                    <p className='footer_text'>
                        Made with&emsp;<i className="fa fa-heart orange"></i>&emsp;by &emsp;<span className='orange'>Mukhammadjon Nazarov</span>&emsp;in 2022.
                    </p>
                </div>
            </div>
        </footer>
    )
}
