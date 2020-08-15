import styles from './BurgerIngredient.module.css'
import React from "react";
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={styles.Meat}></div>;
            break;
        case ('beacon'):
            ingredient = <div className={styles.Bacon}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={styles.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={styles.Salad}></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
};
//Look if this is Types or type
burgerIngredient.prototype = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;