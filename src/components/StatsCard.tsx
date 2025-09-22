import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

function StatsCard({ title, value, subtitle, icon: Icon, color }: StatsCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500 text-blue-100',
    green: 'bg-green-500 text-green-100',
    orange: 'bg-orange-500 text-orange-100',
    purple: 'bg-purple-500 text-purple-100',
  };

  const bgColorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    orange: 'bg-orange-50',
    purple: 'bg-purple-50',
  };

  return (
    <div className={`${bgColorClasses[color]} rounded-lg p-6 border border-gray-200`}>
      <div className="flex items-center">
        <div className={`${colorClasses[color]} rounded-lg p-3 mr-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;