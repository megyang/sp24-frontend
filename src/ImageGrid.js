import React, { useRef, useState, useEffect } from 'react';
import background from "./images/paper.png";

const gridStyles = {
    imageGrid: {
        position: 'relative',
        margin: '0 auto',
        maxWidth: '1200px',
        minHeight:'500px',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    gridItem: {
        position: 'relative',
        marginBottom: '20px',
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '10px',
        backgroundColor: 'transparent',

    },
    image: {
        display: 'block',
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        maxWidth: '300px',
        transition: 'transform 0.3s ease-in-out',
        backgroundColor: 'transparent',

    },
    imageText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',

    },
    gridItemHovered: {
        zIndex: 1, 
    },
};


const ImageGrid = ({ images }) => {
    const [columns, setColumns] = useState(4); // Number of columns
    const columnRefs = useRef(Array.from({ length: columns }, () => React.createRef()));
    const [columnElements, setColumnElements] = useState(Array.from({ length: columns }, () => []));
    const [hoveredIndex, setHoveredIndex] = useState(null); // Index of hovered image

    useEffect(() => {

        const handleResize = () => {
            // Calculate number of columns based on container width
            const containerWidth = columnRefs.current[0].current.parentNode.offsetWidth;
            const newColumns = Math.ceil(containerWidth / 320); // Adjust the width as needed
            setColumns(newColumns || 1); // Ensure at least one column

            // Reset column elements
            setColumnElements(Array.from({ length: newColumns }, () => []));
        };

        handleResize(); // Initial setup
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Function to distribute items to columns after all items have been rendered
        const distributeItemsToColumns = () => {
            images.forEach((image, index) => {
                const item = (
                    <div
                        key={index}
                        style={{ ...gridStyles.gridItem, ...(index === hoveredIndex && gridStyles.gridItemHovered) }}
                    >
                        <img src={image.src} alt={image.alt} style={gridStyles.image} />
                    </div>
                );

                const columnIndex = index % columns;
                setColumnElements(prevColumnElements => {
                    const newColumnElements = [...prevColumnElements];
                    if (!Array.isArray(newColumnElements[columnIndex])) {
                        newColumnElements[columnIndex] = []; // Initialize as array if not already
                    }
                    newColumnElements[columnIndex].push(item);
                    return newColumnElements;
                });
            });
        };

        distributeItemsToColumns();
    }, [images, columns, hoveredIndex]);

    return (
        <div>
            <div style={gridStyles.imageGrid}>
                {[...Array(columns)].map((_, index) => (
                    <div key={index} ref={columnRefs.current[index]}
                         style={{width: `${100 / columns}%`, float: 'left'}}>
                        {columnElements[index]}
                    </div>
                ))}
            </div>

            </div>

    );
};

export default ImageGrid;
