import type { Products, SellerProducts, Statistics } from "../interfaces/interfaces";

export const MarketViewProducts: Products[] = [
    {
        id: '1',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: '2',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: '3',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: '4',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: '5',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: '6',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    }
]

export const SellerViewProducts: SellerProducts[] = [
    {
        id: '1',
        title: 'Sample',
        price: 0,
        sales: 0,
        revenue: 0,
        status: 'active',
        icon: 'Sample',
        rating: 0,
        image: 'Sample'
    }
]

export const SellerStats: Statistics = {
    totalRevenue: 0,
    revenueChange: '0',
    totalSales: 0,
    salesChange: '0',
    activeProducts: 0,
    pausedProducts: 0,
    avgRating: 0,
    totalReviews: 0,
}