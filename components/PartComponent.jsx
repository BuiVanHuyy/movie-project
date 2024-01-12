import { useEffect, useState } from "react";
import { Container, Row, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import ItemComponent from "./ItemComponent";

PartComponent.propTypes = {
    title: PropTypes.string,
    api: PropTypes.string,
    setLoading: PropTypes.func,
};

function PartComponent({ title, api, setLoading }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(api)
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setItem(result.results.slice(0, 8));
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <h1>
                <Badge bg="secondary">{title}</Badge>
            </h1>
            <Row>
                {item.map((value, key) => (
                    <ItemComponent value={value} key={key} />
                ))}
            </Row>
        </Container>
    );
}

export default PartComponent;
