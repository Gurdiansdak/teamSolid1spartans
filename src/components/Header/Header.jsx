import css from "./Header.module.css"
// import ellipse from "../../assets/Ellipse 22.svg"
import search from "../../assets/IconButton.svg"
import globus from "../../assets/OVERLAY COLOR.svg"
import logo from "../../assets/Logo (1).svg"
import Buttons from "./ButtonsHeader/Buttons"
import { Link } from "react-router-dom"
import darkMode from '../../assets/icons8-символ-луны-30.png'

function Header() {
  return (
    <div className={css.header}>
        <nav className="container">
            <div className={css.nav_Left}>
                <img src={logo} alt="Zone" />
                <Link to="/">Home</Link>
                <p>Components</p>
                <p>Pages</p>
                <p>Documentation</p>
            </div>

            <div className={css.nav_Right}>
                <div className={css.nav_RightImages}>
                    <img src={darkMode} alt="" />
                    <img src={search} alt="search" />
                    <img src={globus} alt="globus" />
                </div>
                <div className={css.navright_LoginOrJoin}>
                    <Buttons title={"Login"} variant="login"/>
                    <Buttons title={"Join Us"} variant="join"/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header