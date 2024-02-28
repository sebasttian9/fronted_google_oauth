import { Container } from "react-bootstrap";
import "../assets/css/home.css"
import repuestos from "../assets/imgs/repuestos.jpg"

const Ventas = () => {


    return (
    <Container className="cart">
        <h1>Aqui Puedes Ver Tus publicaciones</h1>
        <img className="engimg" src={repuestos} alt="repuestos_img" />
    </Container>
    );
};

export default Ventas;