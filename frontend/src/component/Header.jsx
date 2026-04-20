import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <section className="nav-wrapper"> {/* Nestet section i section for å bedre kunne splitte designet av headeren, uten å bruke div*/}
            <Link to="/" className="logo"><h1>UiN26_17</h1></Link>
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Hjem</Link>
                    <Link to="/om-oss" className="nav-link">Om oss</Link>
                    <Link to="/arbeidskrav" className="nav-link">Arbeidskrav</Link>
                </nav> {/* Laget til en provosorisk nav for design-grunner, kan fjernes om vi ikke finner funksjon ut av det. */}
            </section>
        </header>
    )
}