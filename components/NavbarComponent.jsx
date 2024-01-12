import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import ModalMovieSeenComponent from "./ModalMovieSeenComponent";

NavbarComponent.propTypes = {
    handleGenreId: PropTypes.func,
};

function NavbarComponent({ handleGenreId }) {
    const [genre, setGenre] = useState([]);
    const [lgShow, setLgShow] = useState(false);

    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API + "genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=vi-VN")
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setGenre(result.genres.slice(0, 8));
            });
    }, []);

    const handleOnClick = (id) => {
        handleGenreId(id);
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => handleOnClick("home")}>Trang chủ</Navbar.Brand>
                    <Nav className="me-auto">
                        {genre.map((value, key) => (
                            <Nav.Link href="#" key={key} onClick={() => handleOnClick(value.id)}>
                                {value.name}
                            </Nav.Link>
                        ))}

                        <Button variant="info" onClick={() => setLgShow(true)}>
                            Phim đã xem
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            <ModalMovieSeenComponent lgShow={lgShow} setLgShow={setLgShow} />
        </>
    );
}

export default NavbarComponent;
