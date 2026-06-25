import { useState } from 'react';
import { DollarSign, Users, ShoppingBag, ArrowUpRight, Bell, Search, Calendar, ShieldCheck } from 'lucide-react';
import { KpiCard } from './components/dashboard/KpiCard';
import { AnalyticsChart } from './components/dashboard/AnalyticsChart';
import { Sidebar } from './components/layout/Sidebar';
import { TransactionTable } from './components/dashboard/TransactionTable';
// 👇 IMPORTAMOS EL COMPONENTE DE CLIENTES
import { CustomerList } from './components/dashboard/CustomerList';
// 👇 IMPORTAMOS EL MOCK DE CLIENTES
import { monthlyAnalyticsData, recentTransactions, last3MonthsData, mockCustomers } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [timeRange, setTimeRange] = useState<'7_months' | '3_months'>('7_months');

  const chartDataToShow = timeRange === '7_months' ? monthlyAnalyticsData : last3MonthsData;
  const periodText = timeRange === '7_months' ? 'últimos 7 meses' : 'últimos 3 meses';

  const metrics = [
    { title: 'Ingresos Mensuales', value: '$45,231.89', change: '20.1%', isPositive: true, icon: DollarSign },
    { title: 'Nuevas Suscripciones', value: '+2,350', change: '180.1%', isPositive: true, icon: Users },
    { title: 'Ventas del Mes', value: '+12,234', change: '19%', isPositive: true, icon: ShoppingBag },
    { title: 'Tasa de Churn', value: '2.4%', change: '-4.3%', isPositive: false, icon: ArrowUpRight },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        
        {/* Header Superior */}
        <header className="h-16 border-b border-gray-100 bg-white px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="relative w-72 hidden sm:block">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Buscar transacciones, reportes..." 
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 bg-gray-50/50"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative rounded-lg hover:bg-gray-50">
              <Bell className="w-5 h-5" />
              <span className="w-2 h-2 bg-indigo-600 rounded-full absolute top-2 right-2"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" 
                alt="Avatar" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-700 leading-none">Ana Martínez</p>
                <span className="text-xs text-gray-400">Admin Meta</span>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido Dinámico */}
        <main className="p-8 flex-1 max-w-7xl w-full mx-auto">
          
          {/* VISTA 1: DASHBOARD PRINCIPAL */}
          {activeTab === 'dashboard' && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">SaaS Analytics</h1>
                  <p className="text-gray-500 mt-1">Bienvenido de vuelta, Ana. Aquí está el rendimiento de tu negocio hoy.</p>
                </div>
                
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <select 
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value as '7_months' | '3_months')}
                    className="text-sm font-medium text-gray-600 bg-transparent focus:outline-none cursor-pointer pr-2"
                  >
                    <option value="7_months">Últimos 7 meses</option>
                    <option value="3_months">Últimos 3 meses</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {metrics.map((metric, index) => (
                  <KpiCard key={index} {...metric} />
                ))}
              </div>

              <div className="w-full mb-8">
                <AnalyticsChart data={chartDataToShow} period={periodText} />
              </div>

              <div className="w-full">
                <TransactionTable transactions={recentTransactions} />
              </div>
            </>
          )}

          {/* VISTA 2: SECCIÓN DE CLIENTES (YA CONECTADA Y REAL) */}
          {activeTab === 'clientes' && (
            <div className="w-full">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
                <p className="text-gray-500 mt-1">Monitorea y gestiona las cuentas de tu infraestructura SaaS.</p>
              </div>
              {/* 👇 INYECTAMOS EL NUEVO COMPONENTE CON SUS DATOS */}
              <CustomerList customers={mockCustomers} />
            </div>
          )}

          {/* OTRAS VISTAS PROVISIONALES */}
          {!['dashboard', 'clientes'].includes(activeTab) && (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Sección en Construcción</h2>
              <p className="text-gray-400 mt-1">La vista de "{activeTab}" está lista para ser conectada a la API.</p>
            </div>
          )}

        </main>

      </div>
    </div>
  );
}

export default App;