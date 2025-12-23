import { Routes, Route, Navigate } from "react-router-dom";
import SellerPortal from "../SellerPortal";
import OverViewSeller from "../sellerPages/Overview.Seller";
import SellerProducts from "../sellerPages/Seller.Products";
import SellerProfile from "../sellerPages/Seller.Profile";
import SellersAnalytics from "../sellerPages/Sellers.Analytics";
import SettingsSeller from "../sellerPages/Settings.Seller";
import UploadProduct from "../sellerPages/Upload.Products";

export default function SellerRoutes () {
    return (
        <Routes>
            
            <Route element={<SellerPortal/>}>
                <Route index element={<Navigate to={'overview'} replace/>}/>
                <Route path="/overview/" element={<OverViewSeller/>} />
                <Route path="/sellers-products/" element={<SellerProducts/>}/>
                <Route path="/upload-products/" element={<UploadProduct/>}/>
                <Route path="/seller-analytics/" element={<SellersAnalytics/>}/>
                <Route path="/profile-customer/" element={<SellerProfile/>}/>
                <Route path="/settings-customer/" element={<SettingsSeller/>}/>
            </Route>

        </Routes>
    );
}