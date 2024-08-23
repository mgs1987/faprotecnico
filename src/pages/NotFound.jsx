import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="h-screen bg-purple-300 flex justify-center items-center flex-col">
      <h1 className="font-ChakraPetch text-purple-500 text-[60px]">
        404 - Eror NOT FOUND
      </h1>
      <h1 className="font-ChakraPetch text-white text-[60px]">
        A dónde querés ir ?
      </h1>
      <Link
        to="/dashboard"
        className="font-ChakraPetch text-purple-500 text-[40px] my-10 underline"
      >
        Home
      </Link>
    </div>
  );
}
