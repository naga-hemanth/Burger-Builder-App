import React from "react";
import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
const toolbar=(props)=>(
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo height="80%"/>
        <nav>
           <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;