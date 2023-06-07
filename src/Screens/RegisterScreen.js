import { Form, Input, Card, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createBuyer } from "../Api/Api";
import { setUser } from "../Redux/user";
const RegisterScreen = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sendData = (formData) => {
    createBuyer(formData).then((e) => {
      dispatch(setUser(e));
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Card title="Registrarse" style={{ textAlign: "center" }}>
        {user && <Redirect to="/process" />}
        <Form
          onFinish={(f) => {
            sendData(f);
          }}
        >
          <Form.Item
            label="Nombre"
            name="name"
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
            label="Apellidos"
            name="surname"
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
            label="Direccion"
            name="address"
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
            label="Correo electronico"
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
        <Link to={"/login"}>Ya tienes cuenta?</Link>
      </Card>
    </div>
  );
};
export default RegisterScreen;
