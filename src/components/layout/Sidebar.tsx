import React from 'react';
import { Home, Users, BarChart2, Settings, CreditCard, ShieldAlert, LogOut } from 'lucide-react';

// 1. Definimos qué propiedades necesita recibir el Sidebar desde App.tsx
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  // Añadimos un 'id' a cada elemento para identificarlo fácilmente al hacer clic
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'analiticas', icon: BarChart2, label: 'Analíticas' },
    { id: 'clientes', icon: Users, label: 'Clientes' },
    { id: 'suscripciones', icon: CreditCard, label: 'Suscripciones' },
    { id: 'seguridad', icon: ShieldAlert, label: 'Seguridad' },
    { id: 'configuracion', icon: Settings, label: 'Configuración' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex flex-col w-64 bg-white border-r border-gray-100 hidden md:flex">
      {/* Logo / Branding */}
      <div className="flex items-center gap-2 px-6 h-16 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
          N
        </div>
        <span className="text-lg font-bold text-gray-900">NexusSaaS</span>
      </div>

      {/* Menú de Navegación */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isItemActive = activeTab === item.id; // Verificamos si este botón es el activo

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)} // 👈 Al hacer clic, avisamos a App.tsx
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${
                isItemActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Footer del Sidebar */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-500 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-colors duration-150">
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};