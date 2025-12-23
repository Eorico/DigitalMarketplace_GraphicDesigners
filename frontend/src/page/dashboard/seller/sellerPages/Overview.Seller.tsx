import { Upload } from 'lucide-react';
import { StatCard } from '../../../../components/ui/StatCard';
import { ProductListItem } from '../../../../components/ui/ProductListItem';
import { SellerStats, SellerViewProducts} from '../../../../types/datas/data';
import '../../../../style/sellerPortal.css';

export default function OverViewSeller () {
    return (
       <>

        <div className="seller-portal-stats-grid">
          <StatCard
            title="Total Revenue"
            value={`₱ ${SellerStats.totalRevenue.toLocaleString()}`}
            subtitle=""
            trend={SellerStats.revenueChange}
          />
          <StatCard
            title="Total Sales"
            value={`₱ ${SellerStats.totalSales.toLocaleString()}`}
            subtitle=""
            trend={SellerStats.salesChange}
          />
          <StatCard
            title="Active Products"
            value={SellerStats.activeProducts.toString()}
            subtitle={`${SellerStats.activeProducts} active, ${SellerStats.pausedProducts} paused`}
          />
          <StatCard
            title="Avg. Rating"
            value={SellerStats.avgRating.toFixed(1)}
            subtitle={`Based on ${SellerStats.totalReviews} reviews`}
          />
        </div>

        <div className="seller-portal-products-section">
          <h2 className="seller-portal-section-title">Your Products</h2>

          <div className="seller-portal-product-list">
            {SellerViewProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="seller-portal-upload-card">
          <h3 className="seller-portal-upload-title">Upload New Product</h3>
          <p className="seller-portal-upload-text">
            Share your amazing sprite sheets and graphics with the community
          </p>

          <button className="seller-portal-upload-cta">
            <Upload size={20} />
            Start Upload
          </button>
        </div>

       </>
    );
}