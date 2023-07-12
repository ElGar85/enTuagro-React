import React from "react";
import style from "./NavBar.module.css"
import {Link} from 'react-router-dom';




const NavBar = () => {

    return (

        <div className={style.contenedorNav}>
            <Link className={style.links} to="/.">INICIO</Link>
            <Link className={style.links} to="/nosotros">NOSOTROS</Link>
            <Link className={style.links} to="/servicios">SERVICIOS</Link>
            <Link className={style.links} to="/productos">PRODUCTOS</Link>
            <div >
					<a href="https://www.facebook.com/entuagro?ref=pages_you_manage"  
                    target="_blank"><img 
                    src="" 
                    alt="facebook"/></a>
					<a href="" 
                    target="_blank"><img 
                    src="" 
                    alt="instagram"/></a>
					<a href="https://api.whatsapp.com/send?phone=573228967736" 
                    target="_blank"><img 
                    src="" 
                    alt="whatsapp"/></a>
			</div>
        </div>
    )
}

export default NavBar;
