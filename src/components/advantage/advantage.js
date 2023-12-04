import LearnMoreCta from "../button/button";

function Advantage({img, alt, title, text, reverse}) {

    const containerClass = reverse ? 'prez row-reverse' : 'prez row';

    return (
        <section className={containerClass}>
            <img src={img} alt={alt} className='prez__img' />
            <div className='prez__text'>
                <h2 className='prez__text--title'>{title}</h2>
                <p className='prez__text--desc'>{text}</p>
                <LearnMoreCta />
            </div>
        </section>
    )
}

export default Advantage;