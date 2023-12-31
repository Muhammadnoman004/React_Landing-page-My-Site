import './App.css';
import "./Component/Card/Card"
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banners/Banner';
import Card from './Component/Card/Card';
import cardImg1 from "./Component/Card/cardImg1.png";
import cardImg2 from "./Component/Card/cardImg2.png";
import cardImg3 from "./Component/Card/cardImg3.png";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <div className='CardDiv'>
     <Card imgSrc = {cardImg1}/>
     <Card imgSrc = {cardImg2}/>
     <Card imgSrc = {cardImg3}/>
     </div>
    </div>
  );
}

export default App;
