import http from "../http-common";
const getAll= async()=>{
    return http.get("/bizu");
}
const create= async(data)=>{
    return http.post("/products",data);
}
const update= async()=>{
    return http.update("/product");
}
const remove = async()=>{
    return http.delete("/produnct");
}
const ProductService ={
getAll,
create,
update,
remove
}
export default ProductService;


