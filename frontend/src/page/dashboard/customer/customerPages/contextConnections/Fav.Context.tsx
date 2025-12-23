import { createContext, useContext, useState, type ReactNode } from "react";
import type { FavoritesProductsProps, Products } from "../../../../../types/interfaces/interfaces";

const FavoritesContext = createContext<FavoritesProductsProps>
(
    {
        favorites: [],
        toggleFavorite: () => {},
    }
)

export function FavoritesProviderContext
(
    {children} : {children: ReactNode}
) 
{
    const [favorites, setFav] = useState<Products[]>([]);

    const toggleFavorite = (product: Products) => {
        setFav((prev)=>{
            const exist = prev.find((p) => p.id === product.id);
            if (exist) return prev.filter((p)=>p.id !== product.id);
            return [...prev, product];
        });
    };


    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoritesContext);