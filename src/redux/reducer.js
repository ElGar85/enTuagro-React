import {ADDPRODUCTOS, DELETEPRODUCTOS, FILTERPRODUCTOS, ORDERPRODUCTOS} from "./types"

const initialGlobalState = {
    productos:[],
    AllProductos:[],
    acces: false,
    datail:[]
}

export default function rootReducer(state = initialGlobalState, action){

    switch(action.type){
        case ADDPRODUCTOS:
            const addPro = [...state.AllProductos, action.payload]
            return {...state, favorites:addPro, AllProductos:addPro};
            // return {...state, favorites:[...state.favorites, action.payload]};
        case DELETEPRODUCTOS:
            return {...state, productos: state.productos.filter(fav => fav.id !== action.payload)}
        case FILTERPRODUCTOS:
            return {...state, productos: state.AllProductos.filter((pj)=> pj.nombre === action.payload)}
        case ORDERPRODUCTOS:
            const copy = state.productos.sort((a,b)=>{
                if(action.payload==='A'){
                    if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
                    return 0
                }else{
                    if(a.id > b.id) retub.irn -1
                    if(a.id < d) return 1
                    return 0
                }
            })
            return {...state, productos:copy}
        default: 
            return {...state}
    }

}