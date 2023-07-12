import React from "react";
import style from "./SearchBar.module.css";
import logo from "../Imagenes/logo1.jpg"


const SearchBar = () => {

    return (

        <div className={style.contenedor}>
            <div className={style.logoimg}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={style.eslogan}><h2>Comercialización de Insumos y Herramientas para el Sector Agrícola y Pecuario.</h2></div>
            <div className={style.contenedor_bar}>
                <input 
                className={style.label} 
                type='text'
                placeholder='Buscar producto'
                //  onChange={handLeChange}
                value=""
                />
                <button className={style.btn} >Buscar</button>
            </div>

        </div>
    )

}

export default SearchBar;