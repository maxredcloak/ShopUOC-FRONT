import React, { useLayoutEffect, useState } from "react";

import "antd/dist/antd.css";
import "../index.css";
import { Menu } from "antd";
import {
  HomeOutlined,
  DownloadOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getCategories } from "../Api/Api";
import { useSelector } from "react-redux";

const MenuLayout = () => {
  const { user } = useSelector((state) => state.user);
  const [categorias, setCategorias] = useState([]);

  useLayoutEffect(() => {
    getCategories().then((c) => setCategorias(c));
  }, []);

  return (
    <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<MailOutlined />}>
        {user ? (
          <Link to="/orders">Mis Compras</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Menu.Item>
      <Menu.SubMenu key="sub1" icon={<DownloadOutlined />} title="Categorias">
        {categorias?.length > 0 &&
          categorias.map((c) => (
            <Menu.Item key={"cat" + c.id}>
              <Link to={"/categories/" + c.id}>{c.name}</Link>
            </Menu.Item>
          ))}
      </Menu.SubMenu>
    </Menu>
  );
};
export default MenuLayout;
