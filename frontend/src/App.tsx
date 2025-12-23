import { useState } from 'react';
import LandingPage from './page/landin-page/Landing.Page';
import LoginPage from './authentication/login/Login.Page';
import SignUpPage from './authentication/signup/Sign.Up.Page';
import ResetPasswordPage from './authentication/reset-password/Reset.Password.Page';

import { ProtectedRoute } from './authentication/protectedRoute/protectedRouting';
import UserSelectorPath from './page/dashboard/dir/userSelectorPath';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';


function App() {
   // mock type of navigation for authentication
   const [isAuth, setisAuth] = useState(false);
   const [role, setRole] = useState<'customer' | 'seller' | null>(null);

  return (
    <BrowserRouter>
        <Routes>

          <Route 
            path='/'
            element={<LandingPage/>}
          />

          <Route 
            path='/login'
            element={
              <LoginPage
                onLogin={(userRole) => {
                  setisAuth(true);
                  setRole(userRole);
                }}
              />
            }
          />

          <Route 
            path='/signup'
            element={
              <SignUpPage
                onSignIn={(userRole) => {
                  setisAuth(true);
                  setRole(userRole);
                }}
              />
            }
          />

          <Route 
            path='/reset-password'
            element={<ResetPasswordPage/>}
          />

          <Route 
            path='/customer/'
            element={
              <ProtectedRoute isAuthenticated={isAuth} role={role} allowed='customer'>
                <UserSelectorPath type={'customer'} />
              </ProtectedRoute>
            }
          />

          <Route 
            path='/seller/'
            element={
              <ProtectedRoute isAuthenticated={isAuth} role={role} allowed='seller'>
                <UserSelectorPath type={'seller'}/>
              </ProtectedRoute>
            }
          />

          <Route
            path='*'
            element={<Navigate to={'/'}/>}
          />

        </Routes>
    </BrowserRouter>
  )
}

export default App
