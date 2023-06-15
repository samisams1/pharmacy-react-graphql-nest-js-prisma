import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct,deleteProduct, listProducts, updteProduct } from "../../../actions/products";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const saveProduct = (data) => {
     const name=data.name;
     const brand=data.brand;
     const category=data.category;
     const tag=data.tag;
     const image=data.image;
     const quantity = data.quantity;
     const price= data.price;
     const details=data.details;
      dispatch(createProduct(name, brand,category,tag,image,quantity,price,details))
        .then(data => {
         console.log(data)
        })
        .catch(e => {
          console.log(e);
        });
    };
    return  {saveProduct};
}
const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]); 
    console.log("products")
    console.log(products)
  return {
      products
  }
  };
const UpdateProduct = (id,data) => {
  const dispatch = useDispatch();
  dispatch(updteProduct(id, data))
    .then(response => {
      console.log(response);
      //setMessage("The tutorial was updated successfully!");
    })
    .catch(e => {
      console.log(e);
    });
};

const DeleteProduct = (props) => {
  const dispatch = useDispatch();
  dispatch(deleteProduct(props.ProductListid))
    .then(() => {
      props.history.push("/products");
    })
    .catch(e => {
      console.log(e);
    });
};

const Product={
 CreateProduct,
 ProductList,
 UpdateProduct,
 DeleteProduct,
}

export default Product;
