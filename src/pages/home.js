import React from "react";
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <section className="container col-f-0 outer-card f-content">
            <div className="container col-f">
                <img src="../../public/asset/icons/white-dot.svg" alt="white-dot" />
                <p style={{ fontSize: '125%' }}>"Showcasing my journey in multimedia and web development."</p>
            </div>
            <div id="name" className="container col-f lb">
                <section className="container row-f f-center flex-1 f-wrap-r section">
                    <div className="container flex-1 f-center">
                        <div className="container col-f flex-1">
                            <h1 style={{ fontSize: '350%' }}>Hello!, I'm <b style={{ color: 'yellow' }} >Ahmad Akbar</b> </h1>
                            <TypeAnimation
                                sequence={[
                                    "I'm a Video Editor",
                                    1000,
                                    "I'm a Web Programmer",
                                    1000,
                                    "I'm a Front-End Developer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={60}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <div className="container col-f">
                            <img className="img" src="https://raw.githubusercontent.com/akbarvideoeditor03/General/refs/heads/main/FotoSaya.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <div id="experience" className="container col-f lb">
                <section className="container row-f f-center flex-1 section">
                    <div className="container col-f">
                        <h2>Welcome to</h2>
                        <p style={{ fontWeight: 'bold', fontSize: '250%', color: 'yellow' }} >My Experiences</p>
                    </div>
                    <div className="container col-f flex-1 f-center">

                    </div>
                </section>
            </div>
            <div id="certificates" className="container col-f lb">
                <section className="container row-f f-center flex-1 section">
                    <div className="container col-f">
                        <h2>My Certificates</h2>
                        <p style={{ fontWeight: 'bold', fontSize: '250%', color: 'yellow' }} >My Experiences</p>
                    </div>
                    <div className="container col-f flex-1 f-center">

                    </div>
                </section>
            </div>
        </section>
    )
}

export default Home;