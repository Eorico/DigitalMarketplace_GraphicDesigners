import {
  Home,
  Heart,
  ShoppingCart,
  Package,
  User,
  LogOut,
  Upload,
  TrendingUp,
  DollarSign,
  Settings,
  Box,
} from 'lucide-react';
import type { SidebarProps } from '../../types/interfaces/interfaces';
import './style.css';

export function Sidebar({
  type,
  currentView,
  onViewChange,
  cartCount = 0,
  productCount = 0,
}: SidebarProps)

{
  const customerItems = [
    { id: 'browse', label: 'Browse', icon: Home },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, badge: cartCount },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const sellerItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'products', label: 'My Products', icon: Box, badge: productCount },
    { id: 'upload', label: 'Upload New', icon: Upload },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const items = type === 'customer' ? customerItems : sellerItems;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon" />
          <div>
            <h1 className="sidebar-brand-title">SpriteMarket</h1>
            <p className="sidebar-brand-subtitle">
              {type === 'customer' ? 'Customer Portal' : 'Seller Dashboard'}
            </p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span className="sidebar-nav-label">{item.label}</span>

              {item.badge !== undefined && item.badge > 0 && (
                <span className={`sidebar-nav-badge ${isActive ? 'active' : ''}`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-logout-button">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );

}
