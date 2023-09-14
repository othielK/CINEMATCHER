function Foot() {
  return (
    <footer>
      <div className="Footer">
        <div className="icons">
          <div className="img twitter">
            <img
              src="https://cdn.discordapp.com/attachments/1146802881538834433/1149618248120274944/twitter-x-logo-101C7D2420-seeklogo.com.png"
              alt=""
            />
          </div>

          <div className="img instagram">
            <img
              src="https://cdn.discordapp.com/attachments/1145700870131040297/1149633209362022480/instagram.png"
              alt=""
            />
          </div>
        </div>

        <div className="onglets">
          <div className="contact">
            <h2>Contactez nous</h2>
          </div>

          <div className="cookies">
            <h2>Préférences cookies</h2>
          </div>

          <div className="utilisations">
            <h2>Conditions d'utilisations</h2>
          </div>

          <div className="medias">
            <h2>Centre de médias</h2>
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
