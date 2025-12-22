import { useState } from 'react';
import LandingPage from './page/landin-page/Landing.Page';
import LoginPage from './authentication/login/Login.Page';
import SignUpPage from './authentication/signup/Sign.Up.Page';
import ResetPasswordPage from './authentication/reset-password/Reset.Password.Page';

/--- sample navigation ---/
import UserSelectorPath from './page/dashboard/dir/userSelectorPath';

import type { Page } from './types/interfaces/interfaces';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landingPage'); 

  const NavigationControll = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <>
       { currentPage === 'landingPage' && <LandingPage onNavigate={NavigationControll} /> }
       { currentPage === 'login' && <LoginPage onNavigate={NavigationControll} /> }
       { currentPage === 'signup' && <SignUpPage onNavigate={NavigationControll} /> }
       { currentPage === 'resetPass' && <ResetPasswordPage onNavigate={NavigationControll} /> }
       { currentPage === 'customerPortal' && <UserSelectorPath  type='customer' onNavigate={NavigationControll} /> }
       { currentPage === 'sellerPortal' && <UserSelectorPath  type='seller' onNavigate={NavigationControll} /> }
    </>
  )
}

export default App
