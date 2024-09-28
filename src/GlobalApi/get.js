const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:1337/api",
});

const getProducts = () => {
  return axiosClient.get("/products?populate=*").then((response) => {
    return response.data.data;
  });
};

// Function to fetch filtered product by ID
const getFilteredProducts = (id) => {
  return axiosClient.get(`/products/${id}?populate=*`).then((response) => {
    return response.data.data;
  });
};

// You can add more API functions here if needed

export default {
  getFilteredProducts,
  getProducts,
};
