import React from "react";
import './Footer.css'

export function Footer() {
    return (
        <>
            <footer className="footer text-white">
                <div className="footer-left">
                    <span className="footer-hyperlink">2024 © <a href="https://google.com" target="_blank">google.com</a> | All Rights Reserved.</span>
                </div>
                <div className="footer-right">
                    <a href="#">Disclaimer</a>
                    <a href="#">Join Our Group !</a>
                    <a href="#">How To Download ?</a>
                    <a href="#">page Request Page</a>
                </div>
            </footer>
        </>
    )
}