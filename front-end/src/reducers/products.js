import {CREATE_PRODUCT, DELETE_PRODUCT, LIST_PRODUCTS, UPDATE_PRODUCT } from "../actions/type";
const initialState=[];
function productReducer (products=initialState,action){
const {type,payload}=action;
switch(type){
case LIST_PRODUCTS:
     return payload;
case CREATE_PRODUCT:
    return   [...products, payload];;
case UPDATE_PRODUCT:
    return products.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            ...payload,
          };
        } else {
          return product;
        }
      });
case DELETE_PRODUCT:
    return products.filter(({ id }) => id !== payload.id);
    default:
        return products;
}

}
export default productReducer;
