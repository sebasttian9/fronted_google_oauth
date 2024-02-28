import { Container } from "react-bootstrap";
import "../assets/css/home.css"
import carro from "../assets/imgs/carro.png"

const Cart = () => {


    return (
    <Container className="cart">
        <h1>Este es tu carrito</h1>
        <img className="engimg" src={carro} alt="engranaje_img" />
    </Container>
    );
};

export default Cart;