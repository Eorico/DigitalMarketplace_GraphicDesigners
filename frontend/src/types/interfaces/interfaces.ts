import type React from "react";

export interface ProtectedRoutes {
    isAuthenticated: boolean;
    role: 'customer' | 'seller' | null;
    allowed: 'customer' | 'seller';
    children: React.ReactNode
}


export interface SidebarProps {
  type: 'customer' | 'seller';
  currentView: string;
  onViewChange: (view: string) => void;
  cartCount?: number;
  productCount?: number;
  
}

export interface Products {
    id: string;
    title: string;
    rating: number;
    sales: number;
    price: number;
    image: string;
    icon: string;
}

export interface ProductCardProps {
    product: Products;
}

export interface SellerProducts extends Products {
    status: 'active' | 'paused';
    revenue: number;
}

export interface ProducListProps {
    product: SellerProducts;
}

export interface StatCardProps {
    title: string;
    value: string;
    subtitle: string;
    trend?: string;
}

export interface Statistics {
    totalRevenue: number;
    revenueChange: string;
    totalSales: number;
    salesChange: string;
    activeProducts: number;
    pausedProducts: number;
    avgRating: number;
    totalReviews: number;
}