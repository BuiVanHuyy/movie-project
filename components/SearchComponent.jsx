import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemComponent from "./ItemComponent";
import PropTypes from "prop-types";

SearchComponent.propTypes = {
    keywords: PropTypes.string,
    setLoading: PropTypes.func,
};

function SearchComponent({ keywords, setLoading }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(
            import.meta.env.VITE_DOMAIN_API +
                "search/movie?api_key=e9e9d8da18ae29fc430845952232787c&include_adult=false&language=vi-VN&page=1&query=" +
                keywords
        )
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setItem(result.results);
                setLoading(false);
            });
    }, [keywords]);

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

export default SearchComponent;
