import { Routes, Route, Navigate } from "react-router-dom";
import { CustomerPortal } from "../CustomerPortal";
import BrowseProduct from "../customerPages/Browse.Product";
import AddtoCart from "../customerPages/Add.To.Carts";
import FavoritesDesign from "../customerPages/Favorites";
import ViewOrders from "../customerPages/Orders";
import ProfileCustomer from "../customerPages/Profile.Customer";
import SettingsForCustomer from "../customerPages/Settings.Customer";

export default function CustomerRoutes () {
    return (
        <Routes>

            <Route element={<CustomerPortal/>}>
                <Route index element={<Navigate to={'browse'} replace/>} />
                <Route path="/browse/" element={<BrowseProduct />} />
                <Route path="/favorites/" element={<FavoritesDesign />} />
                <Route path="/view-carts/" element={<AddtoCart />} />
                <Route path="/orders/" element={<ViewOrders />} />
                <Route path="/profile-customer/" element={<ProfileCustomer />} />
                <Route path="/settings-customer/" element={<SettingsForCustomer />} />
            </Route>

        </Routes>
    );
}