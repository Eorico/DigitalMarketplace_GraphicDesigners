import { useFavorites } from "./contextConnections/Fav.Context";
import { ProductCard } from "../../../../components/ui/ProductCard";
import '../../../../style/customerPortal.css'

export default function FavoritesDesign () {
    const {favorites} = useFavorites();
    return (

        <div className="favorites-product customer-product-grid">
            {
                favorites.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>

    );
}