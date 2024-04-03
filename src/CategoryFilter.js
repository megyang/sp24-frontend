import React, { useState } from 'react';

const CategoryFilter = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        { name: 'Foodie', emoji: '🍔' },
        { name: 'Sports', emoji: '🏀' },
        // Add more categories as needed
    ];

    const containerStyle = {
        display: 'flex',
        gap: '10px',
        padding: '10px',
        // Add other styles as needed
    };

    const buttonStyle = isActive => ({
        padding: '2px 15px', // Reduced top and bottom padding and increased side padding
        border: '1px solid #ccc', // Changed to gray outline
        borderRadius: '15px', // Adjusted for smaller buttons
        backgroundColor: isActive ? '#555' : '#fff', // Changed to darker gray when selected
        color: isActive ? '#fff' : '#000',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontFamily: '"Baloo 2", cursive',
        fontWeight: 'bold',
        fontSize: '0.8rem', // Smaller font size
        outline: 'none',
        transition: 'background-color 0.3s',
        // Add other styles as needed
    });

    const toggleCategory = category => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    return (
        <div style={containerStyle}>
            {categories.map(category => {
                const isActive = activeCategory === category.name;
                return (
                    <button
                        key={category.name}
                        style={buttonStyle(isActive)}
                        onClick={() => toggleCategory(category.name)}
                    >
                        {category.emoji} {category.name}
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryFilter;
