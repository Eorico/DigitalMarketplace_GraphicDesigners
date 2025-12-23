import { ProductCard } from "../../../../components/ui/ProductCard";
import { MarketViewProducts } from "../../../../types/datas/data";
import '../../../../style/customerPortal.css';

export default function BrowseProduct () {
    return (
        <div className="customer-product-grid">
          {MarketViewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    );
}