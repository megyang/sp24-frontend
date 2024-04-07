import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import SearchEvents from "./SearchEvents";
import CategoryFilter from "./CategoryFilter";
import ImageGrid from "./ImageGrid";
import image1 from './images/filler1.jpg';
import image2 from './images/filler2.jpg';
import image3 from './images/filler3.jpg';
import image4 from './images/filler4.jpg';
import image5 from './images/filler5.jpg';
import image6 from './images/filler6.jpg';
import image7 from './images/filler7.jpg';
import image8 from './images/filler8.jpg';
import image9 from './images/filler9.jpg';
import image10 from './images/filler10.jpg';
import image11 from './images/filler11.jpg';
import image12 from './images/filler12.jpg';
import image13 from './images/filler13.jpg';
import image14 from './images/filler14.jpg';
import image16 from './images/filler16.jpg';
import image17 from './images/filler17.jpg';
import image18 from './images/filler18.jpg';
import image19 from './images/filler19.jpg';
import Calendar from "./Calendar";
import { useState } from "react";
import background from "./images/paper.png";

const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
    { src: image7, alt: 'Image 1' },
    { src: image8, alt: 'Image 2' },
    { src: image9, alt: 'Image 3' },
    { src: image10, alt: 'Image 4' },
    { src: image11, alt: 'Image 5' },
    { src: image12, alt: 'Image 6' },
    { src: image13, alt: 'Image 1' },
    { src: image14, alt: 'Image 2' },
    { src: image16, alt: 'Image 4' },
    { src: image17, alt: 'Image 5' },
    { src: image18, alt: 'Image 6' },
    { src: image19, alt: 'Image 6' },
];

function App() {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'calendar'

    return (

        <div className="App">

            <Router>
                <div>
                    <NavBar/>
                    <Header/>
                    <SearchEvents viewMode={viewMode} setViewMode={setViewMode}/>
                    <CategoryFilter/>
                    <div className="content-container">
                        {viewMode === 'grid' ? <ImageGrid images={images}/> : <Calendar/>}
                    </div>
                </div>
            </Router>
            <ImageGrid images={images}/>
        </div>

    );
}

export default App;
