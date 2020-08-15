import React from "react";
import Aux from '../../hoc/Aux';
import styles from './layout.module.css';

const layout=(props)=>(<Aux>
    <div>Toolbar,Sidebar,Backdrop</div>
    <main className={styles.Content}>
        {props.children}
    </main>
</Aux>)

export default layout;