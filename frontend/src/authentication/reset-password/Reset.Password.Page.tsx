 import { useState } from "react";
import '../../style/resetPass.css';

import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage () {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="reset-page">
      <div className="reset-card">
        <div className="reset-icon">
          <img src="/assets/forgetBoy.png" alt="" />
        </div>

        <h2 className="reset-title">Reset Password</h2>
        <p className="reset-subtitle">
          Enter your email and we&apos;ll send you a link to reset your password
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group-reset">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <button type="submit" className="reset-btn-primary full-width">
            Send Reset Link
          </button>

          <div className="reset-footer">
            <button
              type="button"
              onClick={() => navigate('/login')}
            >
              Back to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}