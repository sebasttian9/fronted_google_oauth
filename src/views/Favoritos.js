import { Container } from "react-bootstrap";
import "../assets/css/home.css"
import fav from "../assets/imgs/fav.png"

const Favs = () => {


    return (
    <Container className="cart">
        <h1>Tus Productos Favoritos</h1>
        <img className="engimg" src={fav} alt="favorito_img" />
    </Container>
    );
};

export default Favs;