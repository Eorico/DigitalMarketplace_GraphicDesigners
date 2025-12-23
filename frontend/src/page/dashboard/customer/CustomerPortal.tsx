import { Search, ShoppingCart } from 'lucide-react';
import { ProductCard } from '../../../components/ui/ProductCard';
import { MarketViewProducts } from '../../../types/datas/data';
import '../../../style/customerPortal.css';

interface Props {
  view: string;
}

export function CustomerPortal({ view }: Props) {
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
            <ShoppingCart size={30} color='#ffffffff'/>
            <span className="customer-cart-text">Cart {}</span>
          </button>
        </div>
      </header>

      <main className="customer-main-content">
        <div className="customer-product-grid">
          {MarketViewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
