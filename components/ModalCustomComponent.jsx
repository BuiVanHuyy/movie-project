import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

ModalCustomComponent.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    dataId: PropTypes.number,
};

function ModalCustomComponent({ show, onHide, dataId }) {
    const [data, setData] = useState({});
    const [actor, setActor] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API + "movie/" + dataId + "?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos")
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setData(result);
            });
        fetch("http://api.themoviedb.org/3/movie/" + dataId + "/casts?api_key=e9e9d8da18ae29fc430845952232787c")
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setActor(result.cast.slice(0, 10));
            });
    }, [dataId]);

    return (
        <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Chi tiết phim</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{data.title}</h4>
                <p>{data.overview}</p>
                <ul>
                    {actor.map((value, key) => (
                        <li key={key}>
                            {value.original_name} - {value.character}
                        </li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCustomComponent;
