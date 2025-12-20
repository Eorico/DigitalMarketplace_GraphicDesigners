 import { useState } from "react";
import type { ResetPassPageInteface } from "../../types/interfaces";
import '../../style/resetPass.css';

export default function ResetPasswordPage ({ onNavigate }: ResetPassPageInteface) {
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

          <button type="submit" className="btn-primary full-width">
            Send Reset Link
          </button>

          <div className="reset-footer">
            <button
              type="button"
              onClick={() => onNavigate('login')}
            >
              Back to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}