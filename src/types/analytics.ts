// Cambiamos 'import' por 'import type'
import type { LucideIcon } from 'lucide-react';

export interface KpiMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export interface ChartData {
  month: string;
  revenue: number;
  users: number;
  churn: number;
}

export interface Transaction {
    id: string;
    customer: {
      name: string;
      email: string;
      avatar: string;
    };
    status: 'completado' | 'pendiente' | 'fallido';
    amount: string;
    date: string;
    plan: string;
  }

  export interface Customer {
    id: string;
    name: string;
    email: string;
    avatar: string;
    status: 'activo' | 'inactivo';
    plan: 'Enterprise' | 'Pro Mensual' | 'Starter';
    joinedDate: string;
    usage: number; // Porcentaje de uso de la plataforma (ej. 85%)
  }