import Logo from "../../../assets/images/logo.png";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerLine">
            <img src={Logo} alt="" />
            <ul>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram-square"></i>
            </ul>
           <a target="blank" href="https://sukuna18.github.io/bella-orange/"> <p>Copywright 2020 Bella Onojie.com</p></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
