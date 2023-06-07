import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createOrder } from "../Api/Orders";
import CheckoutList from "../Components/Checkout/CheckoutList";
import UserInfo from "../Components/User/UserInfo";
import { clearCart } from "../Redux/cart";

const SumUpScreen = () => {
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sendData = (formData) => {
    const itemsToSend = items.map((i) => {
      return { id: i.id, quantity: i.quantity };
    });
    createOrder(user.token, itemsToSend).then(() => dispatch(clearCart()));
  };

  return user ? (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {items.length === 0 && <Redirect to="/orders" />}
      <Card
        title="Tu pedido"
        style={{
          textAlign: "center",
        }}
      >
        {items.length > 0 ? (
          <>
            <CheckoutList items={items} />
          </>
        ) : (
          <div>Carrito vacio!</div>
        )}
      </Card>
      <Card title="Direccion de envio" style={{ textAlign: "center" }}>
        <UserInfo user={user} />
      </Card>
      <Button type="primary" onClick={() => sendData()}>
        Submit
      </Button>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};
export default SumUpScreen;
