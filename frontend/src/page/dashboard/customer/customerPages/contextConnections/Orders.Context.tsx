import { createContext, useContext, useState, type ReactNode } from "react";
import type { OrdersContext, Products } from "../../../../../types/interfaces/interfaces";

const ordersContext = createContext<OrdersContext>
(
    {
        orders: [],
        addOrder: () => {}
    }
);

export function OrdersProviderContext
(
    {children}:{children: ReactNode}
) 
{
    const [orders, setOrders] = useState<Products[]>([]);

    const addOrder = (product: Products[]) => 
    {
        setOrders(
            (prev) => [...prev, ...product]
        );
    }

    return (
        <ordersContext.Provider value={{ orders, addOrder }}>
            {children}
        </ordersContext.Provider>
    );
}

export const useOrders = () => useContext(ordersContext);