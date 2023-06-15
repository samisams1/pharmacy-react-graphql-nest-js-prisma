import http from "../http-common";

const getAll = async()=>{
    return http.get("/products")
}
const get = async()=>{
    return http.get("/categories")
}
const create = async()=>{
    return http.get("/categories")
}
const update = async()=>{
    return http.get("/categories")
}
const remove = async()=>{
    return http.get("/categories")
}
const findByTitle = async()=>{
    return http.get("/categories")
}
const CategoryService={
getAll,
get,
create,
update,
remove,
findByTitle
}
export default CategoryService; 