export const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, props) => props.price + amount, 0);
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;