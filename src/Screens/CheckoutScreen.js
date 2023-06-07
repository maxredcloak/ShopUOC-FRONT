import { Space, Card, Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutList from "../Components/Checkout/CheckoutList";

const CheckoutScreen = () => {
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {items.length > 0 ? (
        <Card title="Articulos a comprar" style={{ textAlign: "center" }}>
          <CheckoutList key="Checklist" items={items} isEditable />
          {user ? (
            <Link to={"/process"}>
              <Button>Comprar</Button>
            </Link>
          ) : (
            <Link to={"/register"}>
              <Button>Registrarse</Button>
            </Link>
          )}
        </Card>
      ) : (
        <div>Carrito vacio!</div>
      )}
    </div>
  );
};
export default CheckoutScreen;
