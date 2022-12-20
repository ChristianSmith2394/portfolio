import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'10%'} width={'10%'} />
                <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Title title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'My main development at this time is web development, check out my portfolio!'}
                />
                <ServicesSection image={intelligence} title={'Web3'} 
                text={'Currently learning Web3 developments'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'No current projects, but looking to add some in the near future, check back later!'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;