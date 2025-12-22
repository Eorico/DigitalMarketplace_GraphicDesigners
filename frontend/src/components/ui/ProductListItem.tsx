import { Edit, Trash2, MoreVertical } from 'lucide-react';
import type { ProducListProps } from '../../types/interfaces/interfaces';
import '../../style/productListItem.css';

export function ProductListItem({ product }: ProducListProps) {
  return (
    <div className="product-list-item">
      <div className="item-content">
        <div className="item-thumbnail">
          <span className="item-emoji">🎮</span>
        </div>

        <div className="item-details">
          <h3 className="item-title">{product.title}</h3>

          <div className="item-meta">
            <span className="item-price">${product.price}</span>
            <span className="dot">•</span>
            <span>{product.sales} sales</span>
            <span className="dot">•</span>
            <span>${product.revenue.toLocaleString()} revenue</span>
          </div>
        </div>

        <div className="item-actions">
          <span
            className={`status-badge ${
              product.status === 'active' ? 'active' : 'inactive'
            }`}
          >
            {product.status}
          </span>

          <button className="icon-button">
            <Edit size={18} />
          </button>

          <button className="icon-button">
            <Trash2 size={18} />
          </button>

          <button className="icon-button">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}