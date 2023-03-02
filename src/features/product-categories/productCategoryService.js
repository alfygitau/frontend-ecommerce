import { base_url } from "../../utils/config";

let getAllProductCategories = async () => {
  let res = await fetch(`${base_url}/api/product-category`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
};

let productCategoryService = { getAllProductCategories };
export default productCategoryService;
