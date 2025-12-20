export type Page = 'landingPage' | 'login' | 'signup' | 'resetPass'

export interface LandingPageInterface {
    onNavigate: (page: string) => void;
}

export interface LoginPageInteface extends LandingPageInterface {}

export interface SignUpPageInteface extends LandingPageInterface {}

export interface ResetPassPageInteface extends LandingPageInterface {}

export interface Navbar extends LandingPageInterface {}