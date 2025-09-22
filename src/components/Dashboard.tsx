import React from 'react';
import { Ship, FileText, Users, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { mockShips, mockDispatches, mockRoles } from '../data/mockData';
import StatsCard from './StatsCard';

function Dashboard() {
  const totalShips = mockShips.length;
  const activeShips = mockShips.filter(ship => ship.status === 'active').length;
  const totalDispatches = mockDispatches.length;
  const activeDispatches = mockDispatches.filter(dispatch => dispatch.status === 'authorized' || dispatch.status === 'departed').length;
  const totalRoles = mockRoles.length;
  const activeRoles = mockRoles.filter(role => role.status === 'active').length;

  const recentDispatches = mockDispatches.slice(0, 3);
  const recentRoles = mockRoles.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Embarcaciones Registradas"
          value={totalShips}
          subtitle={`${activeShips} activas`}
          icon={Ship}
          color="blue"
        />
        <StatsCard
          title="Despachos"
          value={totalDispatches}
          subtitle={`${activeDispatches} en curso`}
          icon={FileText}
          color="green"
        />
        <StatsCard
          title="Roles Activos"
          value={totalRoles}
          subtitle={`${activeRoles} vigentes`}
          icon={Users}
          color="orange"
        />
        <StatsCard
          title="Eficiencia"
          value="96%"
          subtitle="Últimos 30 días"
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Dispatches */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-green-600" />
              Despachos Recientes
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentDispatches.map((dispatch) => (
                <div key={dispatch.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{dispatch.shipName}</h4>
                    <p className="text-sm text-gray-600">
                      {dispatch.departurePort} → {dispatch.arrivalPort}
                    </p>
                    <p className="text-xs text-gray-500">{dispatch.dispatchNumber}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {dispatch.status === 'authorized' && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                    {dispatch.status === 'arrived' && (
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                    )}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      dispatch.status === 'authorized'
                        ? 'bg-green-100 text-green-800'
                        : dispatch.status === 'arrived'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {dispatch.status === 'authorized' ? 'Autorizado' :
                       dispatch.status === 'arrived' ? 'Arribado' : 'Pendiente'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Roles */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="h-5 w-5 mr-2 text-orange-600" />
              Roles Recientes
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentRoles.map((role) => (
                <div key={role.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{role.shipName}</h4>
                    <p className="text-sm text-gray-600">
                      {role.totalCrew} tripulantes, {role.totalPassengers} pasajeros
                    </p>
                    <p className="text-xs text-gray-500">{role.roleNumber}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                      Activo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ships Status Overview */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Ship className="h-5 w-5 mr-2 text-blue-600" />
            Estado de Embarcaciones
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockShips.map((ship) => (
              <div key={ship.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{ship.name}</h4>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    ship.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : ship.status === 'maintenance'
                      ? 'bg-yellow-100 text-yellow-800'
                      : ship.status === 'inspection'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {ship.status === 'active' ? 'Activa' :
                     ship.status === 'maintenance' ? 'Mantenimiento' :
                     ship.status === 'inspection' ? 'Inspección' : 'Inactiva'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{ship.registrationNumber}</p>
                <p className="text-xs text-gray-500">
                  Puerto base: {ship.homePort} | Tipo: {ship.type}
                </p>
                <p className="text-xs text-gray-500">
                  Última inspección: {ship.lastInspection}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Acciones Rápidas</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
              <Ship className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-medium text-blue-700">Registrar Embarcación</span>
            </button>
            <button className="flex items-center justify-center p-4 border border-green-300 rounded-lg hover:bg-green-50 transition-colors">
              <FileText className="h-6 w-6 text-green-600 mr-2" />
              <span className="font-medium text-green-700">Nuevo Despacho</span>
            </button>
            <button className="flex items-center justify-center p-4 border border-orange-300 rounded-lg hover:bg-orange-50 transition-colors">
              <Users className="h-6 w-6 text-orange-600 mr-2" />
              <span className="font-medium text-orange-700">Crear Rol</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;