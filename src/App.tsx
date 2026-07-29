import { useState } from 'react';
import { DollarSign, Users, ShoppingBag, ArrowUpRight, Bell, Search, Calendar, ShieldCheck, Menu } from 'lucide-react';
import { KpiCard } from './components/dashboard/KpiCard';
import { AnalyticsChart } from './components/dashboard/AnalyticsChart';
import { Sidebar } from './components/layout/Sidebar';
import { TransactionTable } from './components/dashboard/TransactionTable';
import { CustomerList } from './components/dashboard/CustomerList';
import { monthlyAnalyticsData, recentTransactions, last3MonthsData, mockCustomers } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [timeRange, setTimeRange] = useState<'7_months' | '3_months'>('7_months');
  // Estado para controlar la visibilidad de la Sidebar en móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const chartDataToShow = timeRange === '7_months' ? monthlyAnalyticsData : last3MonthsData;
  const periodText = timeRange === '7_months' ? 'últimos 7 meses' : 'últimos 3 meses';

  const metrics = [
    { title: 'Ingresos Mensuales', value: '$45,231.89', change: '20.1%', isPositive: true, icon: DollarSign },
    { title: 'Nuevas Suscripciones', value: '+2,350', change: '180.1%', isPositive: true, icon: Users },
    { title: 'Ventas del Mes', value: '+12,234', change: '19%', isPositive: true, icon: ShoppingBag },
    { title: 'Tasa de Churn', value: '2.4%', change: '-4.3%', isPositive: false, icon: ArrowUpRight },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 flex relative">
      {/* Sidebar pasa el estado de mobile menu si tu componente lo soporta */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsMobileMenuOpen(false); // Cierra el menú al seleccionar una pestaña en móvil
        }} 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="flex-1 md:pl-64 flex flex-col min-h-screen w-full">
        
        {/* Header Superior Responsivo */}
        <header className="h-16 border-b border-gray-100 bg-white px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-10">
          
          <div className="flex items-center gap-3">
            {/* Botón Hamburguesa para Móvil */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-gray-500 hover:text-gray-700 md:hidden rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Abrir Menú"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Buscador (visible desde pantallas pequeñas en adelante) */}
            <div className="relative w-48 sm:w-72 hidden sm:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Buscar transacciones, reportes..." 
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 bg-gray-50/50"
              />
            </div>
          </div>

          {/* Iconos de usuario y notificaciones */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative rounded-lg hover:bg-gray-50">
              <Bell className="w-5 h-5" />
              <span className="w-2 h-2 bg-indigo-600 rounded-full absolute top-2 right-2"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" 
                alt="Avatar" 
                className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-700 leading-none">Ana Martínez</p>
                <span className="text-xs text-gray-400">Admin Meta</span>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido Dinámico con Padding Responsivo (p-4 sm:p-6 lg:p-8) */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 max-w-7xl w-full mx-auto">
          
          {/* VISTA 1: DASHBOARD PRINCIPAL */}
          {activeTab === 'dashboard' && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">SaaS Analytics</h1>
                  <p className="text-sm sm:text-base text-gray-500 mt-1">Bienvenido de vuelta, Ana. Aquí está el rendimiento de tu negocio hoy.</p>
                </div>
                
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <select 
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value as '7_months' | '3_months')}
                    className="text-xs sm:text-sm font-medium text-gray-600 bg-transparent focus:outline-none cursor-pointer pr-2"
                  >
                    <option value="7_months">Últimos 7 meses</option>
                    <option value="3_months">Últimos 3 meses</option>
                  </select>
                </div>
              </div>

              {/* Grilla de Métricas */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8">
                {metrics.map((metric, index) => (
                  <KpiCard key={index} {...metric} />
                ))}
              </div>

              {/* Gráfico Principal */}
              <div className="w-full mb-6 sm:mb-8 overflow-hidden">
                <AnalyticsChart data={chartDataToShow} period={periodText} />
              </div>

              {/* Tabla de Transacciones */}
              <div className="w-full overflow-hidden">
                <TransactionTable transactions={recentTransactions} />
              </div>
            </>
          )}

          {/* VISTA 2: SECCIÓN DE CLIENTES */}
          {activeTab === 'clientes' && (
            <div className="w-full">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Clientes</h1>
                <p className="text-sm sm:text-base text-gray-500 mt-1">Monitorea y gestiona las cuentas de tu infraestructura SaaS.</p>
              </div>
              <CustomerList customers={mockCustomers} />
            </div>
          )}

          {/* VISTAS PROVISIONALES */}
          {!['dashboard', 'clientes'].includes(activeTab) && (
            <div className="text-center py-16 sm:py-20 bg-white border border-gray-100 rounded-2xl shadow-sm px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">Sección en Construcción</h2>
              <p className="text-sm text-gray-400 mt-1">La vista de "{activeTab}" está lista para ser conectada a la API.</p>
            </div>
          )}

        </main>

      </div>
    </div>
  );
}

export default App;