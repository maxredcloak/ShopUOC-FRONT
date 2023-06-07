import axios from "axios";

const getOrdersByBuyerId = async (buyerId) => {
  try {
    const result = await axios.post("http://localhost/test/orders.php", {
      buyer: buyerId,
    });
    return result.data;
  } catch (error) {
    console.log("ERROR products", error);
  }
};

const createOrder = async (token, cart) => {
  try {
    console.log("CREATING");
    await axios.post("http://localhost/test/createOrder.php", {
      token: token,
      lines: cart,
    });
  } catch (error) {
    console.log("ERROR products", error);
  }
};

export { createOrder, getOrdersByBuyerId };
