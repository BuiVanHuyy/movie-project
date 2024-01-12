import { Badge, ListGroup, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../utils/AppContext";
import { Trash } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";

ModalMovieSeenComponent.propTypes = {
    lgShow: PropTypes.bool,
    setLgShow: PropTypes.func,
};

function ModalMovieSeenComponent({ lgShow, setLgShow }) {
    const { history, setHistory } = useContext(Context);

    const deleteMovieSeen = (idMovie) => {
        if (idMovie > -1) {
            setHistory((h) => h.filter((value, key) => key != idMovie));

            toast("🦄 Deleted movie seen sucessfully");
        }
    };

    return (
        <>
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Phim đã xem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as="ol" numbered>
                        {history.length > 0
                            ? history.reverse().map((value, key) => (
                                  <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={key}>
                                      <div className="ms-2 me-auto">
                                          <div className="fw-bold">{value.title}</div>
                                          {value.overview}
                                          <p>Ngày khởi chiếu: {value.release_date}</p>
                                      </div>
                                      <Badge bg="danger" pill onClick={() => deleteMovieSeen(key)} style={{ cursor: "pointer" }}>
                                          <Trash /> Xóa
                                      </Badge>
                                  </ListGroup.Item>
                              ))
                            : "Bạn Chưa Xem Gì Cả"}
                    </ListGroup>
                </Modal.Body>
            </Modal>

            <ToastContainer />
        </>
    );
}

export default ModalMovieSeenComponent;
