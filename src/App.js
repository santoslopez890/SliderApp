 import logo from './logo.svg';

 import './App.css';
import ImageSlider from "./ImageSlider";
import React from 'react';
const App = () => {
  const slides = [
    { url: "http://localhost:3000/image1.png", title: "slide1" },
    { url: "http://localhost:3000/image2.png", title: "slide2" },
    { url: "http://localhost:3000/image3.png", title: "slide3" },
    { url: "http://localhost:3000/image4.png", title: "slide4" },
    { url: "http://localhost:3000/image5.png", title: "slide5" },
    { url: "http://localhost:3000/image6.png", title: "slide6" },
    { url: "http://localhost:3000/image7.png", title: "slide7" },
    { url: "http://localhost:3000/image8.png", title: "slide8" },
    { url: "http://localhost:3000/image9.png", title: "slide9" },
    { url: "http://localhost:3000/image10.png", title: "slide10" },
    { url: "http://localhost:3000/image13.jpg", title: "slide13" },
  ];

  const containerStyles = {
    width: "1300px",
    height: "650px",
    margin: "0 auto",
  };
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         
        
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    
      </header>
      
    </div>
    
  );
};

export default App;
