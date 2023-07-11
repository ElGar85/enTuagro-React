import React from "react";
import style from "./SearchBar.module.css";
import logo from "../Imagenes/logo1.jpg"


const SearchBar = () => {

    return (

        <div>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div><h2>Comercialización de Insumos y Herramientas para el Sector Agrícola y Pecuario.</h2></div>
            <div className={style.contenedor_bar}>
                <input  
                type='text'
                placeholder='Buscar personaje'
                //  onChange={handLeChange}
                value=""
                />
                <button className={style.btn} >
                    Agregar</button>
            </div>

        </div>
    )

}

export default SearchBar;