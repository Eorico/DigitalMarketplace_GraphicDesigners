import { useState } from "react";
import { Sidebar } from "../../../components/sidebar/SideBar";
import { CustomerPortal } from "../customer/CustomerPortal";
import SellerPortal from "../seller/SellerPortal";
import '../../../style/selectorPath.css'

export default function UserSelectorPath({ type = 'customer'}: { type: 'customer' | 'seller' } ) {
    const [ portalType ] = useState<'customer' | 'seller'>(type);
    const [ currentView, setCurrentView ] = useState('browse');

    return (
        <div className="selector">
            <Sidebar 
                type={portalType}
                currentView={currentView}
                onViewChange={setCurrentView}
                cartCount={3}
                productCount={4}
                
            />
            <div className="selector-content"> 
                { portalType === 'customer' ?
                <CustomerPortal view={currentView} /> : 
                <SellerPortal view={currentView} />
                } 
            </div>
        </div>
    );
}