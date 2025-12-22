import { useState } from "react";
import { Sidebar } from "../../../components/sidebar/SideBar";
import { CustomerPortal } from "../customer/CustomerPortal";
import SellerPortal from "../seller/SellerPortal";
import '../../../style/selectorPath.css'

/--- sample navigation ---/

interface PathSelector {
    type?: 'customer' | 'seller';
    page?: string;
    onNavigate: (page: string) => void;
}

export default function UserSelectorPath({ type = 'customer', page, onNavigate } : PathSelector ) {
    const [ portalType ] = useState<'customer' | 'seller'>(type);
    const [ currentView, setCurrentView ] = useState(page || 'browse');

    return (
        <div className="selector">
            <Sidebar 
                type={portalType}
                currentView={currentView}
                onViewChange={setCurrentView}
                cartCount={3}
                productCount={4}
                onNavigate={onNavigate}
            />
            <div className="selector-content"> 
                { portalType === 'customer' ?
                <CustomerPortal onNavigate={onNavigate}/> : 
                <SellerPortal onNavigate={onNavigate}/>
                } 
            </div>
        </div>
    );
}