// Actualiza el import para incluir Transaction
import type { ChartData, Transaction, Customer } from '../types/analytics';

export const monthlyAnalyticsData: ChartData[] = [
  // ... tu código anterior se queda igual
  { month: 'Ene', revenue: 12000, users: 450, churn: 1.2 },
  { month: 'Feb', revenue: 15000, users: 600, churn: 1.5 },
  { month: 'Mar', revenue: 18000, users: 780, churn: 1.1 },
  { month: 'Abr', revenue: 24000, users: 1020, churn: 1.8 },
  { month: 'May', revenue: 28000, users: 1250, churn: 2.1 },
  { month: 'Jun', revenue: 35000, users: 1500, churn: 1.4 },
  { month: 'Jul', revenue: 45231, users: 1850, churn: 2.4 },
];

// Nueva constante de transacciones recientes
export const recentTransactions: Transaction[] = [
  {
    id: 'TX-8921',
    customer: {
      name: 'Alejandro Gomez',
      email: 'ale.gomez@tech.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60'
    },
    status: 'completado',
    amount: '$249.00',
    date: 'Hace 5 min',
    plan: 'Enterprise'
  },
  {
    id: 'TX-8920',
    customer: {
      name: 'Sofía Villanueva',
      email: 'sofia.v@designco.io',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60'
    },
    status: 'completado',
    amount: '$99.00',
    date: 'Hace 23 min',
    plan: 'Pro Mensual'
  },
  {
    id: 'TX-8919',
    customer: {
      name: 'Marcos Lehmann',
      email: 'm.lehmann@Finanz.de',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60'
    },
    status: 'pendiente',
    amount: '$1,200.00',
    date: 'Hace 1 hora',
    plan: 'Custom Anual'
  },
  {
    id: 'TX-8918',
    customer: {
      name: 'Elena Rostova',
      email: 'elena@rostov.dev',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60'
    },
    status: 'fallido',
    amount: '$99.00',
    date: 'Hace 3 horas',
    plan: 'Pro Mensual'
  }
];

// Datos filtrados para los últimos 3 meses
export const last3MonthsData: ChartData[] = [
    { month: 'May', revenue: 28000, users: 1250, churn: 2.1 },
    { month: 'Jun', revenue: 35000, users: 1500, churn: 1.4 }, // 👈 Cambiamos 'stroke' por 'churn' aquí
    { month: 'Jul', revenue: 45231, users: 1850, churn: 2.4 },
  ];

  export const mockCustomers: Customer[] = [
    {
      id: 'USR-001',
      name: 'Carlos Mendoza',
      email: 'carlos.m@alpha-tech.io',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
      status: 'activo',
      plan: 'Enterprise',
      joinedDate: '12 Ene 2025',
      usage: 92,
    },
    {
      id: 'USR-002',
      name: 'Lucía Fernández',
      email: 'lucia.f@designhub.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
      status: 'activo',
      plan: 'Pro Mensual',
      joinedDate: '05 Feb 2025',
      usage: 45,
    },
    {
      id: 'USR-003',
      name: 'Martin Peterson',
      email: 'm.peterson@nordic-soft.se',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60',
      status: 'inactivo',
      plan: 'Starter',
      joinedDate: '20 Nov 2024',
      usage: 12,
    },
    {
      id: 'USR-004',
      name: 'Valeria Rossi',
      email: 'v.rossi@creative-agency.it',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60',
      status: 'activo',
      plan: 'Pro Mensual',
      joinedDate: '18 Mar 2025',
      usage: 78,
    },
    {
      id: 'USR-005',
      name: 'David Kim',
      email: 'david.kim@seoul-labs.kr',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60',
      status: 'activo',
      plan: 'Enterprise',
      joinedDate: '01 Abr 2025',
      usage: 88,
    }
  ];