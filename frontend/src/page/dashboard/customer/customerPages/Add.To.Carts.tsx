import { useCart } from "./contextConnections/Add.To.Cart.Context";
import { Trash2 } from "lucide-react";
import '../../../../style/customerPortal.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "./contextConnections/Orders.Context";

export default function AddtoCart () {
    const { cartProducts, removeFromCart, clearCart} = useCart();
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [paymentmethod, setPaymentMethotd] = useState<string>('');
    const {addOrder} = useOrders();
    const navigate = useNavigate();

    const handleProceed = () => {
        addOrder(cartProducts);
        clearCart();
        navigate(
            '/customer/orders', {
                state: { success: true }
            }
        );
    };
    
    return (
        <div className="cart-page">

            <div className="cart-list-product">
                {   
                    cartProducts.length === 0 ? (
                        <div className="empty-carts no-favorites">
                            <h2>Your Cart is Empty</h2>
                            <p>browse your prefer product that you want to purchase and they'll appear here</p>
                        </div>
                    ) : (
                        cartProducts.map((item) => (
                            <div
                                key={item.id}
                                className="cart-product"
                            >
                                <img src={item.image} alt={item.title} />

                                <div className="cart-item-info">
                                    <h4>{item.title}</h4>
                                    <span>{item.price}</span>
                                </div>

                                <button 
                                    className="buy-now-product"
                                    onClick={() => setSelectedProduct(item)}
                                >
                                    Buy Now
                                </button>

                                <button
                                    className="remove-cart-product-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 size={30}/>
                                </button>
                            </div>
                        ))
                    )
                }
            </div>

            {
                selectedProduct && (
                    <div className="checkout-modal">
                        <div className="checkout">
                            <h2>{selectedProduct.title}</h2>
                            <img src={selectedProduct.image} alt={selectedProduct.title} />

                            <p>
                                'DESCRIPTION ABOUT THE PRODUCT'
                            </p>

                            <h3>
                                Choose Payment Method
                            </h3>

                            <div className="payment-options">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="payment"
                                        value="gcash"
                                        onChange={()=>setPaymentMethotd('Gcash')}
                                    />
                                    Gcash
                                </label>

                                <label>
                                    <input 
                                        type="radio" 
                                        name="payment"
                                        value="paypal"
                                        onChange={()=>setPaymentMethotd('PayPal')}
                                    />
                                    PayPal
                                </label>

                            </div>

                            <div className="checkout-modal-actions">
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="cancel-btn-cart"
                                >
                                    Cancel
                                </button>

                                <button
                                    disabled={!paymentmethod}
                                    onClick={handleProceed}
                                    className="proceed-btn cancel-btn-cart"
                                >
                                    Proceed to Buy
                                </button>
                                
                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    );
}