import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center pt-2 mt-4 border-top" id="footer">
            <div className="col-md-6 d-flex align-items-center">
                <Link to="/" href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src="../icons/gaia.png" alt="gaia logo" width="64" height="64"></img>
                </Link>
                <span className="mb-3 mb-md-0 text-muted">© 2022 Trabajo Academico, Universidad de Costa Rica</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <a href="https://github.com/YarethLeal/Gaia-Travels" target={"_blank"} className="ms-3 text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <title>Github</title>
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </ul>
        </footer>
    )
}