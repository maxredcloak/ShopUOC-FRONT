import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Product.css";
import { getProductsFromCategory } from "../Api/Api";
import { Card, Space } from "antd";

const CategoryScreen = () => {
  const { id } = useParams();
  const [products, setproducts] = useState();
  useEffect(() => {
    getProductsFromCategory(id).then((ga) => setproducts(ga));
  }, [id]);

  return products ? (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Space size="middle">
        {products.map((p) => (
          <Link key={p.id + "link"} to={"/product/" + p.id}>
            <Card title={p.name} key={p.id} style={{ width: 300 }}>
              <p>{p.price}€</p>
            </Card>
          </Link>
        ))}
      </Space>
    </div>
  ) : (
    <></>
  );
};

export default CategoryScreen;
