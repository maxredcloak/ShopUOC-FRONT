import { Form, Input, Space, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../Api/Api";
import React, { useState } from "react";

import { setUser } from "../Redux/user";

const LoginScreen = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const onLogin = (formData) => {
    login(formData).then((a) => {
      if (a.valid) {
        setError(false);
        dispatch(setUser(a));
      } else {
        setError(true);
      }
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {user && <Redirect to="/process" />}
      <Space size="middle">
        <Card title="Login" style={{ width: 300 }}>
          <Form
            onFinish={(f) => {
              onLogin(f);
            }}
          >
            <Form.Item
              label="Mail"
              name="mail"
              rules={[
                {
                  required: true,
                  message: "Requerido",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Requerido",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {error && (
              <div style={{ color: "red" }}>Credenciales incorrectas</div>
            )}
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
          <Link to={"/register"}>¿No tienes cuenta? registrate</Link>
        </Card>
      </Space>
    </div>
  );
};

export default LoginScreen;
