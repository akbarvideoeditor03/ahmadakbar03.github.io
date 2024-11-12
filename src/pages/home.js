import React from "react";
import { TypeAnimation } from 'react-type-animation';
// import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="container col-f outer-card f-content">
            <nav className="container row-f f-wrap-r nav">
                <section className="container row-f f-between flex-1">
                    <div className="container row-f flex-1">
                        <p className="flex-1" style={{ fontSize: '200%' }}>Hi, there!</p>
                    </div>
                    <a href="#home">Home</a>
                    <a href="#experience">Experience</a>
                    <a href="#">Certificates</a>
                    <a href="#">About Web</a>
                </section>
            </nav>
            <div id="home" className="container col-f lb">
                <section className="container row-f f-center flex-1 section">
                    <div className="container col-f flex-1">
                        <h1 style={{ fontSize: '350%' }}>Hi!, I'm <b style={{color : 'yellow'}} >Ahmad Akbar</b> </h1>
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
                </section>
            </div>
            <div id="experience" className="container col-f lb">
                <section className="container row-f f-center flex-1 section">
                    <div className="container col-f">
                        <h2>Welcome to</h2>
                        <p style={{ fontWeight : 'bold', fontSize : '250%', color : 'yellow' }} >My Experiences</p>
                    </div>
                    <div className="container col-f flex-1 f-center">

                    </div>
                </section>
            </div>
        </section>
    )
}

export default Home;