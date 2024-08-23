import { Link } from "react-router-dom";
export default function SignUpButton() {
  return (
    <>
      <Link to="/signup">
        <button className="signup-button">Registrate</button>
      </Link>
    </>
  );
}
