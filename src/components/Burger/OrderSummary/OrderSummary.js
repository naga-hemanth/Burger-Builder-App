import React from "react";
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(item => <li key={item}><span style={{textTransform: 'capitalize'}}>{item}</span>:{props.ingredients[item]}
        </li>);
    return (<Aux>
        <h3>Your Order</h3>
        <p>A Delicious Burger</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to Checkout</p>
        <p><strong>Your Total Cost: {props.totalCost}</strong></p>
        <Button btnType="Danger" clicked={props.prchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>)
};

export default orderSummary;