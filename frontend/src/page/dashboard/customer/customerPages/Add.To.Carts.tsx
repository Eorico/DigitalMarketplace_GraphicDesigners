import { useCart } from "./contextConnections/Add.To.Cart.Context";
import { Trash2 } from "lucide-react";
import '../../../../style/customerPortal.css'

export default function AddtoCart () {
    const { cartProducts, removeFromCart} = useCart();
    
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

        </div>
    );
}