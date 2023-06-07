import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderLayout = () => {
  const { items } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    let newQtty = 0;
    items.forEach((element) => {
      newQtty += element.quantity;
    });
    setQuantity(newQtty);
  }, [items]);
  return (
    <div>
      articulos en la cesta: {quantity} <Link to="/checkout">Carrito</Link>
    </div>
  );
};

export default HeaderLayout;
