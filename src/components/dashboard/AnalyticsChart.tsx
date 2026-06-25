import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { ChartData } from '../../types/analytics';

// 1. Aquí le avisamos a TypeScript que este componente ahora necesita recibir 'data' Y ADEMÁS 'period'
interface AnalyticsChartProps {
  data: ChartData[];
  period: string; // 👈 Este es el texto que cambiará dinámicamente
}

// 2. Aquí recibimos ambas cosas en el componente
export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data, period }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-100 rounded-xl shadow-sm h-[400px]">
      <div className="flex flex-col mb-6">
        <h3 className="text-lg font-bold text-gray-900">Resumen de Ingresos</h3>
        {/* 3. 👇 Aquí pintamos el texto dinámico en el subtítulo */}
        <p className="text-sm text-gray-500">Crecimiento financiero en los {period}</p>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #f3f4f6' }}
              formatter={(value: any) => [`$${value}`, 'Ingresos']}
            />
            
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#6366f1" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};