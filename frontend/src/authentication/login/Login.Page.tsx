import { Sparkles, ArrowBigLeft } from 'lucide-react';
import { useState } from 'react';
import type { LoginPageInteface } from '../../types/interfaces';
import '../../style/login.css';

export default function LoginPage ({onNavigate}: LoginPageInteface) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] =
    useState<'customer' | 'seller'>('customer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className='back-to-landing'>
          <button
            onClick={() => onNavigate('landingPage')}
          >
            <ArrowBigLeft size={25}/>
            <span className='back-text'>Back</span>
          </button>
        </div>

        <div className="login-icon">
          <Sparkles size={48} strokeWidth={1.5} />
        </div>

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">
          Sign in to your GRAPIXIE account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group-login">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group-login">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="forgot-password">
            <button
              type="button"
              onClick={() => onNavigate('resetPass')}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn-primary full-width">
            Sign In
          </button>

          <div className="secondary-actions">
            <button 
              type="button" 
              className={`btn-outline ${accountType === 'customer' ? 'active' : ''}`}
              onClick={() => setAccountType('customer')}  
            >
              Browse as Customer
            </button>
            <button 
              type="button" 
              className={`btn-outline ${accountType === 'seller' ? 'active' : ''}`}
              onClick={() => setAccountType('seller')}   
            >
              Seller Dashboard
            </button>
          </div>

          <p className="signup-text">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('signup')}
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}