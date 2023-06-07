import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Menu } from "antd";
import { getCategories } from "../Api/Api";

import { BrowserRouter } from "react-router-dom";

import HeaderLayout from "./HeaderLayout";
import Mainmenu from "./MenuLayout";
import ContentLayout from "./ContentLayout";
import FooterLayout from "./FooterLayout";
const { Header, Footer, Sider, Content } = Layout;
const LayoutComponent = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategories().then((c) => setCategorias(c));
  }, []);

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ textAlign: "center", color: "white" }}>
          <HeaderLayout />
        </Header>
        <Layout>
          <Sider>
            <Mainmenu />
          </Sider>
          <Layout>
            <Content>
              <ContentLayout />
            </Content>
            <Footer>
              <FooterLayout />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
export default LayoutComponent;
