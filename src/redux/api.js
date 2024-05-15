import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
});

  const login = (formData)=>api.post("/auth/login",formData)
  
  // products 
  const addProduct = (formData)=>api.post("/products/add",formData);

  const getAllProduct = ()=>api.get("/products")

  const deleteProduct = (productId)=>api.delete(`/products/${productId}`)

  const updateProduct = (formData)=>api.put(`/products/${formData.id}`,formData)



  export {
    login,
    addProduct,
    getAllProduct,
    deleteProduct,
    updateProduct
  }