import { base_url } from "../../utils/config";

const getAllProducts = async () => {
  let res = await fetch(`${base_url}/api/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

let getSingleProduct = async (id) => {
  let res = await fetch(`${base_url}/api/product/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

let getFeaturedProducts = async (tagname) => {
  let res = await fetch(`${base_url}/api/product?tags=${tagname}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

let getPopularProducts = async (tagname) => {
  let res = await fetch(`${base_url}/api/product?tags=${tagname}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

let getSpecialProducts = async (tagname) => {
  let res = await fetch(`${base_url}/api/product?tags=${tagname}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

let getSpecificCategoryProducts = async (category) => {
  let res = await fetch(`${base_url}/api/product?category=${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

let searchProducts = async (query) => {
  let res = await fetch(`${base_url}/api/product/search?title=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

const productService = {
  getAllProducts,
  getSingleProduct,
  getFeaturedProducts,
  getPopularProducts,
  getSpecialProducts,
  getSpecificCategoryProducts,
  searchProducts
};
export default productService;
