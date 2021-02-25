import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories,createProduct,getproduct,updateProduct } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";

const UpdateProduct = ({match}) => {
    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
      productName: "",
      description: "",
      price: "",
      stock: "",
      photo: "",
      categories: [],
      category: "",
      loading: false,
      error: "",
      createdProduct: "",
      getaRedirect: false,
      formData: "",
    });
    const {
      productName,
      description,
      price,
      stock,
      photo,
      categories,
      category,
      loading,
      error,
      createdProduct,
      getaRedirect,
      formData,
    } = values;
  
    const preload = productId => {
        getproduct(productId).then(data =>{
            if(data.error){
                setValues({...values, error : data.error})
            }
            else {
                setValues({...values,
                    productName : data.productName,
                    description : data.description,
                    price : data.price,
                    category : data.category,
                    stock : data.stock,
                    formData : new FormData()
                })
                //console.table(categories)
            }
        })
    };
  
    useEffect(()=>{
       preload(match.params.productId) 
    }, [])
    const onSubmit = (event) => {
      event.preventDefault();
      setValues({...values, error : false,loading : true})
      updateProduct(user._id, token, formData).then(data =>{
        if(data.error){
          setValues({...values, error: data.error})
        }
        else{
          setValues({
            ...values,
            productName: "",
            description: "",
            price: "",
            stock: "",
            photo: "",
            loading: false,
            createdProduct: data.name,
          })
        }
      });
  
    };
  
    const successMesage = () =>{
      return(
      <div className="alert alert-success mt-3" style={{display : createdProduct ? "block" : "none"}}>
        <h4>{createdProduct} Crearted Product</h4>
  
      </div>
      );
    }
  
    const warningMesage = () =>{
      return(
      <div className="alert alert-danger mt-3" style={{display : error ? "block" : "none"}}>
        <h4>{createdProduct} Unable to Crearte Product</h4>
  
      </div>
      );
    }
  
    const handleChange = name => event => {
      const value = name ==="photo" ? event.target.files[0] : event.target.value;
      formData.set(name, value);
      setValues({...values, [name]: value })
    };
  
    const createProductForm = () => (
      <form>
        <span>Post photo</span>
        <div className="form-group">
          <label className="btn btn-block btn-success">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image"
              placeholder="choose a file"
            />
          </label>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("productName")}
            name="photo"
            className="form-control"
            placeholder="Name"
            value={productName}
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange("description")}
            name="photo"
            className="form-control"
            placeholder="Description"
            value={description}
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("price")}
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
          />
        </div>
        <div className="form-group">
          <select
            onChange={handleChange("category")}
            className="form-control"
            placeholder="Category"
          >
            <option>Select</option>
            {/* { Object.keys(categories).forEach(function(key) {
                console.log(categories[key])
      })} */}
             { categories && categories.map((cate, index)=>{
               return( <option key={index} value={cate._id}>{cate.name}</option>)
             })}
            
            <option value="b">b</option>
          </select>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("stock")}
            type="number"
            className="form-control"
            placeholder="stock"
            value={stock}
          />
        </div>
  
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-success mb-3"
        >
          Create Product
        </button>
      </form>
    );
    return (
      <Base
        title="Add Product"
        description="Welcome to Product Creation Section"
        className="container bg-info p-4"
      >
        <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
          Admin Home
        </Link>
        <div className="row bg-dark text-white rounded">
          <div className="col-md-8 offset-md-2">{successMesage()}{warningMesage()}{createProductForm()}</div>
        </div>
      </Base>
    );
  };
  
export default UpdateProduct;
