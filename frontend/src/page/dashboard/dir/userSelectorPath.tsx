import { useState } from "react";
import { Sidebar } from "../../../components/sidebar/SideBar";
import { CustomerPortal } from "../customer/CustomerPortal";
import SellerPortal from "../seller/SellerPortal";

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
        <div style={{ 
            minHeight: '100vh',
            backgroundColor: '#f9fafb',
            display: 'flex',
         }}>
            <Sidebar 
                type={portalType}
                currentView={currentView}
                onViewChange={setCurrentView}
                cartCount={3}
                productCount={4}
            />

            { portalType === 'customer' ?
             <CustomerPortal onNavigate={onNavigate}/> : 
             <SellerPortal onNavigate={onNavigate}/>
             } 
        </div>
    );
}