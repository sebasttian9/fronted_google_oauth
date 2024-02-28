import { Container } from "react-bootstrap";
import "../assets/css/home.css"
import engranaje from "../assets/imgs/engranaje.png";

const Home = () => {


    return (
    <Container className="home">
        <h1>¡Aquí Puedes Encontrar el Producto que deseas!</h1>
        <img className="engimg" src={engranaje} alt="engranaje_img" />
    </Container>
    );
};

export default Home;