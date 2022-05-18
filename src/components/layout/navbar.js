import { Link } from "react-router-dom"
import "../../style/navbar.css"
export default function NavBar({ children }) {

    return (
        <>
            <nav class="navbar navbar-expand-md navbar-dark bd-navbar fixed-top bg-dark">
                <div class="container-xxl flex-wrap flex-md-nowrap">
                    <Link to="/" href='#' className="navbar-brand">
                        <span>Gaia Travels</span>
                    </Link>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse" id="navbarCollapse">
                        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
                            <li class="nav-item col-6 col-md-auto">
                                <Link to="/" href='#' className="nav-link p-2">
                                    Inicio
                                </Link>
                            </li>
                            <li class="nav-item col-6 col-md-auto">
                                <Link to="/" href='#' className="nav-link p-2">
                                    Paquetes
                                </Link>
                            </li>
                            <li class="nav-item col-6 col-md-auto">
                                <Link to="/" href='#' className="nav-link p-2">
                                    Empresas
                                </Link>
                            </li>
                            <li class="nav-item col-6 col-md-auto">
                                <Link to="/Login" href='#' className="nav-link p-2">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}