import React from "react";
import style from "./NavBar.module.css"
import {Link} from 'react-router-dom';




const NavBar = () => {

    return (

        <div className={style.contenedorNav}>
            <Link className={style.links} to="/.">INICIO</Link>
            <Link className={style.links} to="/home">NOSOTROS</Link>
            <Link className={style.links} to="/servicios">SERVICIOS</Link>
            <Link className={style.links} to="/productos">PRODUCTOS</Link>
            
        </div>
    )
}

export default NavBar;
