import React from 'react';
import { Link } from 'react-router-dom';


import './footer.styles.scss';

const Footer = () => (
    <section className="footer-wrapper">
        <div className="footer-flex">
            <div className="footer-logo">
                <p>logo</p>
            </div>
            <div className="footer-container">
                <div className="footer-navigation">
                    <h5>Heading</h5>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h5>Heading</h5>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Heading</h5>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
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
