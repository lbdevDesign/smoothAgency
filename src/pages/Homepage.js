import React from 'react';
import Hero from "../components/hero/hero";

//advantages
import Expertise from '../components/expertise/expertise';
import eggImg from "../assets/image-transform.jpg";
import glassImg from "../assets/image-stand-out.jpg";
import ButtonColorContext from '../components/button/ButtonColorContext';

//expertises
import Advantage from "../components/advantage/advantage";
import CherriesImg from '../assets/image-graphic-design.jpg';
import OrangeImg from '../assets/image-photography.jpg';

//testimonials
import Testimonials from '../components/testimonials/testimonials';
import emilyImg from '../assets/image-emily.jpg';
import thomasImg from '../assets/image-thomas.jpg';
import jennieImg from '../assets/image-jennie.jpg';

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
      <section className='testimonials'>
        <h2 className='testimonials__title'>Client Testimonials</h2>
        <Testimonials img={emilyImg} msg="We put our trust in SmoothAgency and they delivered, making sure our needs were met and deadlines were always hit." name="Emily R." position="Marketing Director"/>
        <Testimonials img={thomasImg} msg="SmoothAgency's enthusiasm coupled with their keen interest in our brand's success made it a satifying and enjoyable experience." name="Thomas S." position="Chief Operating Officer"/>
        <Testimonials img={jennieImg} msg="Incredible end result! Our sales increased over 400% when we workend with SmoothAgency. Highly recommended!" name="Jennie F." position="Business Owner"/>
      </section>
    </>
  );
}

export default Homepage;
