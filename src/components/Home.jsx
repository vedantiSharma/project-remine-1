import React from 'react'
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>Remine India</h1>
                    <p>Solution to all Li Batteries and e-Waste</p>
                </main>

            </div>

            <div className="home2">

                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are here to tell you that E-waste has a lot of recoverable and valuable resources like plastics, gold etc .
                        To preserve our natural resources,all e-waste should be recycled and reused instead of dumped into landfills.
                    </p>
                </div>
            </div>
            <div className="home3" id='about' >
                <div>
                    <h1>Who we are?</h1>
                    <p>REMINE INDIA PRIVATE LIMITED is a UTTARAKHAND based PRIVATE ltd. Company Registered at dated 06-DEC-2022 on Ministry of Corporate Affairs(MCA), The Corporate Identification Number (CIN) of REMINE INDIA PRIVATE LIMITED is U37100UR2022PTC014948 
                        and registration number is U37100UR2022PTC014948.It has been classified as COMPANY LIMITED BY SHARES and is registered under Registrar of Companies UTTARAKHAND India. Authorized share capital of REMINE INDIA PRIVATE LIMITED is Rs. 1000000 and
                        its paid up capital is Rs. 1000000.It aspire to serve in RECYCLING activities across the India.</p>
                </div>

            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Connect</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillLinkedin />
                            <p>Linkdin</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>

                        </div>
                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>

                        </div>



                    </article>
                </div>
            </div>
        </>
    )
}

export default Home