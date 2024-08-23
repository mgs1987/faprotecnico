import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="notfound-container-main">
      <h1 className="title-notfound">404 - Eror NOT FOUND</h1>
      <h1 className="title2-notfound">A dónde querés ir ?</h1>
      <Link to="/dashboard" className="link-notfound-dashboard">
        Home
      </Link>
    </div>
  );
}
