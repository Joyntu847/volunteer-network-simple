import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import SearchArea from '../SearchArea/SearchArea';
import FakeData from '../../FakeData';
import HeroArea from '../HeroArea/HeroArea';

const Home = () => {
    const [info,setInfo] = useState([])

    useEffect( () => {
        fetch('http://localhost:4200/works')
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [info])

    return (
        <div className="main">
            <Header></Header>
            <SearchArea></SearchArea>
            <div className='row'>
              {
                 info.map(vn=><HeroArea key={vn.key} data={vn}></HeroArea>)
              }
            </div>
            
        </div>
    );
};

export default Home;