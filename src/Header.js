import React from 'react';
import benImage from './images/ben1.png';
import exclamationImage from './images/exclamation1.png';
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
    ben: {
        backgroundImage: `url(${benImage})`,
        width: 'auto',
        height: 'auto',
    },
    exclamation: {
        backgroundImage: `url(${exclamationImage})`,
        width: 'auto',
        height: 'auto',
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
                <img src={benImage} alt="ben" style={headerStyles.ben} />
            </div>
        </div>
    );
};


export default Header;
