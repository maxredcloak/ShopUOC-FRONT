import axios from "axios";

const getCategories = async () => {
  try {
    const result = await axios.get(`http://localhost/test/categories.php`);

    return result.data;
  } catch (error) {
    console.log("ERROR categories", error);
  }
};

const getProductsFromCategory = async (categoryId) => {
  try {
    const result = await axios.get(
      `http://localhost/test/products.php?category=${categoryId}`
    );

    return result.data;
  } catch (error) {
    console.log("ERROR products", error);
  }
};
const getProductsFromId = async (productId) => {
  try {
    const result = await axios.get(
      `http://localhost/test/products.php?id=${productId}`
    );

    return result.data[0];
  } catch (error) {
    console.log("ERROR products", error);
  }
};

const createBuyer = async (formData) => {
  try {
    console.log("CREATING", formData);
    const result = await axios.post(
      "http://localhost/test/buyers.php",
      formData
    );
    return result.data;
  } catch (error) {
    console.log("ERROR products", error);
  }
};

const login = async (username) => {
  try {
    console.log("LOGIN");
    const result = await axios.post(
      "http://localhost/test/login.php",
      username
    );
    return result.data;
  } catch (error) {
    console.log("ERROR login", error);
  }
};

export {
  getCategories,
  getProductsFromCategory,
  getProductsFromId,
  createBuyer,
  login,
};
