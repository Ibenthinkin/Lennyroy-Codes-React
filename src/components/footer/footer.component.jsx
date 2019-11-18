import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import './footer.styles.scss';
import '../../assets/var.scss'
import '../../assets/global.scss'



const Footer = () => (
    <section className="footer-wrapper">
        <div className="footer-flex">
            <div className="footer-logo">
                <p>logo</p>
            </div>
            <div className="footer-container">
                <div className="footer-navigation">
                    <h5>Lennyroy Codes</h5>
                    <ul>
                        <li>Intro to HTML</li>
                        <li>Intro to CSS</li>
                        <li>Layout</li>
                        <li>HTML Structure</li>
                        <li>CSS Flexbox</li>
                        <li>Responsive Design</li>
                        <li>Review &amp; Final Project</li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h5>Features</h5>
                    <ul>
                        <a href="slides"><li>Slide Library</li></a>
                        <li>Video Library</li>
                        <li>Challenges</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Learn More</h5>
                    <ul>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Portfolio</li>
                        <div>
                        <style dangerouslySetInnerHTML={{__html: ".bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#5c194d !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 14px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}" }} /><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet" /><a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/t9FNaoyvY"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee!" /><span style={{marginLeft: '5px'}}>Buy me a coffee!</span></a>
                        </div>
                    </ul>
                </div>
        </div>

        </div>



        <div className="footer-bottom">
            <small>Copyright 2019 © Lennyroy Codes</small>

        </div>
    </section>
)

export default Footer
