import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import ProductBlock from './ProductBlock';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div>
                <h2 className="checkout_title">Your shopping Basket</h2>
                {basket.map(item=>(
                    <CheckoutProduct
                        id={item.title} item={item}/>
                ))}
            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;