import { Link } from "react-router-dom";
export default function SignUpButton() {
  return (
    <>
      <Link to="/signup">
        <button className="font-ChakraPetch text-[20px] bg-white border border-purple-500 text-purple-500 px-10 py-2 shadow-md h-14 rounded-md">
          Registrate
        </button>
      </Link>
    </>
  );
}
