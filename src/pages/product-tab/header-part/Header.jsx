import React from "react";
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { View } from "antd-mobile";
import './sticky.css';
import NetworkDetector from '../../../cores/NetworkDetector';
const Header = () => {
    return (
       
        <View >
            <NetworkDetector />
            <NavBar />
            <SearchBar />
        </View>
   
    )
};


export default Header;
