import { ArrowBigLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/login.css';

interface LoginProps {
  onLogin: (role: 'customer' | 'seller') => void;
}

export default function LoginPage ({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] =
    useState<'customer' | 'seller'>('customer');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) return;

    onLogin(accountType);

    navigate(accountType === 'customer' ? '/customer/' : '/seller/');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className='back-to-landing'>
          <button
            onClick={() => navigate('/')}
          >
            <ArrowBigLeft size={25}/>
            <span className='back-text'>Back</span>
          </button>
        </div>

        <div className="login-icon">
          <img src="/assets/loginBoy.png" alt="logging in" />
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
              onClick={() => navigate('/reset-password')}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn-primary full-width">
            Login In
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
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}