/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Hero from "../components/hero/hero";

//header
import Header from '../components/header/header';

//footer
import Footer from '../components/footer/footer';

//advantages
import Advantage from "../components/advantage/advantage";
import advantageData from '../data/advantageData';
import ButtonColorContext from '../components/button/ButtonColorContext';

//expertises
import Expertise from '../components/expertise/expertise';
import expertiseData from '../data/expertiseData';

//testimonials
import Testimonials from '../components/testimonials/testimonials';
import testimonialsData from '../data/testimonialsData';

//gallery
import galleryData from '../data/galleryData';

function Homepage() {

  return (
    <>
      <Header />

      <Hero /> 

      {advantageData.map((advitem) => (
        <ButtonColorContext.Provider value={advitem.buttonColor}>
          <Advantage
            key={advitem.id}
            img={advitem.img}
            reverse={advitem.reverse}
            title={advitem.title}
            text={advitem.text}
          />
        </ButtonColorContext.Provider>
      ))}

      <div className='exp__container'>
        {expertiseData.map((expitem) => (
          <Expertise 
          title={expitem.title} 
          text={expitem.text} 
          img={expitem.img}/>
        ))}
      </div>

      <section className='testimonials'>
        <h2 className='testimonials__title'>Client Testimonials</h2>
        <div className='testi__container'>
          {testimonialsData.map((testitem) =>(
            <Testimonials 
            img={testitem.img} 
            msg={testitem.msg} 
            name={testitem.name} 
            position={testitem.position}/>
          ))}
        </div>
      </section>

      <div className='gallery'>
        {galleryData.map((galleryitem) => (
          <div className='gallery__photo'>
            <img src={galleryitem.img} alt={galleryitem.alt}/>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
