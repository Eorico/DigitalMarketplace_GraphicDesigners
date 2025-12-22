import type { Products, SellerProducts, Statistics } from "../interfaces/interfaces";

export const MarketViewProducts: Products[] = [
    {
        id: 'Sample',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: 'Sample',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: 'Sample',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: 'Sample',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: 'Sample',
        title: 'Sample Title',
        rating: 1.00,
        sales: 1234,
        price: 1234,
        image: 'sample image',
        icon: 'sample',
    },
    {
        id: 'Sample',
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
        id: 'Sample',
        title: 'Sample',
        price: 29.99,
        sales: 234,
        revenue: 7006.66,
        status: 'active',
        icon: 'Sample',
        rating: 123,
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