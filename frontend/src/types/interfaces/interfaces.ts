export type Page = 'landingPage' | 'login' | 'signup' | 'resetPass' | 'customerPortal' | 'sellerPortal'

export interface SidebarProps {
  type: 'customer' | 'seller';
  currentView: string;
  onViewChange: (view: string) => void;
  cartCount?: number;
  productCount?: number;
}

export interface LandingPageInterface {
    onNavigate: (page: string) => void;
}

export interface LoginPageInteface extends LandingPageInterface {}

export interface SignUpPageInteface extends LandingPageInterface {}

export interface ResetPassPageInteface extends LandingPageInterface {}

// sample navigation for now for the customer portal and seller portal

export interface CustomerPortalPage extends LandingPageInterface {}

export interface SellerPortalPage extends LandingPageInterface {}

// sample navigation for now for the customer portal and seller portal

export interface Navbar extends LandingPageInterface {}

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