import React from 'react';
// Cambiamos a 'import type' porque KpiMetric es solo una interfaz de TS
import type { KpiMetric } from '../../types/analytics';

export const KpiCard: React.FC<KpiMetric> = ({ title, value, change, isPositive, icon: Icon }) => {
  return (
    <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <div className="flex items-center mt-2 text-sm">
          <span className={`font-semibold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
            {isPositive ? '+' : ''}{change}
          </span>
          <span className="ml-2 text-gray-500">vs. último mes</span>
        </div>
      </div>
    </div>
  );
};