import ArrowDown from '../../assets/icon-arrow-down.svg'

function Hero() {
    return (
        <section className='hero'>
            <h1 className='hero__title'>WE ARE<br></br>CREATIVES</h1>
            <img src={ArrowDown} alt='Arrow Down' className='hero__arrow' />
        </section>
    )
}

export default Hero;