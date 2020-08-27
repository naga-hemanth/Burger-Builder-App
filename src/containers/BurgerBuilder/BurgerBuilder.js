import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice: 4,
        purchasable: false,
        isOrderClicked: false
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
        this.updatePurchaseState(updatedIngredients);
    }
    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(item => {
            return ingredients[item];
        }).reduce((old, curr) => old + curr, 0);
        this.setState({purchasable: sum > 0});
    }
    purchaseHandler = () => {
        this.setState({isOrderClicked: true});
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
        this.updatePurchaseState(updatedIngredients);
    }
    puchaseCancelHandler = () => {
        this.setState({isOrderClicked: false});
    }
    puchaseContinueHandler = () => {
        alert('You Continued!!!');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (<Aux>
            <Modal show={this.state.isOrderClicked} modalClosed={this.puchaseCancelHandler}>
                <OrderSummary
                    ingredients={this.state.ingredients}
                    prchaseCanceled={this.puchaseCancelHandler}
                    purchaseContinued={this.puchaseContinueHandler}
                    totalCost={this.state.totalPrice}
                />
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
                price={this.state.totalPrice}
                add={this.addIngredientHandler}
                remove={this.removeIngredientHandler}
                purchasable={this.state.purchasable}
                disabled={disabledInfo}
                ordered={this.purchaseHandler}
            />
        </Aux>);
    }
}

export default BurgerBuilder;