import { useState } from "react";
import '../../style/signUp.css';
import { useNavigate } from "react-router-dom";

interface SignUpProps {
  onSignIn: (role: 'customer' | 'seller') => void;
}

export default function SignUpPage ({ onSignIn }: SignUpProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] =
    useState<'customer' | 'seller'>('customer');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      return;
    } else if (password !== confirmPassword) {
      return;
    }

    navigate(accountType === 'customer' ? '/customer/' : '/seller/')
  };

  return (
    <div className="signUp-page">
      <div className="signUp-card">
        
        <div className="signUp-icon">
          <img src="/assets/registerBoy.png" alt="little boy" />
        </div>

        <h2 className="signUp-title">Create Account</h2>
        <p className="signUp-subtitle">
          Join the GRAPIXIE community
        </p>

        <div className="account-selection">
          <h3>CHOOSE ACCOUNT TYPE</h3>
          <button
            className={accountType === 'customer' ? 'active' : ''}
            onClick={()=>setAccountType('customer')}
          >
            Customer
          </button>
          <button
            className={accountType === 'seller' ? 'active' : ''}
            onClick={()=>setAccountType('seller')}
          >
            Seller
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group-sigin-up">
            <label>Full Name</label>
            <input
              className="sign-up-input"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group-sigin-up">
            <label>Email</label>
            <input
              className="sign-up-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group-sigin-up">
            <label>Password</label>
            <input 
              className="sign-up-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="form-group-sigin-up">
            <label>Confirm Password</label>
            <input
              className="sign-up-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary full-width">
            Create Account
          </button>

          <p className="signUp-footer">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}