import { Navbar, Container } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css"
import { ShoppingCart } from "lucide-react";



export default function Navigation() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"
    
    return (
        <div>
            <Navbar className="navbar">
        <Container>
            <Navbar.Brand>
                <div className="img-container">
                    <img className="repuestos" src={logo} alt="repuestos" />
                </div>
            </Navbar.Brand>
        <div className="nl">
            <NavLink to="/Access" className={setActiveClass}>
                Acceso
            </NavLink>
            <hr></hr>
            <NavLink to="Registro" className={setActiveClass}>
            Registro
            </NavLink>
            <hr></hr>
            <NavLink to="/" className={setActiveClass}>
                Home
            </NavLink>
            <hr></hr>
            <NavLink to="/ventas" className={setActiveClass}>
            Mis Publicaciones
            </NavLink>
            <hr></hr>
            <NavLink to="/Favs" className={setActiveClass}>
                Favs
            </NavLink>
            <hr></hr>
            <NavLink to="/Publicar" className={setActiveClass}>
                Publicar
            </NavLink>
            <hr></hr>
            <NavLink to="Cart" className={setActiveClass}>
            <ShoppingCart />
            </NavLink>
        </div>
        </Container>
        </Navbar>
        </div>
    )

}