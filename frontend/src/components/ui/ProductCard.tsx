import { Star, Heart, Eye } from 'lucide-react';
import type { ProductCardProps } from '../../types/interfaces/interfaces';
import { useState } from 'react';
import '../.../../../style/productCard.css';

export function ProductCard({ product }: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        <div className="product-overlay">
          <div className="product-icon-circle">
            <div className="product-icon">
              {product.icon === 'gamepad-2' && '🎮'}
              {product.icon === 'castle' && '🏰'}
              {product.icon === 'palette' && '🎨'}
              {product.icon === 'user' && '👤'}
              {product.icon === 'tree-deciduous' && '🌳'}
              {product.icon === 'sword' && '⚔️'}
            </div>
          </div>
        </div>
      </div>

      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>

        <div className="product-meta">
          <div className="rating">
            <Star size={16} className="star-icon" />
            <span className="rating-value">{product.rating}</span>
          </div>

          <span className="sales-count">
            {product.sales.toLocaleString()} sales
          </span>
        </div>

        <div className="price-row">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="action-row">
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`save-btn ${isSaved ? 'saved' : ''}`}
          >
            <Heart size={18} className={`heart-icon ${isSaved ? 'filled' : ''}`} />
            <span>Save</span>
          </button>

          <button className="preview-btn">
            <Eye size={18} />
            <span>Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
}