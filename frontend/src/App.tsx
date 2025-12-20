import { useState } from 'react';
import LandingPage from './page/landin-page/Landing.Page';
import LoginPage from './authentication/login/Login.Page';
import SignUpPage from './authentication/signup/Sign.Up.Page';
import ResetPasswordPage from './authentication/reset-password/Reset.Password.Page';
import type { Page } from './types/interfaces';
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
    </>
  )
}

export default App
