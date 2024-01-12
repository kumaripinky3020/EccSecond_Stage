import React from "react";
import logo_png from "../images/logo.png"
const Header = () => {
    return (<div>
        {/* <!-------------- Header Type 1 --------------> */}
        <header id="header" className="header header_sticky">
            <div className="container-fluid ct_px_60">
                <div className="header-desk header-desk_type_1">
                    <div className="logo">
                        <a href="index.html">
                            <img src={logo_png} alt="Second Stage" className="logo__image d-block" />
                        </a>
                    </div>
                    <nav className="navigation">
                        <ul className="navigation__list list-unstyled d-flex" />

                        <div className="ct_close_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </div>

                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Home</a>
                            <div className="box-menu" style={{width: "400px"}}>
                                {/* <!-- <div className="col pe-4"> --> */}
                                <ul className="sub-menu__list list-unstyled">
                                    <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Browse – Colours</a></li>
                                    <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Featured Bikinis</a></li>
                                    <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Summary of Concept </a></li>
                                    <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Buy/Rent</a></li>
                                    <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Sell/Lease </a></li>
                                </ul>
                                {/* <!-- </div> --> */}
                            </div>
                            {/* <!-- /.box-menu --> */}
                        </li>

                        <li className="navigation__item">
                            <a href="javascript:void" className="navigation__link">Pages</a>
                            <ul className="default-menu list-unstyled">
                                <li className="sub-menu__item"><a href="about.html" className="menu-link menu-link_us-s">About us</a></li>
                                <li className="sub-menu__item"><a href="how-it-works.html" className="menu-link menu-link_us-s">How it Works</a>
                                </li>
                                <li className="sub-menu__item"><a href="contact.html" className="menu-link menu-link_us-s">Contact Us</a></li>
                                <li className="sub-menu__item"><a href="faq.html" className="menu-link menu-link_us-s">FAQ</a></li>
                                {/* <!-- <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Register</a></li> -->
                                    <!-- <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Social Media (Instagram)</a></li> --> */}
                                <li className="sub-menu__item ct_submenu_inner_main"><a href="#"
                                    className="menu-link menu-link_us-s">Technical/Legal</a>
                                    <ul className="ct_submenu_inner">
                                        <li className="sub-menu__item" /><a href="privacy.html" className="menu-link menu-link_us-s">Privacy
                                            Policy</a>
                                        <li className="sub-menu__item"><a href="terms.html" className="menu-link menu-link_us-s">Terms and
                                            Conditions</a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                    </nav>

                </div>
            </div>
        </header>
        {/* <!------------ End Header Type 1 ------------> */}

    </div>)
}
export default Header;