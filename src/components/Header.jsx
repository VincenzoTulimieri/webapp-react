// importazione file
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="vt-navbar">
            <div className="container vt-navbar-content">
                <div className="vt-navbar-left">
                    <Link to={'/'} className="vt-brand">
                        <img src="/logo-grande.png" alt="Movie Time logo" className="vt-logo" />
                        <span className="vt-brand-text">Movie Time</span>
                    </Link>
                </div>

                <nav className="vt-navbar-right">
                    <Link to="/" className="vt-nav-link">Home</Link>
                    <Link to="/movies" className="vt-nav-link">Film</Link>
                </nav>
            </div>
        </header>
    )
}