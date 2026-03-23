import { NavLink } from 'react-router-dom';
import { files } from './data';

function getLinkClassName({ isActive }) {
    return isActive ? 'navbar-link is-active' : 'navbar-link';
}

export default function NavMenu() {
    return (
        <nav className="navbar" aria-label="SCP subject navigation">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink to="/" end className={getLinkClassName}>
                        Home
                    </NavLink>
                </li>
                {files.map((file) => (
                    <li key={file.Subject} className="navbar-item">
                        <NavLink to={`/${file.Subject}`} className={getLinkClassName}>
                            {file.Subject}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}