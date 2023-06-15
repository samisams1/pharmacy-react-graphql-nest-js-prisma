import ProductService from "../services/ProductService";
import { CREATE_PRODUCT, DELETE_PRODUCT, LIST_PRODUCTS, UPDATE_PRODUCT } from "./type";
export const listProducts = () => async (dispatch) =>{
    try {
       const res = await ProductService.getAll();
       dispatch({
        type:LIST_PRODUCTS,
        payload:res.data
       });
    } catch(err){
        console.log(err)
    }
}
export const createProduct= (name, brand,category,tag,image,quantity,price,details) =>async (dispatch)=>{
    try{
     const res = await ProductService.create({name, brand,category,tag,image,quantity,price,details});
     dispatch({
        type:CREATE_PRODUCT,
        payload:res.data
     })

    }catch(err){
        console.log(err)
    }
}
export const updteProduct=(id,data)=>async(dispatch)=>{
    try{
       const res= await ProductService.update(id,data);
        dispatch({
            type:UPDATE_PRODUCT,
            payload:{id},
        })
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
}
export const deleteProduct=(id)=>async(dispatch)=>{
    try{
        await ProductService.remove(id);
  
        dispatch({
          type: DELETE_PRODUCT,
          payload: { id },
        });
    }catch(err){
        console.log(err);
    }
}