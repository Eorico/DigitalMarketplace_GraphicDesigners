import '../../../style/sellerPortal.css';
import { Outlet } from 'react-router-dom';

 
export default function SellerPortal () {
    return (
    <div className="seller-dashboard">
      <header className="seller-portal-header">
        <div className="seller-portal-header-inner">

          <div className='seller-portal-container-header'>
            <h1 className="seller-portal-title">Seller Dashboard</h1>
            <p className="seller-portal-subtitle">
              Manage your products and track sales
            </p>
          </div>

        </div>
      </header>

      <main className="seller-portal-content">
        <Outlet/>
      </main>
    </div>
  );
}