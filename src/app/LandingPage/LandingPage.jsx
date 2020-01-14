import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <div className="landing-page">
            <div className="landing-page__logo">
                <svg className="--svgBottle" viewBox="0 0 369.73 90.2">
                    <path className="cls-1" d="M254.64,90.05l13.9-25.3a17.16,17.16,0,0,0-12.5-5.6c-7.9,0-14.3,6.7-14.3,6.7Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-1" d="M291,107.85l-14.6,26.8s7.5,14.4,20.7,14.4,18.9-10.8,29.3-30.8S345,78,348.94,77.55s8.6,20,15.4,23.9,5.7-1.1,5-6.1-7.5-36.3-28.6-36.3-23.9,20.2-29.6,32.7-11.4,28.9-13.9,28.9S291,107.85,291,107.85Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-2" d="M203.34,104.15c-2.6,5.6-4.8,10.7-6.8,15.2,0,0-14.3-28.9-20-41.1s-11.1-19.2-21.8-19.2H136s30.8,57.7,38.6,72,12.2,18,21.5,18,14.3-6.5,20.7-17.9Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-2" d="M290.74,59.15c-10.7,0-16.1,7-21.8,19.2s-20,41.1-20,41.1-15.7-33.9-22.5-45.7-15-14.4-18.9-14.6a16,16,0,0,0-8,1.6c-3.5,1.7-6.8,6.5-6.8,6.5s5.5,11,11.6,21.2c3.7,6.2,7.1,13.2,16.4,31.4s16.4,29.4,26.8,29.4,15.4-3.7,23.2-18,33.9-63.9,33.9-63.9S301.44,59.15,290.74,59.15Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-3" d="M151.54,127.55c-6.6-12-28.2-53.9-35.1-67.3-18.2,2.8-22.1,10.3-25,16.4-3.6,7.6-1,14.4-25.7,14.4H19.14v-1.9h-9V91c-8.6-.1-10,1-10,13.1s1.4,13.2,10,13.2v1.8h9.1v-1.9h46.6c24.8,0,22.1,6.7,25.7,14.4s8.8,17.5,42.1,17.5h30.3C159.24,141.45,154.74,133.35,151.54,127.55Z" transform="translate(-0.14 -59.05)"/>
                </svg>

                <svg className="--svgWords" viewBox="0 0 368.62 108.18">
                    <path d="M26.1,72.6A10.83,10.83,0,0,0,19.8,75a33.67,33.67,0,0,0-6.2,5.8A41,41,0,0,0,8.8,88a14.93,14.93,0,0,0-1.9,6.7A4.12,4.12,0,0,0,7,95.9c.1.3.1.6.3.8v-.1A5.79,5.79,0,0,1,8,98.7a5.41,5.41,0,0,1-.3,1.9,3.59,3.59,0,0,1-1,1.4,1.87,1.87,0,0,1-1.4.5,3,3,0,0,1-2-.9,5.62,5.62,0,0,1-1.4-3.2,14,14,0,0,1,.4-6A31.34,31.34,0,0,1,5,85.7a37.94,37.94,0,0,1,4.5-6.5,51.12,51.12,0,0,1,5.7-5.7,27.26,27.26,0,0,1,6.4-4A15.83,15.83,0,0,1,28.2,68a10.36,10.36,0,0,1,6,1.7,12.27,12.27,0,0,1,3.9,4.5,19.72,19.72,0,0,1,2.1,6.2,40.49,40.49,0,0,1,.6,7,74.59,74.59,0,0,1-.4,7.9c-.3,2.8-.7,5.7-1.2,8.6s-1,5.8-1.6,8.6-1.1,5.6-1.6,8.1q-1.2,5.7-2.1,10.5a42.75,42.75,0,0,0-.9,7.3c0,1.5.3,2.3.9,2.5,1.1-.4,2.4-1.8,4-4s3.3-5,5.1-8.1,3.6-6.5,5.4-10.1,3.4-6.9,4.9-10c1.1-2.3,2.1-4.3,3-6.1s1.8-3.3,2.5-4.5v.1a11.17,11.17,0,0,1,2.7-3.5,4.53,4.53,0,0,1,2.7-1.2A2.86,2.86,0,0,1,66.7,95a7.54,7.54,0,0,1,1,4.4c-.1,5.6-.3,11-.7,16.3s-.5,10.9-.5,16.8c0,2.9.1,5.5.2,8a55.82,55.82,0,0,0,.7,6.6,20.37,20.37,0,0,0,1.4,4.7,4.14,4.14,0,0,0,2.2,2.3q1.65.45,3.6-2.1a37.39,37.39,0,0,0,4.1-7.2c1.5-3.1,2.9-6.8,4.5-11.1s3-8.8,4.4-13.7,2.7-9.8,4-15,2.3-10.1,3.3-15,1.6-9.4,2.2-13.7a99.48,99.48,0,0,0,.8-11.1,24,24,0,0,0-.6-5.8,4.58,4.58,0,0,0-2.1-3.1,1,1,0,0,1-.4-1.3,3.91,3.91,0,0,1,1-1.6,5.72,5.72,0,0,1,1.6-1.1,1.79,1.79,0,0,1,1.6.1c1.1.8,1.9,2.4,2.5,4.7a34.6,34.6,0,0,1,.9,8.5,115,115,0,0,1-1,14.4c-.7,5.5-1.6,11.3-2.8,17.3s-2.6,12.1-4.2,18.3-3.4,11.9-5.3,17.3a125.36,125.36,0,0,1-6,14.4,43.12,43.12,0,0,1-6.2,9.6,13.14,13.14,0,0,1-3.4,2.4,11.22,11.22,0,0,1-4,1,12,12,0,0,1-4.2-.4,12.7,12.7,0,0,1-4-1.7,13.81,13.81,0,0,1-5.5-7.8,38.07,38.07,0,0,1-1.6-11.5,85.33,85.33,0,0,1,1.5-15.8c1-5.3,2-10.1,3.2-14.3-1.7,3.5-3.7,7.4-5.8,11.6s-4.3,8.3-6.6,12a75.32,75.32,0,0,1-6.7,9.6c-2.2,2.6-4.2,4-6.1,4.3a6.17,6.17,0,0,1-3.7-.8,7,7,0,0,1-2.4-3.1,17.47,17.47,0,0,1-1.2-5,63,63,0,0,1-.4-6.5,104.75,104.75,0,0,1,.7-12.5c.5-4.2,1-8.3,1.6-12.5s1.1-8.3,1.6-12.5a106.93,106.93,0,0,0,.7-12.7c0-1.1,0-2.1-.1-3.1a10.71,10.71,0,0,0-.6-2.7A4.31,4.31,0,0,0,28.6,73,8.72,8.72,0,0,0,26.1,72.6Z" transform="translate(-1.74 -52.16)"/>
                    <path d="M110.3,113.7a5.62,5.62,0,0,0-.3,2,9.08,9.08,0,0,0,.3,2.3,4.35,4.35,0,0,0,1,1.9,2.79,2.79,0,0,0,2,.8,14.52,14.52,0,0,0,6.4-1.8,54.27,54.27,0,0,0,6.8-4.2,59.24,59.24,0,0,0,5.8-4.8c1.7-1.6,2.9-2.8,3.7-3.6a2.88,2.88,0,0,1,1.6-1.1,1.29,1.29,0,0,1,1.2.4,1.58,1.58,0,0,1,.2,1.4,5.05,5.05,0,0,1-1.1,2c-1.4,1.5-3.2,3.3-5.2,5.3a61.47,61.47,0,0,1-6.6,5.7,39.92,39.92,0,0,1-7.3,4.5,16.56,16.56,0,0,1-7.1,1.8,7.24,7.24,0,0,1-3.7-.9,7.81,7.81,0,0,1-2.7-2.4,11.86,11.86,0,0,1-1.6-3.4,13.31,13.31,0,0,1-.5-4,21.8,21.8,0,0,1,1.2-6.9,21.45,21.45,0,0,1,3.5-6.5,17.67,17.67,0,0,1,5.5-4.7,12.85,12.85,0,0,1,7.3-1.5,5.51,5.51,0,0,1,4.2,1.8,6.48,6.48,0,0,1,1.3,4.1,12.52,12.52,0,0,1-4.2,8.7,14.33,14.33,0,0,1-5,2.9A16.43,16.43,0,0,1,110.3,113.7Zm8.9-9.2a5.67,5.67,0,0,0-4.1,1.5,15.17,15.17,0,0,0-3.2,3.9,9.69,9.69,0,0,0,3.4,0,6.83,6.83,0,0,0,4.3-2.8,3.19,3.19,0,0,0,.6-1.7C120.2,104.9,120,104.6,119.2,104.5Z" transform="translate(-1.74 -52.16)"/>
                    <path d="M185.5,72.6a10.83,10.83,0,0,0-6.3,2.4,33.67,33.67,0,0,0-6.2,5.8,41,41,0,0,0-4.8,7.2,14.93,14.93,0,0,0-1.9,6.7,4.12,4.12,0,0,0,.1,1.2c.1.3.1.6.3.8v-.1a5.79,5.79,0,0,1,.7,2.1,5.41,5.41,0,0,1-.3,1.9,3.59,3.59,0,0,1-1,1.4,1.87,1.87,0,0,1-1.4.5,3,3,0,0,1-2-.9,5.62,5.62,0,0,1-1.4-3.2,14,14,0,0,1,.4-6,31.34,31.34,0,0,1,2.7-6.7,37.94,37.94,0,0,1,4.5-6.5,51.12,51.12,0,0,1,5.7-5.7,27.26,27.26,0,0,1,6.4-4,15.83,15.83,0,0,1,6.6-1.5,10.36,10.36,0,0,1,6,1.7,12.27,12.27,0,0,1,3.9,4.5,19.72,19.72,0,0,1,2.1,6.2,40.49,40.49,0,0,1,.6,7,74.59,74.59,0,0,1-.4,7.9c-.3,2.8-.7,5.7-1.2,8.6s-1,5.8-1.6,8.6-1.1,5.6-1.6,8.1q-1.2,5.7-2.1,10.5a42.75,42.75,0,0,0-.9,7.3c0,1.5.3,2.3.9,2.5,1.1-.4,2.4-1.8,4-4s3.3-5,5.1-8.1,3.6-6.5,5.4-10.1,3.4-6.9,4.9-10c1.1-2.3,2.1-4.3,3-6.1s1.8-3.3,2.5-4.5v.1a11.17,11.17,0,0,1,2.7-3.5,4.53,4.53,0,0,1,2.7-1.2,2.86,2.86,0,0,1,2.5,1.5,7.54,7.54,0,0,1,1,4.4c-.1,5.6-.3,11-.7,16.3s-.5,10.9-.5,16.8c0,2.9.1,5.5.2,8a55.82,55.82,0,0,0,.7,6.6,20.37,20.37,0,0,0,1.4,4.7,4.14,4.14,0,0,0,2.2,2.3q1.65.45,3.6-2.1a37.39,37.39,0,0,0,4.1-7.2c1.5-3.1,2.9-6.8,4.5-11.1s3-8.8,4.4-13.7,2.7-9.8,4-15,2.3-10.1,3.3-15,1.6-9.4,2.2-13.7a99.48,99.48,0,0,0,.8-11.1,24,24,0,0,0-.6-5.8,4.58,4.58,0,0,0-2.1-3.1,1,1,0,0,1-.4-1.3,3.91,3.91,0,0,1,1-1.6,5.72,5.72,0,0,1,1.6-1.1,1.79,1.79,0,0,1,1.6.1c1.1.8,1.9,2.4,2.5,4.7a34.6,34.6,0,0,1,.9,8.5,115,115,0,0,1-1,14.4c-.7,5.5-1.6,11.3-2.8,17.3s-2.6,12.1-4.2,18.3-3.4,11.9-5.3,17.3a125.36,125.36,0,0,1-6,14.4,43.12,43.12,0,0,1-6.2,9.6,13.14,13.14,0,0,1-3.4,2.4,11.22,11.22,0,0,1-4,1,12,12,0,0,1-4.2-.4,12.7,12.7,0,0,1-4-1.7,13.81,13.81,0,0,1-5.5-7.8,38.07,38.07,0,0,1-1.6-11.5,85.33,85.33,0,0,1,1.5-15.8c1-5.3,2-10.1,3.2-14.3-1.7,3.5-3.7,7.4-5.8,11.6s-4.3,8.3-6.6,12a75.32,75.32,0,0,1-6.7,9.6c-2.2,2.6-4.2,4-6.1,4.3a6.17,6.17,0,0,1-3.7-.8,7,7,0,0,1-2.4-3.1,17.47,17.47,0,0,1-1.2-5,63,63,0,0,1-.4-6.5,104.75,104.75,0,0,1,.7-12.5c.5-4.2,1-8.3,1.6-12.5s1.1-8.3,1.6-12.5a106.93,106.93,0,0,0,.7-12.7c0-1.1,0-2.1-.1-3.1a10.71,10.71,0,0,0-.6-2.7A4.31,4.31,0,0,0,188,73,9.35,9.35,0,0,0,185.5,72.6Z" transform="translate(-1.74 -52.16)"/>
                    <path d="M323.6,114.5c1.2.4,3-.1,5.6-1.4a45.08,45.08,0,0,0,8.9-7c.6-.6,1.1-.9,1.6-.8a1.15,1.15,0,0,1,1.1.6,2.1,2.1,0,0,1,.2,1.4,3.29,3.29,0,0,1-1,1.8c-1.4,1.5-2.9,2.9-4.3,4.2s-2.9,2.5-4.4,3.6a26.9,26.9,0,0,1-4.3,2.4,10.92,10.92,0,0,1-4.3.8,7.14,7.14,0,0,1-4.1-1.3,6.67,6.67,0,0,1-2.3-2.7,19.57,19.57,0,0,1-1.2-3.4c-.2-1.2-.4-2.3-.6-3.4-.4.1-.9.6-1.8,1.6s-1.7,2.3-2.7,3.8a42.55,42.55,0,0,0-2.7,4.6,17.57,17.57,0,0,0-1.8,4.2,4.47,4.47,0,0,1-1.6,2.4,3.48,3.48,0,0,1-2.2.9,2.36,2.36,0,0,1-1.9-.8,2.8,2.8,0,0,1-.5-2.5c0-.2.1-.8.2-1.9s.3-2.4.4-4,.3-3.3.4-5,.2-3.5.2-5a23.64,23.64,0,0,0-.2-4c-.1-1.1-.4-1.7-.8-1.9s-1.4.2-2.7,1.4-2.8,2.7-4.5,4.5-3.7,3.9-5.7,6.2-4.1,4.4-6.2,6.4a49.54,49.54,0,0,1-6,5,10.35,10.35,0,0,1-5,2.1,6.28,6.28,0,0,1-3.5-.7,6.61,6.61,0,0,1-2.2-2.2,8.2,8.2,0,0,1-1.2-3.2,23.37,23.37,0,0,1-.4-3.9,25.61,25.61,0,0,1,.3-3.9,34.88,34.88,0,0,1,.7-3.7,8.05,8.05,0,0,1,2.8-4.2,6.72,6.72,0,0,1,4.2-1.6,4,4,0,0,1,2.7.9,3.39,3.39,0,0,1,1.1,2.7,9.43,9.43,0,0,1-1.1,3.6c-.7,1.5-1.5,3-2.2,4.4a17,17,0,0,0-1.4,3.9c-.2,1.2.1,1.9,1.1,2.3s2.5,0,4.1-1.2a47.68,47.68,0,0,0,5.4-4.6c2-1.9,4-4.1,6.1-6.4S290,105,292,103a58.06,58.06,0,0,1,5.6-5c1.8-1.3,3.3-2,4.5-2q3.15.15,4.2,2.4a14.13,14.13,0,0,1,1.1,5.7,27.41,27.41,0,0,1-.4,4.8c-.3,1.7-.5,3.3-.8,4.9a40.5,40.5,0,0,1,2.1-3.5,27.71,27.71,0,0,1,2.2-3.1,9.47,9.47,0,0,1,2.3-2.2,4,4,0,0,1,2.3-.9,6.38,6.38,0,0,1,3.3.5,5.19,5.19,0,0,1,1.9,1.7,8.15,8.15,0,0,1,.9,2.5c.1.9.3,1.8.4,2.7a8.89,8.89,0,0,0,.5,2.3C322.5,113.9,322.9,114.3,323.6,114.5Zm-49.1-20a4.46,4.46,0,0,1-2,1.8,6.19,6.19,0,0,1-2.9.7,3,3,0,0,1-2.4-1c-.6-.7-.6-1.6-.1-2.8v-.1l.5-1.2-.1.1c.2-.7.4-1.4.6-2.4a11.66,11.66,0,0,1,1-2.6,8,8,0,0,1,1.5-2.1,4.19,4.19,0,0,1,2.2-1.1,2.61,2.61,0,0,1,2.3,1.4,5.66,5.66,0,0,1,.7,2.9,16.1,16.1,0,0,1-.4,3.7,14.12,14.12,0,0,1-1,3.1Z" transform="translate(-1.74 -52.16)"/>
                    <path d="M341.6,113.7a5.62,5.62,0,0,0-.3,2,9.08,9.08,0,0,0,.3,2.3,4.35,4.35,0,0,0,1,1.9,2.79,2.79,0,0,0,2,.8,14.52,14.52,0,0,0,6.4-1.8,54.27,54.27,0,0,0,6.8-4.2,59.24,59.24,0,0,0,5.8-4.8c1.7-1.6,2.9-2.8,3.7-3.6a2.88,2.88,0,0,1,1.6-1.1,1.29,1.29,0,0,1,1.2.4,1.58,1.58,0,0,1,.2,1.4,5.05,5.05,0,0,1-1.1,2c-1.4,1.5-3.2,3.3-5.2,5.3a61.47,61.47,0,0,1-6.6,5.7,39.92,39.92,0,0,1-7.3,4.5,16.56,16.56,0,0,1-7.1,1.8,7.24,7.24,0,0,1-3.7-.9,7.81,7.81,0,0,1-2.7-2.4,11.86,11.86,0,0,1-1.6-3.4,13.31,13.31,0,0,1-.5-4,21.8,21.8,0,0,1,1.2-6.9,21.45,21.45,0,0,1,3.5-6.5,17.67,17.67,0,0,1,5.5-4.7A12.85,12.85,0,0,1,352,96a5.51,5.51,0,0,1,4.2,1.8,6.48,6.48,0,0,1,1.3,4.1,12.52,12.52,0,0,1-4.2,8.7,14.33,14.33,0,0,1-5,2.9A16.43,16.43,0,0,1,341.6,113.7Zm8.9-9.2a5.67,5.67,0,0,0-4.1,1.5,15.17,15.17,0,0,0-3.2,3.9,9.69,9.69,0,0,0,3.4,0,6.83,6.83,0,0,0,4.3-2.8,3.19,3.19,0,0,0,.6-1.7C351.5,104.9,351.2,104.6,350.5,104.5Z" transform="translate(-1.74 -52.16)"/>
                </svg>
            </div>
            <div className="landing-page__connexion-card">
                <Link to="/login">
                    <button className="landing-page__login --btn">Se connecter</button>
                </Link>
                <div className="landing-page__separation">
                    <span className="--line"></span>
                    <span className="--text">Ou</span>
                    <span className="--line"></span>
                </div>
                <Link to="/register">
                    <button className="landing-page__register --btn">Créer compte</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;