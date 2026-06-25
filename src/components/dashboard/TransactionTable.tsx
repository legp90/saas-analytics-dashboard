import React from 'react';
import type { Transaction } from '../../types/analytics';

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  // Configuración de estilos rápidos para los Badges de estado
  const statusStyles = {
    completado: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    pendiente: 'bg-amber-50 text-amber-700 border-amber-200',
    fallido: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Transacciones Recientes</h3>
        <p className="text-sm text-gray-500">Monitoreo en tiempo real de los pagos entrantes</p>
      </div>

      {/* Contenedor responsivo para permitir scroll si la pantalla es muy chica */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/75 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">Cliente</th>
              <th className="px-6 py-3">ID Transacción</th>
              <th className="px-6 py-3">Plan</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3 text-right">Monto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                {/* Información del Cliente */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={tx.customer.avatar} alt={tx.customer.name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-gray-900">{tx.customer.name}</p>
                    <p className="text-xs text-gray-400">{tx.customer.email}</p>
                  </div>
                </td>
                {/* ID y Fecha */}
                <td className="px-6 py-4">
                  <span className="font-mono text-gray-500">{tx.id}</span>
                  <p className="text-xs text-gray-400 mt-0.5">{tx.date}</p>
                </td>
                {/* Plan contratado */}
                <td className="px-6 py-4 font-medium text-gray-700">{tx.plan}</td>
                {/* Badge de Estado Dinámico */}
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${statusStyles[tx.status]}`}>
                    {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                  </span>
                </td>
                {/* Monto final */}
                <td className="px-6 py-4 text-right font-semibold text-gray-900">{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};