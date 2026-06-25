import React, { useState } from 'react';
import { Search, UserCheck, UserX } from 'lucide-react'; // 👈 Simplemente quitamos 'Filter' de aquí
import type { Customer } from '../../types/analytics';

interface CustomerListProps {
  customers: Customer[];
}

export const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'todos' | 'activo' | 'inactivo'>('todos');

  // Lógica de Filtrado Combinada (Texto + Estado)
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'todos' || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
      {/* Controles de Búsqueda y Filtro */}
      <div className="p-6 border-b border-gray-100 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Directorio de Clientes Enterprise</h3>
          <p className="text-sm text-gray-500">Administra usuarios, planes y métricas de consumo de API.</p>
        </div>

        {/* Buscador interno */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 bg-gray-50/50"
          />
        </div>
      </div>

      {/* Pestañas de Filtro de Estado */}
      <div className="px-6 py-2 bg-gray-50/50 border-b border-gray-100 flex gap-2">
        {(['todos', 'activo', 'inactivo'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setStatusFilter(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              statusFilter === tab
                ? 'bg-white text-indigo-600 shadow-sm border border-gray-100'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tabla de Clientes */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/25">
              <th className="px-6 py-3">Usuario</th>
              <th className="px-6 py-3">Plan</th>
              <th className="px-6 py-3">Fecha de Alta</th>
              <th className="px-6 py-3">Consumo Volumétrico</th>
              <th className="px-6 py-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                  {/* Foto y Datos */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={customer.avatar} alt={customer.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-gray-900">{customer.name}</p>
                      <p className="text-xs text-gray-400">{customer.email}</p>
                    </div>
                  </td>
                  {/* Plan */}
                  <td className="px-6 py-4 font-medium text-gray-700">{customer.plan}</td>
                  {/* Fecha */}
                  <td className="px-6 py-4 text-gray-500">{customer.joinedDate}</td>
                  {/* Barra de Progreso de Consumo */}
                  <td className="px-6 py-4">
                    <div className="w-full max-w-xs flex items-center gap-3">
                      <div className="flex-1 w-32 bg-gray-100 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${customer.usage > 80 ? 'bg-amber-500' : 'bg-indigo-600'}`}
                          style={{ width: `${customer.usage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-gray-500">{customer.usage}%</span>
                    </div>
                  </td>
                  {/* Estado con Icono */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full ${
                      customer.status === 'activo' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {customer.status === 'activo' ? <UserCheck className="w-3 h-3" /> : <UserX className="w-3 h-3" />}
                      {customer.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-12 text-gray-400">
                  No se encontraron clientes que coincidan con los criterios.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};