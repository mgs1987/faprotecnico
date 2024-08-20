import { Link } from "react-router-dom";
export default function LoginButton() {
  return (
    <Link to="/login">
      <button className="font-ChakraPetch text-[20px] bg-white border border-purple-500 text-purple-500 px-12 py-2 shadow-md h-14 rounded-md">
        Login
      </button>
    </Link>
  );
}
