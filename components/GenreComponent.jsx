import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemComponent from "./ItemComponent";
import PropTypes from "prop-types";

GenreComponent.propTypes = {
    genre: PropTypes.number,
    setLoading: PropTypes.func,
};

function GenreComponent({ genre, setLoading }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API + "discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&with_genres=" + genre)
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setItem(result.results);
                setLoading(false);
            });
    }, [genre]);

    return (
        <Container>
            <Row>
                {item.map((value, key) => (
                    <ItemComponent value={value} key={key} />
                ))}
            </Row>
        </Container>
    );
}

export default GenreComponent;
