import { useState } from 'react';
import './App.css';
import "./Component/Card/Card"
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banners/Banner';
import Card from './Component/Card/Card';
import cardImg1 from "./Component/Card/cardImg1.png";
import cardImg2 from "./Component/Card/cardImg2.png";
import cardImg3 from "./Component/Card/cardImg3.png";

function App() {

  let [darkThem , setdarkThem] = useState(false)
  return (
    <div className={`App ${darkThem ? 'text-bg-dark' : ''}`}>
     <Navbar darkThem={darkThem} setdarkThem={setdarkThem}/>
     <Banner/>
     <div className='CardDiv row'>
     <Card imgSrc = {cardImg1} darkThem={darkThem} setdarkThem={setdarkThem}/>
     <Card imgSrc = {cardImg2} darkThem={darkThem} setdarkThem={setdarkThem}/>
     <Card imgSrc = {cardImg3} darkThem={darkThem} setdarkThem={setdarkThem}/>
     </div>
    </div>
  );
}

export default App;
