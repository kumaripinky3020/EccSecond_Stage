import React from "react";
import logo_png from "../images/logo.png"
import payment_options_png from "../images/payment-options.png"

const Footer = () => {
    return (<div>
        {/* <!-------------- Footer Type 1 --------------> */}
        <footer class="footer footer_type_1">

            <div class="footer-middle container">
                <div class="block-newsletter pb-5 mb-5">
                    {/* <!-- <h3 class="block__title">Subscribe to our newsletter</h3>
        <p>Be the first to get the latest news about trends, promotions, and much more!</p> --> */}
                    <form action="" class="block-newsletter__form">
                        <input class="form-control" type="text" name="text" placeholder="Search" />
                        <button class="btn btn-secondary fw-medium" type="submit">Search</button>
                    </form>
                </div>
                <div class="row row-cols-lg-5 row-cols-2">
                    <div class="footer-column footer-store-info mb-4 mb-lg-0">
                        <div class="logo">
                            <a href="index.html">
                                <img src={logo_png} alt="Second Stage" class="logo__image d-block" />
                            </a>
                        </div>
                        {/* <!-- /.logo --> */}
                        <p class="footer-address">1418 xyx, CA 9622 United States</p>

                        <p class="m-0">
                            <strong class="fw-medium"><a href="mailto:Support@secondstagebikini.com">Support@secondstagebikini.com</a></strong>
                        </p>
                        <p class="m-0">
                            <strong class="fw-medium"><a href="mailto:Cley@secondstagebikini.com">Cley@secondstagebikini.com</a></strong>
                        </p>
                        <p>
                            <strong class="fw-medium">+1 246-345-0695</strong>
                        </p>

                        <ul class="social-links list-unstyled d-flex flex-wrap mb-0">
                            <li>
                                <a href="#" class="footer__social-link d-block">
                                    <svg class="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer__social-link d-block">
                                    <svg class="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer__social-link d-block">
                                    <svg class="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer__social-link d-block">
                                    <svg class="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer__social-link d-block">
                                    <svg class="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.footer-column --> */}

                    <div class="footer-column footer-menu mb-4 mb-lg-0">
                        <h5 class="sub-menu__title text-uppercase">Company</h5>
                        <ul class="sub-menu__list list-unstyled">
                            <li class="sub-menu__item"><a href="about.html" class="menu-link menu-link_us-s">About Us</a></li>
                            <li class="sub-menu__item"><a href="faq.html" class="menu-link menu-link_us-s">FAQ</a></li>
                            <li class="sub-menu__item"><a href="terms.html" class="menu-link menu-link_us-s">Terms and Conditions</a></li>
                            <li class="sub-menu__item"><a href="contact.html" class="menu-link menu-link_us-s">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* <!-- /.footer-column --> */}
                    <div class="footer-column footer-menu mb-4 mb-lg-0">
                        <h5 class="sub-menu__title text-uppercase">Shop</h5>
                        <ul class="sub-menu__list list-unstyled">
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Bikini</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Shop</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Swimwear</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Themewear</a></li>
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Other</a></li>
                        </ul>
                    </div>
                    {/* <!-- /.footer-column --> */}
                    <div class="footer-column footer-menu mb-4 mb-lg-0">
                        <h5 class="sub-menu__title text-uppercase">Help</h5>
                        <ul class="sub-menu__list list-unstyled">
                            <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Customer Service</a></li>
                            <li class="sub-menu__item"><a href="account_dashboard.html" class="menu-link menu-link_us-s">My Account</a></li>
                            <li class="sub-menu__item"><a href="privacy.html" class="menu-link menu-link_us-s">Legal & Privacy</a></li>
                            {/* <!-- <li class="sub-menu__item"><a href="#" class="menu-link menu-link_us-s">Contact</a></li> --> */}
                        </ul>
                    </div>
                    {/* <!-- /.footer-column --> */}
                    <div class="footer-column footer-newsletter mb-4 mb-lg-0">
                        <h5 class="sub-menu__title text-uppercase">Newsletter</h5>
                        <p>Be the first to get the latest news about trends, promotions, and much more!</p>
                        <form action="#" class="footer-newsletter__form position-relative bg-body">
                            <input class="form-control border-white" type="email" name="email" placeholder="Your email address" />
                            <input class="btn-link fw-medium bg-white position-absolute top-0 end-0 h-100" type="submit" value="JOIN" />
                        </form>

                        <div class="mt-4 pt-3">
                            <strong class="fw-medium">Secure payments</strong>
                            <p class="mt-2">
                                <img loading="lazy" src={payment_options_png} alt="Acceptable payment gateways" class="mw-100" />
                            </p>
                        </div>
                    </div>
                    {/* <!-- /.footer-column --> */}
                </div>
                {/* <!-- /.row-cols-5 --> */}
            </div>
            {/* <!-- /.footer-middle container --> */}

            <div class="footer-bottom container">
                <div class="d-block d-md-flex align-items-center">
                    <span class="footer-copyright mx-auto">©2024 Second Stage</span>

                </div>
            </div>
        </footer>
        {/* <!------------ End Footer Type 1 ------------> */}
    </div>)
}
export default Footer;