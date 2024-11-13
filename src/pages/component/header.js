import React from "react";
import { Link } from "react-scroll";

function WebHeader() {
    return (
        <nav className="container row-f f-wrap-r nav">
            <section className="container row-f f-between flex-1">
                <div className="container row-f flex-1">
                    <p className="flex-1" style={{ fontSize: '150%', fontWeight : 'bold' }}>Hi, there!</p>
                </div>
                <Link to="name" spy={true} smooth={true} duration={500} activeClass="active">Name</Link>
                <Link to="experience" spy={true} smooth={true} duration={500} activeClass="active">Experience</Link>
                <Link to="certificates" spy={true} smooth={true} duration={500} activeClass="active">Certificates</Link>
                <Link to="#" spy={true} smooth={true} duration={500} activeClass="active">About Web</Link>
            </section>
        </nav>
    )
}

export default WebHeader;