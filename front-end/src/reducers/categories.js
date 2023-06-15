import { CREATE_CATEGORY, DELETE_CATEGORY, LIST_CATEGORIES, UPDATE_CATEGORY } from "../actions/type";

const initialState=[];
function categoryReducer (categories=initialState,action){
const {type,payload}=action;
switch(type){
case LIST_CATEGORIES:
     return payload;
case CREATE_CATEGORY:
    return [...categories, payload];
case UPDATE_CATEGORY:
    return categories.map((category) => {
        if (category.id === payload.id) {
          return {
            ...category,
            ...payload,
          };
        } else {
          return category;
        }
      });
case DELETE_CATEGORY:
    return categories.filter(({id})=>id !==payload.id);
    default:
        return categories;
}

}
export default categoryReducer;
