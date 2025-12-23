import { useState } from "react";
import { Sidebar } from "../../../components/sidebar/SideBar";
import CustomerRoutes from "../customer/customerRouters/Customer.Routes";
import SellerRoutes from "../seller/sellerRouters/Seller.Routes";
import '../../../style/selectorPath.css'

import { FavoritesProviderContext } from "../customer/customerPages/contextConnections/Fav.Context";

export default function UserSelectorPath({ type = 'customer'}: { type: 'customer' | 'seller' } ) {
    const [ portalType ] = useState<'customer' | 'seller'>(type);

    return (
        <FavoritesProviderContext>
            <div className="selector">
                <Sidebar 
                    type={portalType}
                    cartCount={3}
                    productCount={4}
                    
                />
                <div className="selector-content"> 
                    { portalType === 'customer' ?
                    <CustomerRoutes  /> : 
                    <SellerRoutes />
                    } 
                </div>
            </div>
        </FavoritesProviderContext>
    );
}