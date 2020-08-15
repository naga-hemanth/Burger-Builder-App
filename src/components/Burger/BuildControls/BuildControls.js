import React from "react";
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'beacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(ctrl => <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.add(ctrl.type)}
            removed={() => props.remove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
        />)}
    </div>);

export default buildControls;
