import CategoryService from "../services/CategoryServie";
import { LIST_CATEGORIES } from "./type";
export const ListCategories = () => async (dispatch) =>{
    try{
const res = CategoryService.getAll();
dispatch({
    type:LIST_CATEGORIES,
    paylaod:res.data
})
    }catch(err){
        console.log(err);
    }
}