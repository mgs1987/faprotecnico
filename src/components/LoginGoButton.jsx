import { Link } from "react-router-dom";

const LoginGoButton = () => {
  return (
    <Link to="/login">
      <button className="login-go-button">Vamos a iniciar sesion</button>
    </Link>
  );
};
export default LoginGoButton;
