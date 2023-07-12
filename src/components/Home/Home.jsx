import React from "react";
import imagen from "../Imagenes/pagina-construccion.jpg"
import imagen2 from "../Imagenes/Conocenos3.gif"
import imagen3 from "../Imagenes/Productos2.gif"
import style from "./Home.module.css"
import CardHome from "../CardHome/CardHome";




const Home = ( ) => {

return (
    <div className={style.contenedor}>Inicio
        <div>
            <img src={imagen} alt="construccion"/>
        </div>
        <div>
            <img src={imagen2} alt="construccion"/>
        </div>
        <div className={style.contenedorCard} >

            <div className={style.columna50}><CardHome/></div>
            <div className={style.columna50}><CardHome/></div>
            
        </div>
        <div>
            <img src={imagen3} alt="construccion"/>
        </div>
        
    </div>
)

}

export default Home;


