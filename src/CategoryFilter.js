import React, { useState } from 'react';

const CategoryFilter = () => {
    const [activeCategories, setActiveCategories] = useState([]);

    const categories = [
        { name: 'Foodie', emoji: '🍔' },
        { name: 'Sports', emoji: '🏀' },
        { name: 'Cultural', emoji: '🌍' },
        { name: 'Performing Arts', emoji: '🎭' },
        { name: 'Fine Arts', emoji: '🎨' },
        { name: 'Party', emoji: '🎉' },
        { name: 'Promos', emoji: '🎟️' },
        { name: 'Miscellaneous', emoji: '🔮' },
    ];

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '10px',
    };

    const buttonStyle = isActive => ({
        padding: '2px 15px',
        border: '1px solid #ccc',
        borderRadius: '15px',
        backgroundColor: isActive ? '#555' : '#fff',
        color: isActive ? '#fff' : '#000',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontFamily: '"Baloo 2", cursive',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        outline: 'none',
        transition: 'background-color 0.3s',
    });

    const toggleCategory = category => {
        // check if the category is already active
        const isAlreadyActive = activeCategories.includes(category);

        if (isAlreadyActive) {
            // remove the category from active categories
            setActiveCategories(activeCategories.filter(c => c !== category));
        } else {
            // add the category to active categories
            setActiveCategories([...activeCategories, category]);
        }
    };

    return (
        <div style={containerStyle}>
            {categories.map(category => {
                const isActive = activeCategories.includes(category.name);
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
