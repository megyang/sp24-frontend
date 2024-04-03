import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon

const SearchEvents = ({ viewMode, setViewMode }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [ordering, setOrdering] = useState('Ordering');
    const [time, setTime] = useState('Time');
    const [location, setLocation] = useState('Location');

    const containerStyle = {
        display: 'flex',
        justifyContent: 'flex-start', // Align children to the left
        alignItems: 'center',
        background: 'transparent',
        padding: '10px',
        borderRadius: '4px',
    };

    const leftGroupStyle = {
        display: 'flex',
        flex: '1', // allow this group to grow and push the toggle buttons to the right
        alignItems: 'center',
    };

    const inputGroupStyle = {
        display: 'flex',
        alignItems: 'center',
        marginRight: '30px' // add spacing between search input and dropdowns
    };

    const inputStyle = {
        border: '0px solid #ccc',
        padding: '10px 30px 10px 10px', // adjust padding to accommodate the icon
        borderRadius: '4px',
        width: '100%',
        maxWidth: '200px',
        background: '#efefef',
        color: '#555',
        fontFamily: '"Baloo 2", cursive',
        fontWeight: 'bold',
        outline: 'none',
        flex: '1' // Allow input to grow to fill available space
    };

    const iconStyle = {
        marginLeft: '-25px', // Adjust to overlay icon on input field

        cursor: 'pointer'
    };

    const dropdownStyle = {
        border: '0px solid #ccc',
        padding: '10px 15px',
        borderRadius: '4px',
        background: '#efefef',
        color: '#555',
        fontFamily: '"Baloo 2", cursive',
        fontWeight: 'bold',
        outline: 'none',
        cursor: 'pointer',
        marginLeft: '30px' // Add a little space between dropdowns
    };


    const toggleContainerStyle = {
        display: 'flex',
        background: '#555',
        borderRadius: '20px',
        padding: '4px',
        height: '28px',
        fontFamily: '"Baloo 2", cursive',
        fontWeight: 'bold',
        color: '#fff',
        cursor: 'pointer'
    };

    const toggleStyle = selected => ({
        padding: '5px 5px',
        borderRadius: '20px',
        background: selected ? '#fff' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });

    return (
        <div style={containerStyle}>
            <div style={leftGroupStyle}>
                <div style={inputGroupStyle}>
                    <input
                        type="text"
                        placeholder="search for events"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        style={inputStyle}
                    />
                    <FontAwesomeIcon icon={faSearch} style={iconStyle} />
                </div>
                <select style={dropdownStyle} value={ordering} onChange={e => setOrdering(e.target.value)}>
                    <option value="Ordering">Ordering</option>
                </select>
                <select style={dropdownStyle} value={time} onChange={e => setTime(e.target.value)}>
                    <option value="Time">Time</option>
                    {/* Add other options here */}
                </select>
                <select style={dropdownStyle} value={location} onChange={e => setLocation(e.target.value)}>
                    <option value="Location">Location</option>
                    {/* Add other options here */}
                </select>
            </div>
            <div style={toggleContainerStyle}>
                <div style={toggleStyle(viewMode === 'grid')} onClick={() => setViewMode('grid')}>
                    Grid
                </div>
                <div style={toggleStyle(viewMode === 'calendar')} onClick={() => setViewMode('calendar')}>
                    Calendar
                </div>
            </div>
        </div>
    );
};

export default SearchEvents;
