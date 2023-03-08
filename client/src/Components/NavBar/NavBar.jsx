import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={style.navContainer}>
            <Link to="/home"> Home </Link>
            <Link to="/detail"> Detail </Link>
            <Link to="/create"> Create your adventure </Link>
        </div>
    )
}

export default NavBar