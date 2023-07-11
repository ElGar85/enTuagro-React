import {ADDPRODUCTOS, DELETEPRODUCTOS, FILTERPRODUCTOS, ORDERPRODUCTOS} from "./types"


export function addProductos(obj){
    return {type: ADDPRODUCTOS, payload:obj }
}

export function deleteProductos(id){
    return {type: DELETEPRODUCTOS, payload:id }
}

export function filterProductos(nombre){
    return {type: FILTERPRODUCTOS, payload:nombre }
}

export function orderProductos(order){
    return {type: ORDERPRODUCTOS, payload:order }
}