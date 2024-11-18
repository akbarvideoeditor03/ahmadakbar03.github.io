import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
const myUrl = '/ahmadakbar03.github.io';

function Home() {
    return (
        <section className="container col-f-0 outer-card f-content">
            <div className="container col-f t-center">
                <h1 style={{ fontSize: '180%' }}><i style={{ fontSize: '70%' }} className="bi bi-circle-fill"></i> Welcome to My Portofolio</h1>
                <p className="z-index-md" style={{ fontSize: '125%', color: 'yellow' }}><i>Showcasing my journey in multimedia and web development.</i></p>
            </div>
            <div id="name" className="container row-f section f-wrap-r f-center-c">
                <div className="container col-f flex-1-combo text-sm">
                    <h1 className="z-index-md">{`Hello!, I'm`} <b style={{ color: '#ffe100' }}> Ahmad Akbar</b></h1>
                    <div className="container row-f text-sm">
                        <p className="z-index-md" style={{ fontSize: '1.75em' }}>{`I'm a`}
                            <TypeAnimation
                                sequence={[
                                    ` Student`,
                                    2000,
                                    " Video Editor",
                                    2000,
                                    " Web Programmer",
                                    2000,
                                    " Front End Developer",
                                    2000
                                ]}
                                deletionSpeed={20}
                                speed={30}
                                style={{ color: '#ffe100' }}
                                repeat={Infinity}
                            /></p>
                    </div>
                    <div className="container row-f f-wrap">
                        <Link className="z-index-md btn btn-dark" target="blank" to='https://github.com/akbarvideoeditor03'><i className="bi bi-github"></i> GitHub</Link>
                        <Link className="z-index-md btn btn-primary" target="blank" to='https://www.linkedin.com/in/ahmad-akbar-0a533b275/'><i className="bi bi-linkedin"></i> LinkedIn</Link>
                    </div>
                </div>
                <div className="container col-f flex-1-combo f-center-r f-center-c">
                    <img className="img" src="https://raw.githubusercontent.com/akbarvideoeditor03/General/refs/heads/main/FotoSaya.jpg" alt="" />
                </div>
            </div>
            <div id="about" className="container col-f section flex-1">
                <p className="t-center sc-title">About Me</p>
                <div style={{ paddingBlock: '3rem' }} className="container swap-about flex-1">
                    <div className="container col-f flex-1-combo">
                        <div className="container col-f lb-about sc-about">
                            <h2 style={{ color: '#ffe100' }}>My Personal Data <i style={{ color: 'white' }} className="bi-person-vcard-fill"></i></h2>
                            <div className="container col-f">
                                <p>Full Name</p>
                                <p className="text-container">Ahmad Akbar</p>
                                <p>Place and Date of Birth</p>
                                <p className="text-container">Tebo Jaya, February 26, 2003</p>
                                <p>Address</p>
                                <p className="text-container">RB. Siagian Street, Tambak Sari, Jambi City</p>
                                <p>Phone Number</p>
                                <p className="text-container">0831-7263-3234</p>
                                <p>Email</p>
                                <p className="text-container">akbarvideoeditor03@gmail.com</p>
                            </div>
                        </div>
                        <div className="container col-f sc-about lb-about lb-about-top">
                            <h2 style={{ color: '#ffe100' }}>About Me <i style={{ color: 'white' }} className="fa-solid fa-circle-info"></i></h2>
                            <div>
                                <p style={{ fontSize: '120%', fontWeight: '500' }}>I an active undergraduate student, majoring in Information Systems, Dinamika Bangsa University. I am interested in visual science and computer science, and technology. I am interested in web development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                    </div>
                    <div className="container col-f flex-1-combo">
                        <div className="container col-f lb-about sc-about">
                            <h2 style={{ color: '#ffe100' }}>My Latest Education <i style={{ color: 'white' }} className="fa-solid fa-graduation-cap"></i></h2>
                            <p style={{ fontSize: '120%', fontWeight: '500' }}>My latest education was at SMK Negeri 6 Bungo, majoring in Multimedia. I attended from July 2018 to July 2021, graduating as the top student.</p>
                        </div>
                        <div className="container col-f sc-about lb-about">
                            <h2 style={{ color: '#ffe100' }}>These are My Skills <i style={{ color: 'white' }} className="fa-solid fa-user-gear"></i></h2>
                            <p style={{ fontSize: '125%', fontWeight: '500' }}>
                                My skills lie in the field of multimedia and technology, particularly in website development, but still in the learning stage.
                            </p>
                            <div style={{paddingTop : '1rem'}} className="container row-f f-wrap f-center-c">
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/DaVinci_Resolve_17_logo.svg`} alt="" />
                                <img style={{ height: '38px' }} src={`${myUrl}/asset/icons/Inkscape_Logo.svg`} alt="" />
                                <img style={{ height: '30px' }} src={`${myUrl}/asset/icons/blender-2.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/Figma.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/HTML5 Logo.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/CSS3_logo.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/Unofficial_JavaScript_logo_2.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/logos--supabase-icon.svg`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container col-f f-center-c flex-1">
                    <p>Check out my social media</p>
                    <div style={{ height: '50px', width: '100%', maxWidth: '300px' }} className="grid grid-auto-col">
                        <Link target="blank" to='https://github.com/akbarvideoeditor03' title="GitHub : akbarvideoeditor03">
                            <img className="img-icons" src={`${myUrl}/asset/icons/github.svg`} alt="" />
                        </Link>
                        <Link target="blank" to='https://www.instagram.com/ahmadakbar03/' title="Instagram : ahmadakbar03">
                            <img className="img-icons" src={`${myUrl}/asset/icons/instagram.svg`} alt="" />
                        </Link>
                        <Link target="blank" to='https://www.youtube.com/@ahmadakbar03' title="YouTube : Media Cara">
                            <img className="img-icons" src={`${myUrl}/asset/icons/youtube.svg`} alt="" />
                        </Link>
                        <Link target="blank" to='https://www.linkedin.com/in/ahmad-akbar-0a533b275/'>
                            <img className="img-icons" src={`${myUrl}/asset/icons/linkedin.svg`} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div id="experience" className="container swap section">
                <div className="container col-f flex-1 t-center-md z-index-md">
                    <h2>These are</h2>
                    <p className="sc-title">My Experiences</p>
                </div>
                <div className="container col-f flex-1">
                    <ol style={{ marginLeft: '1rem' }} type="1">
                        <li style={{ paddingLeft: '0.75rem' }} className="lb">
                            <section className="container col-f">
                                <div className="container col-f z-index-md">
                                    <p>
                                        {`I worked for over 2 years as a video editor at BuanaTV (Bungo's Online Media), teaching internship participants, and participating in various media programs.`}
                                    </p>
                                    <p><i style={{ fontSize: '80%' }} className="bi bi-circle-fill"></i> Since January 2020 - December 2021</p>
                                </div>
                                <div className="grid grid-col-3 grid-col-2 grid-col-1 t-center">
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/FB_IMG_1728216712736.jpg`} alt="" />
                                        <p className="z-index-md">Edited Video</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/FB_IMG_1728216668165.jpg`} alt="" />
                                        <p className="z-index-md">BTS Video Content Program</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/FB_IMG_1728216616921.jpg`} alt="" />
                                        <p className="z-index-md">Taught Multimedia</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/FB_IMG_1728216908010.jpg`} alt="" />
                                        <p className="z-index-md">BTS Video Content Program</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/FB_IMG_1728216820354.jpg`} alt="" />
                                        <p className="z-index-md">BTS Video Content Program</p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li style={{ paddingLeft: '0.75rem' }}>
                            <section className="container col-f">
                                <div className="container col-f z-index-md">
                                    <p>
                                        Through the Kampus Merdeka program, I successfully completed a self-study in Front-End and Back-End Web Development at Dicoding Academy for approximately 5 months.
                                    </p>
                                    <p><i style={{ fontSize: '80%' }} className="bi bi-circle-fill"></i> Since February 2024 - June 2024</p>
                                </div>
                                <div className="grid grid-col-3 grid-col-2 grid-col-1 t-center">
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h21m36s127.png`} alt="" />
                                        <p className="z-index-md">Study Group Session</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h22m33s358.png`} alt="" />
                                        <p className="z-index-md">ILT Soft Skil Session</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h21m47s074.png`} alt="" />
                                        <p className="z-index-md">ILT Tech Session</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s z-index-md" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h22m02s348.png`} alt="" />
                                        <p className="z-index-md">Weekly Consultation</p>
                                    </div>
                                </div>
                            </section>
                        </li>
                    </ol>
                </div>
            </div>
            <div id="projects" className="container col-f f-center-c section t-center">
                <div className="container col-f z-index-md">
                    <h2>These are</h2>
                    <p className="sc-title">My Selected Projects</p>
                    <p>This is some of the best work or results I have contributed to several projects, both from companies and my own work.</p>
                </div>
                <div className="grid grid-col-1 grid-col-2 grid-col-3">
                    <div className="container col-f card">
                        <ReactPlayer width={'100%'} height={'260px'} controls='true' url='https://youtu.be/Ovnm9FdWOhQ?si=FkdmriJAHLAsTfUl' />
                        <p>{`Personal Project - Introduction Video for Unama's 2021 Platinum`}</p>
                        <Link className="z-index-md btn btn-primary btn-custom-1" target="blank" to='https://www.youtube.com/@ahmadakbar03/videos'><i className="bi bi-youtube"></i> Watch others</Link>
                    </div>
                    <div className="container col-f card">
                        <ReactPlayer width={'100%'} height={'260px'} controls='true' url='https://youtu.be/Tlg6hTTTSFE?si=mfB_6H2SqlGPxVpB' />
                        <p>Personal Project - Welcoming Video for Ramadan 1445 Hijri</p>
                        <Link className="z-index-md btn btn-primary btn-custom-1" target="blank" to='https://www.youtube.com/@ahmadakbar03/videos'><i className="bi bi-youtube"></i> Watch others</Link>
                    </div>
                    <div style={{width : 'calc(100%)', height : '100%'}} className="container col-f card">
                        <ReactPlayer width={'100%'} height={'260px'} controls='true' url='https://youtu.be/qQZZbtTfvpM?si=3zDsg0U1GDbTAJX5' />
                        <p>BuanaTV Project - Makan-Makan Lemak Nian</p>
                        <Link className="z-index-md btn btn-primary btn-custom-1" target="blank" to='https://www.youtube.com/@sepriano99/videos'><i className="bi bi-youtube"></i> Watch others</Link>
                    </div>
                    <div style={{width : 'calc(100%)', height : '100%'}} className="container col-f card">
                        <ReactPlayer width={'100%'} height={'260px'} controls='true' url='https://youtu.be/2aBnWXBR5mM' />
                        <p>BuanaTV Project - Makan-Makan Lemak Nian</p>
                        <Link className="z-index-md btn btn-primary btn-custom-1" target="blank" to='https://www.youtube.com/@sepriano99/videos'><i className="bi bi-youtube"></i> Watch others</Link>
                    </div>
                    <div className="container col-f card">
                        <img className="img-card-project z-index-md" src={`${myUrl}/asset/pictures/img.jpg`} alt="" />
                        <p>Capstone Project (Kampus Merdeka) - Keluhan Desa Website</p>
                        <Link className="z-index-md btn btn-primary btn-custom-1" target="blank" to='http://keluhandesa.infinityfreeapp.com'><i className="bi bi-web"></i> Open Web</Link>
                        <Link className="z-index-md btn btn-primary btn-custom-1" target="blank" to='https://github.com/akbarvideoeditor03'><i className="bi bi-github"></i> See other repositories</Link>
                    </div>
                </div>
            </div>
            <div id="certificates" className="container col-f f-center-c section t-center">
                <div className="container col-f">
                    <h2>These are</h2>
                    <p className="sc-title">My Certificates</p>
                </div>
                <div className="container col-f">
                    <section style={{ gap: '1rem' }} className="grid grid-col-1 grid-col-2 grid-col-3">
                        <div className="container col-f f-between card-img img-sc-bg">
                            <img className="img-card z-index-md" src="https://media.licdn.com/dms/image/v2/D4E22AQHCV2SySjf6rA/feedshare-shrink_800/feedshare-shrink_800/0/1716854896364?e=1734566400&v=beta&t=cDr949glANHITPP9haSd1YQKZNjb5tr-7OV8Tx1jEh4" alt="" />
                            <div className="container col-f f-center-c flex-1">
                                <p className="z-index-md">Certificate of Completion for Logic 101 Program Class</p>
                                <Link className="z-index-md btn btn-primary btn-custom-1" target="blank" to='https://www.linkedin.com/posts/ahmad-akbar-0a533b275_alhamdulillah-selama-4-bulan-terakhir-ini-activity-7201054576400027648-_6le?utm_source=share&utm_medium=member_desktop'><i className="bi bi-linkedin"></i> See other certificates</Link>
                            </div>
                        </div>
                        <div className="container col-f f-between card-img img-sc-bg">
                            <img className="img-card z-index-md" src="https://media.licdn.com/dms/image/v2/D4E22AQFtOJfaMWYrfw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720758628460?e=1734566400&v=beta&t=KX75ytRkbftUZ5w8OLVYoFgxi5o9_gDbtQ2QDTwNzoc" alt="" />
                            <div className="container col-f f-center-c flex-1">
                                <p className="z-index-md">Certificate of Completion for Independent Study at Dicoding Academy</p>
                            </div>
                        </div>
                        <div className="container col-f f-between card-img img-sc-bg">
                            <img className="img-card z-index-md" src="https://media.licdn.com/dms/image/v2/D4E22AQHtxbUDCBwCIw/feedshare-shrink_1280/feedshare-shrink_1280/0/1720758624871?e=1734566400&v=beta&t=uKBKR6lc9dMdmE8WsyRQO0oV0qawDpH2K-hmOorrlPU" alt="" />
                            <div className="container col-f f-center-c flex-1">
                                <p className="z-index-md">Certificate of Participation in Independent Study - Kampus Merdeka</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div id="about-web" className="container col-f f-center-c section-footer-home t-center">
                <div className="container col-f">
                    <h2>About</h2>
                    <p className="sc-title">My Portofolio Website</p>
                </div>
                <div className="container col-f">
                    <p>
                        {`Welcome to My Portfolio - Ahmad Akbar, and thank you for visiting this website. Here, I share a description of my journey over the past years, including my work experiences and the learning process I've gone through. This site showcases the various projects, processes, and outcomes I've completed. You will find examples of my work and learnings in multimedia creation and web development, reflecting my skills and dedication to these fields.`}
                    </p>
                </div>
                <p style={{ fontWeight: 'bold' }}>Thank you for visiting <i className="fa-solid fa-hands-praying"></i>.</p>
            </div>
        </section>
    )
}

export default Home;