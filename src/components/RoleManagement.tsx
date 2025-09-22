import React, { useState } from 'react';
import { Plus, Search, Edit, Eye, Users as UsersIcon, UserCheck } from 'lucide-react';
import { mockRoles } from '../data/mockData';
import { Role } from '../types';

function RoleManagement() {
  const [roles] = useState<Role[]>(mockRoles);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoles = roles.filter(role =>
    role.shipName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.roleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.issuedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Activo';
      case 'expired':
        return 'Expirado';
      case 'cancelled':
        return 'Cancelado';
      default:
        return 'Desconocido';
    }
  };

  const getTripTypeText = (tripType: string) => {
    return tripType === 'domestic' ? 'Nacional' : 'Internacional';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestión de Roles</h2>
          <p className="text-gray-600">Administre los roles de tripulación y pasajeros</p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Nuevo Rol</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar por embarcación, número de rol o emisor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      {/* Roles Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Embarcación
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo de Viaje
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Personal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vigencia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Emisor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRoles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <UsersIcon className="h-5 w-5 text-orange-500 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{role.roleNumber}</div>
                        <div className="text-sm text-gray-500">{role.roleDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{role.shipName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      role.tripType === 'domestic' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {getTripTypeText(role.tripType)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4 text-sm text-gray-900">
                      <div className="flex items-center">
                        <UserCheck className="h-4 w-4 text-blue-500 mr-1" />
                        <span>{role.totalCrew} tripulantes</span>
                      </div>
                      <div className="flex items-center">
                        <UsersIcon className="h-4 w-4 text-green-500 mr-1" />
                        <span>{role.totalPassengers} pasajeros</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>Hasta: {new Date(role.validUntil).toLocaleDateString('es-CO')}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(role.validUntil) > new Date() ? 'Vigente' : 'Vencido'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {role.issuedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(role.status)}`}>
                      {getStatusText(role.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900 p-1"
                        title="Ver detalles"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        className="text-orange-600 hover:text-orange-900 p-1"
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Role Details Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRoles.map((role) => (
          <div key={role.id} className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{role.shipName}</h3>
                  <p className="text-sm text-gray-600">{role.roleNumber}</p>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(role.status)}`}>
                  {getStatusText(role.status)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {/* Crew Members */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <UserCheck className="h-4 w-4 mr-1 text-blue-500" />
                    Tripulación ({role.totalCrew})
                  </h4>
                  <div className="space-y-2">
                    {role.crewMembers.slice(0, 3).map((crew) => (
                      <div key={crew.id} className="flex justify-between text-sm">
                        <span className="text-gray-900">{crew.name}</span>
                        <span className="text-gray-500">{crew.position}</span>
                      </div>
                    ))}
                    {role.crewMembers.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{role.crewMembers.length - 3} más...
                      </div>
                    )}
                  </div>
                </div>

                {/* Passengers */}
                {role.totalPassengers > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <UsersIcon className="h-4 w-4 mr-1 text-green-500" />
                      Pasajeros ({role.totalPassengers})
                    </h4>
                    <div className="space-y-2">
                      {role.passengers.slice(0, 3).map((passenger) => (
                        <div key={passenger.id} className="flex justify-between text-sm">
                          <span className="text-gray-900">{passenger.name}</span>
                          <span className="text-gray-500">{passenger.nationality}</span>
                        </div>
                      ))}
                      {role.passengers.length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{role.passengers.length - 3} más...
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="border-t pt-4 flex justify-between text-xs text-gray-500">
                  <span>Emisor: {role.issuedBy}</span>
                  <span>Vigente hasta: {new Date(role.validUntil).toLocaleDateString('es-CO')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <UsersIcon className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Roles Activos</p>
              <p className="text-2xl font-semibold text-gray-900">
                {roles.filter(r => r.status === 'active').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Tripulantes</p>
              <p className="text-2xl font-semibold text-gray-900">
                {roles.reduce((total, role) => total + role.totalCrew, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <UsersIcon className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Pasajeros</p>
              <p className="text-2xl font-semibold text-gray-900">
                {roles.reduce((total, role) => total + role.totalPassengers, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <UsersIcon className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Viajes Internacionales</p>
              <p className="text-2xl font-semibold text-gray-900">
                {roles.filter(r => r.tripType === 'international').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleManagement;