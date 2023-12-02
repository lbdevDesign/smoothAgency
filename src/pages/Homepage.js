import React from 'react';
import Hero from "../components/hero/hero";
import Advantage from "../components/advantage/advantage";
import Expertise from '../components/expertise/expertise';

//advantages
import eggImg from "../assets/image-transform.jpg";
import glassImg from "../assets/image-stand-out.jpg";
import ButtonColorContext from '../components/button/ButtonColorContext';

//expertises
import CherriesImg from '../assets/image-graphic-design.jpg';
import OrangeImg from '../assets/image-photography.jpg';


function Homepage() {

  const buttonYellow = 'hsl(51, 100%, 49%)';
  const buttonRed = 'hsl(7, 99%, 70%)';

  return (
    <>
      <Hero />
      <ButtonColorContext.Provider value={buttonYellow}>
        <Advantage img={eggImg} title='Transform your brand' text='We are a full-service creative agency specializing in helping brands grow fats. Engage your clients through compelling visuals that do most of the marketing for you.'/>
      </ButtonColorContext.Provider>
      <ButtonColorContext.Provider value={buttonRed}>
        <Advantage img={glassImg} title="Stand out to the right audience" text="Using a collaborative formula of designers, researchers, and copyrighters, we'll build and extend your brand in digital places."/>
      </ButtonColorContext.Provider>
      <Expertise title="Graphic Design" text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention." img={CherriesImg}/>
      <Expertise title="Photography" text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image." img={OrangeImg}/>
    </>
  );
}

export default Homepage;
