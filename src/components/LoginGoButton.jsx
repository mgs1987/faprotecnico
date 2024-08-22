import { Link } from "react-router-dom";

const LoginGoButton = () => {
  return (
    <Link to="/login">
      <button className="font-ChakraPetch text-[18px] bg-white border border-purple-500 text-purple-500 px-12 py-2 shadow-md h-14 rounded-md m-3">
        Vamos a iniciar sesion
      </button>
    </Link>
  );
};
export default LoginGoButton;
