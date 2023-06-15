import http from "../http-common";
const getAll = () => {
  return http.get("/orders");
};
const get = id => {
  return http.get(`/orders/${id}`);
};
const create = data => {
  return http.post("/orders", data);
};
const update = (id, data) => {
  return http.put(`/orders/${id}`, data);
};
const remove = id => {
  return http.delete(`/orders/${id}`);
};
const findByTitle = title => {
  return http.get(`/orders?title=${title}`);
};
const OrderService ={
getAll,
get,
create,
update,
remove,
findByTitle
}
export default OrderService;
