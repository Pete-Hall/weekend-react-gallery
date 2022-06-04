import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Axios from 'axios';

function App() {

    const [moments, setMoments] = useState([]);

    useEffect(()=>{
      getMoments();
    }, []);

    const getMoments=()=>{
      Axios.get('/gallery').then((response)=>{
        setMoments(response.data);
      }).catch((err)=>{
        console.log(err);
        alert('error getting moments');
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList moments = {moments}/>
      </div>
    );
}

export default App;
