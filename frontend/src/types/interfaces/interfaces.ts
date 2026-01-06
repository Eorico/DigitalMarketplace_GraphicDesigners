import type React from "react";

export interface ProtectedRoutes {
    isAuthenticated: boolean;
    role: 'customer' | 'seller' | null;
    allowed: 'customer' | 'seller';
    children: React.ReactNode
}


export interface SidebarProps {
  type: 'customer' | 'seller';
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

export interface FavoritesProductsProps {
    favorites: Products[];
    toggleFavorite: (product: Products) => void;
}

export interface AddToCartContext {
    cartProducts: Products[];
    addToCart: (product: Products) => void;
    removeFromCart: (item: string) => void;
    clearCart: () => void;
}
export interface OrdersContext {
    orders: Products[];
    addOrder: (product: Products[]) => void;
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

export interface CustomerInfoProfile {
    name: string;
    email: string;
    phoneNumber: number;
    address: string;
    country: string;
    city: string;
    brgy: string;
    state: string;
    zipCode: number;
    joinDate: string;
    verified?: boolean;
}

export interface SellerInfoProfile extends CustomerInfoProfile {
    storeName: string;
    bio: string;
    bankAccount: string;
    textId: string;
}