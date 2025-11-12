import './styles.css';
import logo_safehand from '../../assets/svg/logo_safehand.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ComponentHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="container_header">
            <img src={logo_safehand} alt="logo SafeHand" className='logo_header' />

            <nav className="navbar">
                <FontAwesomeIcon
                    icon={menuOpen ? faTimes : faBars}
                    onClick={toggleMenu}
                    className={`menu_icon ${menuOpen ? 'ativo' : ''}`}
                />

                <ul className={`menu_lateral ${menuOpen ? 'ativo' : ''}`}>
                    <li>
                        <Link to="" onClick={handleLinkClick}>Avisos</Link>
                    </li>
                    <li>
                        <Link to="" onClick={handleLinkClick}>Configurações</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default ComponentHeader;
