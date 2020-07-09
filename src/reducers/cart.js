// 10. State Management Redux
const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD TO CART':
            alert('Product added to cart')
            console.log(action.product)
            state = [
                ...state,
                action.product
            ]
            return state;
        case 'CHECKOUT':
            if(state.length){
                state = [];
                alert('Checkout success')
            } else {
                alert('Cart is empty')
            }
            return state;
        default:
            return state;
    }
}

export default cart;