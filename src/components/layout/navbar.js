import { Link } from "react-router-dom"
import "../../style/navbar.css"
export default function NavBar({ children }) {
    const loginLi = () => {
        if (sessionStorage.getItem("user")) {
            return (
                <>
                    <Link to="" href='#' className="align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="navbar-nav-svg d-inline-block" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <strong className=""> {sessionStorage.getItem("user")}</strong>
                    </Link>
                </>);
        } else {
            return (
                <>
                    <div className="navbar-nav">
                        <Link to="/Login" href='#' className="nav-item nav-link p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="navbar-nav-svg d-inline-block" viewBox="0 0 16 16">
                                <title>Iniciar Sesion</title>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <strong className=""> Iniciar Sesion</strong>
                        </Link>
                    </div>
                </>);
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bd-navbar fixed-top bg-dark">
                <div className="container-xxl flex-wrap flex-md-nowrap">
                    <Link to="/" href='#' className="navbar-brand">
                        <img src="../icons/gaia.png" alt="gaia logo" width="36" height="36"></img>
                        <span>Gaia Travels</span>
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
                            <li class="nav-item col-6 col-md-auto">
                                <Link to="/Paquetes" href='#' className="nav-link p-2">
                                    Paquetes
                                </Link>
                            </li>
                            <li class="nav-item col-6 col-md-auto">
                                <Link to="/Empresas" href='#' className="nav-link p-2">
                                    Empresas
                                </Link>
                            </li>
                            <li class="nav-item col-6 col-md-auto">
                                <Link to="/Mapa" href='#' className="nav-link p-2">
                                    Mapa
                                </Link>
                            </li>
                        </ul>
                        <hr className="d-md-none text-white-50" />
                        <div className="flex-row flex-wrap ms-md-auto col-6 col-md-auto">
                            {loginLi()}
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li>
                                    <Link to="/Favoritos" href='#' className="dropdown-item">
                                        Favoritos
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <Link to="" href='#' className="dropdown-item">
                                        Salir
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}