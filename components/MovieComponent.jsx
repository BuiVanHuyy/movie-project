import { useCallback, useContext, useEffect, useState } from "react";
import { Spinner, Container, Row, Col, Form } from "react-bootstrap";
import PartComponent from "./PartComponent";
import GenreComponent from "./GenreComponent";
import SearchComponent from "./SearchComponent";
import NavbarComponent from "./NavbarComponent";
import SliderComponent from "./SliderComponent";
import ModalCustomComponent from "./ModalCustomComponent";
import { sliderData, listDataHomePage } from "../data";
import { Context } from "../utils/AppContext";
import 'react-toastify/dist/ReactToastify.css';

function MovieComponent() {
    const [loading, setLoading] = useState(true);
    const [genre, setGenre] = useState("");
    const [search, setSearch] = useState("");
    const [searchDebounce, setSearchDebounce] = useState("");
    const { modal, setModal, dataId } = useContext(Context);

    const handleGenreId = (id) => {
        if (id == "home") {
            setGenre("");
        } else {
            setGenre(id);
        }

        setSearch("");
        setSearchDebounce("");
    };

    const RenderMovie = useCallback(() => {
        if (genre == "" && searchDebounce == "") {
            return listDataHomePage.map((value, key) => <PartComponent key={key} title={value.title} api={value.api} setLoading={setLoading} />);
        } else {
            if (searchDebounce != "") {
                return <SearchComponent keywords={searchDebounce} setLoading={setLoading} />;
            } else {
                return <GenreComponent genre={genre} setLoading={setLoading} />;
            }
        }
    }, [genre, searchDebounce]);

    const handleOnChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchDebounce(search);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [search]);

    return (
        <>
            <SliderComponent sliderData={sliderData} />
            <NavbarComponent handleGenreId={handleGenreId} />

            <Container className="mb-3 mt-3">
                <Row>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Vui lòng nhập từ khóa để tìm kiếm phim"
                        onChange={handleOnChangeSearch}
                        value={search}
                    />
                </Row>
            </Container>

            {loading && (
                <Container fluid>
                    <Row>
                        <Col>
                            <Spinner animation="border" role="status" className="textCenter">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Col>
                    </Row>
                </Container>
            )}

            <RenderMovie />

            {modal && <ModalCustomComponent show={modal} onHide={() => setModal(false)} dataId={dataId} />}
        </>
    );
}

export default MovieComponent;
