import { Navigate } from "react-router-dom";
import type { ProtectedRoutes } from "../../types/interfaces/interfaces";

export function ProtectedRoute
(
    {
    isAuthenticated,
    role,
    allowed,
    children
    }: ProtectedRoutes
) 

{
    if (!isAuthenticated) {
        return <Navigate to={'/login'} replace />;
    }

    if (role !== allowed) {
        return <Navigate to={'/'} replace />;
    }

    return (
        <>
            {children}
        </>
    );
}
