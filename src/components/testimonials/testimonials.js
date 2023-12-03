/* eslint-disable jsx-a11y/img-redundant-alt */
function Testimonials({img, msg, name, position}) {
    return (
        <div className="testi">
            <img src={img} alt="Profile Picture" className="testi__img" />
            <p className="testi__text">{msg}</p>
            <div className="testi__profile">
                <span className="testi__profile--name">{name}</span>
                <span className="testi__profile--position">{position}</span>
            </div>
        </div>
    )
}

export default Testimonials;