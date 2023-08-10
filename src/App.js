 import logo from './logo.svg';
// import ImageSlider from "./ImageSlider";
 import './App.css';

// function App() {
//   const slides = [
//     { url: "sliderapp/src/pictures/download (1).jpeg", title: "beach" },
//     { url: "sliderapp/src/pictures/download.jpeg", title: "boat" },
//     { url: "/Users/santos/LocalPros/REACT JS /sliderapp/src/pictures/Red_Panda_(24986761703).jpg", title: "forest" },
//   ];
//   const containerStyles = {
//     width: "500px",
//     height: "280px",
//     margin: "0 auto",
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Santos
//           <container style={containerStyles}>
//         <ImageSlider slides={slides} />
//       </container>
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/image1.jpeg", title: "beach" },
    { url: "http://localhost:3000/image2.jpeg", title: "boat" },
    { url: "http://localhost:3000/image3.jpg", title: "forest" },
  ];
  const containerStyles = {
    width: "1000px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
      <p>Learning REACT</p>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      </header>
    </div>
  );
};

export default App;
