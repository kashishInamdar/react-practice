import './navbar.css';
import { Link } from "react-router-dom";
import logo from './logo.jpeg'
export default function navbar() {
    return(
        <div>
        <nav className="navbar navbar-expand-lg d-flex  bg-black border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid  dsplay-flex">
                <img src={logo} alt='logo' className="logo" />
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item ms-5">
                            <Link className="nav-link active fs-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link active fs-5" to="/">About</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link active fs-5" to="/">Project</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link active fs-5" to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>   
    </div>
    );
}