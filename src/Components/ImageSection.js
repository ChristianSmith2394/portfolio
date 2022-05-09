import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Christian Smith</span></h4>
                <p className="about-text">
                I’m a Fullstack Developer who is passionate about the JavaScript ecosystem. I am most skilled and passionate about Node (Express) and React. <br/>

Growing up I've always been interested in technology and creating/building things. My passion began with building things out of Lego's, K'Nex, etc. My dream career position is Fullstack Development that focuses on Javascript, Node, React and SQLite3. <br/>

To see my portfolio: https://github.com/ChristianSmith2394 <br/>
To connect virtually: christiansmith2394@gmail.com
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Coding Languages</p>
                        <p>City</p>
                        <p>Dream Job</p>
                    </div>
                    <div className="right-section">
                        <p>: Christian Smith</p>
                        <p>: 28</p>
                        <p>: English</p>
                        <p>: Javascript, React.js, React Native HTML, CSS, Sass, Python</p>
                        <p>: Tampa, FL</p>
                        <p>: Fullstack Developer</p>
                    </div>
                </div>
                <button className="btn">Download Resume</button>
            </div>
        </div>
    )
}

export default ImageSection;