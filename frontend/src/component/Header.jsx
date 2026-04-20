import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <section className="nav-wrapper">
            <Link to="/" className="logo"><h1>UiN26_17</h1></Link>
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Hjem</Link>
                    <Link to="/om-oss" className="nav-link">Om oss</Link>
                    <Link to="/arbeidskrav" className="nav-link">Arbeidskrav</Link>
                </nav>
            </section>
        </header>
    )
}