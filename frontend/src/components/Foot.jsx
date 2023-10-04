import "../styles/footer.css";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <footer>
      <div className="Footer">
        <div className="icons">
          <div className="img twitter">
            <Link to="/Twitter">
              <img
                src="https://cdn.discordapp.com/attachments/1146802881538834433/1149618248120274944/twitter-x-logo-101C7D2420-seeklogo.com.png"
                alt=""
              />
            </Link>
          </div>

          <div className="img instagram">
            <Link to="/Instagram">
              <img
                src="https://cdn.discordapp.com/attachments/1145700870131040297/1149633209362022480/instagram.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="onglets">
          <div className="contact">
            <Link to="/Contactez-vous">Contactez nous</Link>
          </div>

          <div className="cookies">
            <Link to="/Cookies">Préférences cookies</Link>
          </div>

          <div className="utilisations">
            <Link to="/blablabla">Conditions d'utilisations</Link>
          </div>

          <div className="medias">
            <Link to="/Medias">Centre de médias</Link>
          </div>
        </div>

        <p className="copyright">
          {" "}
          Copyright © 2023 Cinematcher. tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Foot;
