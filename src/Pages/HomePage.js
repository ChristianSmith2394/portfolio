import React from 'react';
// import { FaGitHub } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Christian Smith.</span>
                </h1>
                <p className="h-sub-text">
                    Welcome to my portfolio page where you can see all the projects I have worked on as well as projects I'm currently working on!
                </p>
                <div className="icons">
                    {/* <Link to="https://github.com/ChristianSmith2394" className="icon-holder">
                    <FontAwesomeIcon icon={FaGitHub} className="icon gh" />
                    </Link> */}
                </div>
            </header>
        </div>
    )
}

export default HomePage;