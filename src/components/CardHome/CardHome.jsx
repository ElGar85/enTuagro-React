import React from "react";
import imagen from "../Imagenes/Aventura.jpg"
import style from "./CardHome.module.css"

const CardHome = () => {

    return (
        <div className={style.bloqueNosotros}>
            <div className={style.bloqueImgNosotros} >
                 <h3>Nuestra Empresa</h3>
                 <div className={style.cuadradoPerfecto} >
                    <img  src={imagen} alt="imagen"/>
                </div>
                <div className={style.contenedorBoton}>
                <a href="" className={style.boton}>Ver más</a>
                </div>
             </div>
        </div>
    )

}

export default CardHome;