import { useEffect, useState } from "react";
import { getProductsFromId } from "../Api/Api";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cart";
import { Card, Space } from "antd";

const ProductDetailScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setitem] = useState();
  useEffect(() => {
    getProductsFromId(id).then((p) => {
      setitem(p);
    });
  }, []);

  return item ? (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Space size="middle">
        <Card title={item.name} style={{ width: 300 }}>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>{item.price}€</div>
          <button
            onClick={() => {
              dispatch(addItem(item));
            }}
          >
            Al carrito
          </button>
        </Card>
      </Space>
    </div>
  ) : (
    <></>
  );
};

export default ProductDetailScreen;
