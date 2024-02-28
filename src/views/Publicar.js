
import { Container } from "react-bootstrap";
import "../assets/css/home.css"
import flecha from "../assets/imgs/flecha.png"
const Publicar = () => {


    return (
    <Container className="cart">
        <h1>Aqui puedes Publicar tus productos</h1>
        <img className="engimg" src={flecha} alt="engranaje_img" />
    </Container>
    );
};

export default Publicar;