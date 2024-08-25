import "./App.css";
import Animated from "./components/Animated";
import Navbar from "./components/Navbar";
import Bio from "./components/Body/Bio"
import Project from "./components/Body/Project";
import Experience from "./components/Body/Experience";
import Footer from "./components/Footer/Footer";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3521676-2945120.png?f=webp",
  "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
  // Add paths to your images here
];



const backgroundImage = "https://wallpapercave.com/wp/wp12516115.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Animated images={(images)} backgroundImage={backgroundImage}/>
      <Bio />
      <Project />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
