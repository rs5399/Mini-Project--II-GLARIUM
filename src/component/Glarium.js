import React from 'react';
import '../css/Glarium.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from './Widget';


function Glarium(){
    return (
        <div className = "glarium"> 
            <Navbar />
            <div className = "glarium_content">
                <Sidebar />
                <Feed />
                <Widget/>
            </div>
        </div>
    );
}

export default Glarium;