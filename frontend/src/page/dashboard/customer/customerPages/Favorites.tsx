import { useFavorites } from "./contextConnections/Fav.Context";
import { ProductCard } from "../../../../components/ui/ProductCard";
import '../../../../style/customerPortal.css'

export default function FavoritesDesign () {
    const {favorites} = useFavorites();
    return (

        <div className="favorites-product customer-product-grid">
            {
                favorites.length === 0 ? (
                    <div className="no-favorites">
                        <h2>No Favorites Yet</h2>
                        <p>save designs you like and they will appear here</p>
                    </div>
                ) : (
                    favorites.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )
            }
        </div>

    );
}