import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

/**
 * 3. Function Component
 * 6. Extracting Component
 */
function Cart() {
    // 10. State Management Redux
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    // 8. Hooks
    const [totalPrice, setTotalPrice] = useState(0)

    // 8. Hooks
    // 4. LifeCycle Method
    useEffect(() => {
        console.log(products)
        let total = 0;
        cart.map((product, index) => {
            total += product.price
        })
        setTotalPrice(total)
    }, [])

    const checkout = () => {
        // 10. State Management Redux
        dispatch({ type: 'CHECKOUT' })
        setTotalPrice(0)
    }
    
    return (
        <div className="container">
            <h2>Cart</h2> 

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Name</td>  
                        <td>Price</td>  
                    </tr>
                </thead>
                <tbody>
                    {/* 12. Lists */}
                    {cart.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>US${product.price}</td>
                            </tr>                        
                        )
                    })} 
                </tbody> 
                <tfoot>
                    <tr>
                        <td>Total</td>  
                        <td>US${ totalPrice } </td>  
                    </tr>
                </tfoot>             
                
            </table> 

            <button className="btn btn-primary" onClick={checkout}>Checkout</button>
        </div>        
    );
        
}

export default Cart;
