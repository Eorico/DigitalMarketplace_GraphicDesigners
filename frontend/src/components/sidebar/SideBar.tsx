import {
  Home,
  Heart,
  ShoppingCart,
  Package,
  User,
  DoorOpen,
  Upload,
  TrendingUp,
  DollarSign,
  Box,
  Settings2
} from 'lucide-react';
import type { SidebarProps } from '../../types/interfaces/interfaces';
import '../../style/sidebar.css';

import { useNavigate, useLocation } from 'react-router-dom';


export function Sidebar(
{
  type,
  cartCount = 0,
  productCount = 0,
}: SidebarProps)
{
  const customerItems = [
    { path: '/browse/', label: 'Browse', icon: Home },
    { path: '/favorites/', label: 'Favorites', icon: Heart },
    { path: '/view-carts/', label: 'Cart', icon: ShoppingCart, badge: cartCount },
    { path: '/orders/', label: 'My Orders', icon: Package },
    { path: '/profile-customer/', label: 'Profile', icon: User },
    { path: '/settings-customer/', label: 'Settings', icon: Settings2 },
  ];

  const sellerItems = [
    { path: 'overview', label: 'Overview', icon: Home },
    { path: 'products', label: 'My Products', icon: Box, badge: productCount },
    { path: 'upload', label: 'Upload New', icon: Upload },
    { path: 'analytics', label: 'Analytics', icon: TrendingUp },
    { path: 'earnings', label: 'Earnings', icon: DollarSign },
    { path: 'profile', label: 'Profile', icon: User },
    { path: 'settings', label: 'Settings', icon: Settings2 },
  ];

  const items = type === 'customer' ? customerItems : sellerItems;

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">

          <div className="sidebar-brand-icon">
            <img src="/assets/boyLogo.png" alt="boy logo" />
          </div>

          <div className='sidebar-brand-container'>
            <h1 className="sidebar-brand-title">GRAPIXIE</h1>
            <p className="sidebar-brand-subtitle">
              {type === 'customer' ? 'Customer Portal' : 'Seller Dashboard'}
            </p>
          </div>

        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.endsWith(item.path);

          return (
            <button
              key={item.path}
              onClick={() => navigate(`/${type}/${item.path}`)}
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
        <button className="sidebar-logout-button" onClick={() => navigate('/login')}>
          <DoorOpen size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );

}
