import { createContext, useContext, useState, type ReactNode } from "react";
import type { AddToCartContext, Products } from "../../../../../types/interfaces/interfaces";

const CartContext = createContext<AddToCartContext>
(
    {
        cartProducts: [],
        addToCart: () => {},
        removeFromCart: () => {},
        clearCart: () => {},
    }
);

export function CartProviderContext 
(
    {children}: {children: ReactNode}
) 

{
    const [cartProducts, setCartProducts] = useState<Products[]>([]);

    const addToCart = (product: Products) => {
        setCartProducts(
            (prev) => {
                const exist = prev.find((p) => p.id === product.id);
                if (exist) return prev;
                return [...prev, product];
            }
        );
    };

    const removeFromCart = (id: string) => {
        setCartProducts((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartProducts([]);
    }

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);