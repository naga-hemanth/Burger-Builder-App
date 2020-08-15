import React from "react";
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //Task is to take map from props and add it to middle of top and bottom
    let transformedIngredients = Object.keys(props.ingredients)
        .map((name) => {
            return [...Array(props.ingredients[name])]
                .map((_, index) => <BurgerIngredient key={name + index} type={name}/>);
        })
        //first - prev value ,second -> Currunt value //This adds all Arrays to single Array
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (<div className={styles.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>);
};

export default burger;