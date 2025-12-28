import { useState } from "react";
import { Sidebar } from "../../../components/sidebar/SideBar";
import CustomerRoutes from "../customer/customerRouters/Customer.Routes";
import SellerRoutes from "../seller/sellerRouters/Seller.Routes";
import '../../../style/selectorPath.css'

import { FavoritesProviderContext } from "../customer/customerPages/contextConnections/Fav.Context";
import { CartProviderContext } from "../customer/customerPages/contextConnections/Add.To.Cart.Context";
import { OrdersProviderContext } from "../customer/customerPages/contextConnections/Orders.Context";

export default function UserSelectorPath({ type = 'customer'}: { type: 'customer' | 'seller' } ) {
    const [ portalType ] = useState<'customer' | 'seller'>(type);

    return (
        <CartProviderContext>
            <FavoritesProviderContext>
                <OrdersProviderContext> 
                    <div className="selector">
                        <Sidebar 
                            type={portalType}
                            cartCount={0}
                            productCount={0}
                            
                        />
                        <div className="selector-content"> 
                            { portalType === 'customer' ?
                            <CustomerRoutes  /> : 
                            <SellerRoutes />
                            } 
                        </div>
                    </div>
                </OrdersProviderContext>
            </FavoritesProviderContext>
        </CartProviderContext>
    );
}