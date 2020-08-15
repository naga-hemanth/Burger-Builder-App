import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 5,
    cheese: 4,
    meat: 1,
    beacon: 7
};

class BurgerBuilder extends Component {
    //Can be done using the Construtor(Call super in it) also using this Key word
    state = {
        ingredients: {
            salad: 0,
            beacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }
    addIngredientHandler = (type) => {
        const oldcount = this.state.ingredients[type];
        const updatedCount = oldcount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const updatedPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        });
    }
    removeIngredientHandler = (type) => {
        const oldcount = this.state.ingredients[type];
        if (oldcount <= 0) {
            return;
        }
        const updatedCount = oldcount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (<Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
                add={this.addIngredientHandler}
                remove={this.removeIngredientHandler}
                disabled={disabledInfo}
            />
        </Aux>);
    }
}

export default BurgerBuilder;