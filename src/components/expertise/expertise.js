function Expertise({img, title, text}) {

    const sectionStyle = {
        backgroundImage: `url(${img})`,
      };

    return(
        <section className="exp" style={sectionStyle}>
            <div className="exp__text">
                <h2 className="exp__text__title">{title}</h2>
                <p className="exp__text__desc">{text}</p>
            </div>
        </section>
    )
}

export default Expertise;