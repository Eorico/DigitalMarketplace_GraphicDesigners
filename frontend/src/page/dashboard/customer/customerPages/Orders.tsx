import { useOrders } from "./contextConnections/Orders.Context";
import { useCart } from "./contextConnections/Add.To.Cart.Context";
import '../../../../style/customerPortal.css';

export default function ViewOrders () {
    const {orders} = useOrders();
    const {addToCart} = useCart();
    return (
        <div className="orders-page">
            {
                orders.length === 0 ? (
                    <div className="no-orders-message no-favorites" style={{ marginTop: -40 }}>
                        <h1>No orders yet!</h1>
                        <p>Your purchased products will appear here</p>
                    </div>
                ) : (
                    orders.map((orderedItem) => (
                        <div className="orders">
                            <div className="order-header">
                                <h2>REVIEW PURCHASED PRODUCTS</h2>
                            </div>

                            <div key={orderedItem.id} className="order-item ">
                                <img src={orderedItem.image} alt={orderedItem.title} />

                                <div className="order-info">
                                    <h4>{orderedItem.title}</h4>
                                    <span>Pesos {orderedItem.price}</span>
                                </div>

                                <button className="buy-again-btn" onClick={() => addToCart(orderedItem)}>
                                        Buy Again
                                </button>
                            </div>
                        </div>
                        
                    ))
                )
            }
        </div>
    );
}