import { Search, ShoppingCart } from 'lucide-react';
import { ProductCard } from '../../../components/ui/ProductCard';
import { MarketViewProducts } from '../../../types/datas/data';
import '../../../style/customerPortal.css';

/--- sample navigation ---/
import type { CustomerPortalPage } from '../../../types/interfaces/interfaces';

export function CustomerPortal({ onNavigate }: CustomerPortalPage) {
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

          <button className="customer-cart-button">
            <ShoppingCart size={20} />
            <span className="customer-cart-text">Cart (3)</span>
          </button>
        </div>
      </header>

      <main className="customer-main-content">
        <div className="customer-page-header">
          <h1 className="customer-page-title">Browse Marketplace</h1>
          <p className="customer-page-subtitle">
            Discover amazing sprite sheets and 2D graphics from talented artists
          </p>
        </div>

        <div className="customer-product-grid">
          {MarketViewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
