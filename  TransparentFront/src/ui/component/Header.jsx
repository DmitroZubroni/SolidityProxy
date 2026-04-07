import {AtlantContext} from "../../core/context.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";

const Header = () => {

    const {wallet, logout} = useContext(AtlantContext)

    return (
        <div className="navbar" style={{background: "purple", color: "white"}}>
            <h2>proxy</h2>
            {
                !wallet ?
                    <Link to="/" className="btn btn-primary"> авторизуйтесь</Link>
                    :
                    <>
                        <Link to="/" className="btn btn-primary"> функции</Link>
                        <Link to="/info" className="btn btn-primary"> информация</Link>
                        <Link to="/" className="btn btn-primary" onClick={logout} > выйти </Link>
                    </>
            }
        </div>
    )
}
export default Header;