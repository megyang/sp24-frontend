import React, {useState} from 'react';
import ovalImage from './images/oval.png';
import sparkImage from './images/spark.png'; // Import the spark image
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const styles = {
    iconSpacing: {
        display: 'flex',
        justifyContent: 'space-between',
        gap:'5px',
        alignItems: 'center',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: '20px',
        position: 'relative',
    },
    logo: {
        fontSize: '15px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
    },
    sparkImage: {
        marginBottom: '20px',
        width: '20px',
        height: 'auto',
    },
    navItems: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
    },
    navItem: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '15px',
        fontWeight: 'bold',
        padding: '5px 10px',
        borderRadius: '25px',
        border: '2px solid transparent',
        cursor: 'pointer',
        display: 'inline-block',
        width: '100px',
        height: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    navItemActive: {
        backgroundImage: `url(${ovalImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
        width: '100px',
        height: '20px',
        lineHeight: '20px',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#555',
        color: 'white',
        border: 'none',
        padding: '5px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: "'Baloo 2', cursive",
        fontWeight: 'bold',
        marginLeft: '22px'
    },
    lineContainer: {
        height: '10px',
    },
    line1: {
        height: '4px',
        backgroundColor: 'black',
        marginTop: '10px',
    },
    line2: {
        height: '2px',
        backgroundColor: 'black',
        marginTop: '5px',
    },
};

const NavBar = () => {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <nav style={styles.navBar}>
                <span style={styles.logo}>
                    By Penn Spark
                    <img src={sparkImage} alt="Penn Spark" style={styles.sparkImage} />
                </span>
                <div style={styles.navItems}>
                    <a href="/explore" style={{ ...styles.navItem, ...(isActive('/explore') ? styles.navItemActive : {}) }}>
                        Explore
                    </a>
                    <a href="/about" style={{ ...styles.navItem, ...(isActive('/about') ? styles.navItemActive : {}) }}>
                        About
                    </a>
                    {isAuthenticated ? (
                    <a href="/profile" style={{ ...styles.navItem, ...(isActive('/profile') ? styles.navItemActive : {}) }}>
                        <div style={styles.iconSpacing}>
                            <FontAwesomeIcon icon={faUser} />
                            <span> Organizer</span>

                        </div>

                    </a>

                    ) : (
                        <button onClick={handleLogin} style={styles.button}>Club Login</button>
                    )}
                </div>
            </nav>
            <div style={styles.lineContainer}>
                <div style={styles.line1}></div>
                <div style={styles.line2}></div>
            </div>
        </div>
    );
};

export default NavBar;
