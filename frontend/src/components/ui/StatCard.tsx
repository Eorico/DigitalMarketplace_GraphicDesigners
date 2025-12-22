import type { StatCardProps } from "../../types/interfaces/interfaces";
import '../../style/statCard.css'

export function StatCard({ title, value, subtitle, trend }: StatCardProps) {
  return (
    <div className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-value-wrapper">
        <span className="stat-value">{value}</span>
      </div>
      {trend && <p className="stat-trend">{trend}</p>}
      {subtitle && !trend && <p className="stat-subtitle">{subtitle}</p>}
    </div>
  );
}