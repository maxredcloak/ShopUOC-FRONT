import { Card } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getOrdersByBuyerId } from "../Api/Orders";

const MyOrders = () => {
  const { user } = useSelector((state) => state.user);
  const [state, setstate] = useState();

  useEffect(() => {
    getOrdersByBuyerId(user?.token).then((e) => setstate(e));
  }, []);

  return user ? (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {state ? (
        state.map((o) => (
          <Card
            key={o.id}
            title={"Orden " + o.id}
            style={{ textAlign: "center" }}
          >
            {o.lines.map((l, i) => (
              <div key={o.id + i}>
                {l.name} - {l.quantity}
              </div>
            ))}
          </Card>
        ))
      ) : (
        <Card key="1" title="Ordenes" style={{ textAlign: "center" }}>
          <div>Historial vacio, compra algo!</div>
        </Card>
      )}
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default MyOrders;
