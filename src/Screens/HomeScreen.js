import { Card } from "antd";
import { Link } from "react-router-dom";

const HomeScreen = () => (
  <div
    style={{
      textAlign: "center",
    }}
  >
    <Card title="Bienvenido a la Web" style={{ textAlign: "center" }}>
      Si no estas aun registrado haz click <Link to={"/register"}>aqui</Link>
    </Card>
  </div>
);
export default HomeScreen;
