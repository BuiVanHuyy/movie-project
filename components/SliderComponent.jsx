import Carousel from "react-bootstrap/Carousel";
import PropTypes from 'prop-types';

SliderComponent.propTypes = {
    sliderData: PropTypes.array
}

function SliderComponent({ sliderData }) {
    return (
        <Carousel data-bs-theme="dark">

            {sliderData.map((value, key) => (
                <Carousel.Item key={key}>
                    <img
                        className="d-block w-100"
                        src={value.img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}

        </Carousel>
    );
}

export default SliderComponent;
