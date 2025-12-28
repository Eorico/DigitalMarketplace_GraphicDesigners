import { Search, ShoppingCart } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../../style/customerPortal.css';

export function CustomerPortal() {
  const navigate = useNavigate();

  const cartButton = () => {
    navigate(
      '/customer/view-carts'
    )
  }
  return (
    <div className="customer-portal">
      <header className="customer-header">
        <div className="customer-header-inner">
          <div className="customer-search-container">
            <div className="customer-search-wrapper">
              <Search size={20} className="customer-search-icon" />
              <input
                type="text"
                placeholder="Search for sprite sheets, characters, UI elements..."
                className="customer-search-input"
              />
            </div>
          </div>

          <button className="customer-cart-button" onClick={() => cartButton()}>
            <ShoppingCart size={30} color='#ffffffff'/>
            <span className="customer-cart-text">Cart {}</span>
          </button>
        </div>
      </header>

      <main className="customer-main-content">
        <Outlet />
      </main>
    </div>
  );
}
