import { Container } from "react-bootstrap";
import "../assets/css/home.css"
import carro from "../assets/imgs/carro.png"

const Profile = () => {


    return (
    <Container className="cart">
        <h1>Aqui puedes ver y modificar tus datos personales</h1>
        <img className="engimg" src={carro} alt="engranaje_img" />
    </Container>
    );
};

export default Profile;