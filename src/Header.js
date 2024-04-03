import React from 'react';
import confettiImage from './images/confetti.png';
import exclamationImage from './images/exclamation.png';
import ovalImage from "./images/oval.png";

const headerStyles = {
    container: {
        fontFamily: '"Baloo 2", cursive',
        color: '#000',
        padding: '20px',
        textAlign: 'left',
    },
    headerFlex: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '0px',
    },
    subtitle: {
        fontSize: '18px',
        marginTop: '0px',
        fontWeight: 'bold',
    },
    confetti: {
        backgroundImage: `url(${confettiImage})`,
        width: '100px',
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '100%',
        left: '679px',
        top: '115px',
    },
    exclamation: {
        backgroundImage: `url(${exclamationImage})`,
        width: 'auto',
        height: '70px',
        backgroundRepeat: 'no-repeat'
    }


};

const Header = () => {
    return (
        <div style={headerStyles.container}>
            <div style={headerStyles.headerFlex}>
                <div>
                    <div style={headerStyles.headerFlex}>
                        <h1 style={headerStyles.title}>Explore the Events@Penn</h1>
                        <img src={exclamationImage} alt="exclamation" style={headerStyles.exclamation} />
                    </div>
                    <p style={headerStyles.subtitle}>Take a look at what’s going on today 👀</p>
                </div>
                <img src={confettiImage} alt="confetti" style={headerStyles.confetti} />
            </div>
        </div>
    );
};


export default Header;
