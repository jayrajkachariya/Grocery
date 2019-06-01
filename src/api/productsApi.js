export const URL = "https://afternoon-sea-57192.herokuapp.com/api/v1";

const fetchAllProducts = async page => {
  const response = await fetch(`${URL}/products/getAllProducts`);
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.message);
  }
  return data.products;
};

const fetchProductDetails = async productName => {
  const response = await fetch(`${URL}/products/getProduct`, {
    method: 'POST',
    body: JSON.stringify({productName: productName}),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.message);
  }
  return data.product;
};

export { fetchAllProducts, fetchProductDetails };
