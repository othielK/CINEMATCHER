import { Link } from "react-router-dom";
import "../styles/Pagenotfound.css";

export default function NotFound() {
  return (
    <div className="Oops">
      <h1>Oops ! Tu sembles perdu.e</h1>
      <Link className="cta-homepage" to="/">
        Accueil
      </Link>
    </div>
  );
}
