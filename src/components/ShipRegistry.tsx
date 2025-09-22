import React, { useState } from 'react';
import { Plus, Search, Edit, Eye, Trash2 } from 'lucide-react';
import { mockShips } from '../data/mockData';
import { Ship } from '../types';
import ShipForm from './ShipForm';
import ShipDetails from './ShipDetails';

function ShipRegistry() {
  const [ships] = useState<Ship[]>(mockShips);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredShips = ships.filter(ship =>
    ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ship.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ship.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'inspection':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Activa';
      case 'maintenance':
        return 'Mantenimiento';
      case 'inspection':
        return 'Inspección';
      default:
        return 'Inactiva';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'cargo':
        return 'Carga';
      case 'passenger':
        return 'Pasajeros';
      case 'fishing':
        return 'Pesquera';
      case 'recreational':
        return 'Recreativa';
      default:
        return 'Otro';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Registro de Embarcaciones</h2>
          <p className="text-gray-600">Gestione el registro completo de embarcaciones</p>
        </div>
        <button
          onClick={() => {
            setSelectedShip(null);
            setIsFormOpen(true);
          }}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Nueva Embarcación</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar por nombre, matrícula o propietario..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Ships Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Embarcación
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo / Tonelaje
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Propietario
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capitán
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
              {filteredShips.map((ship) => (
                <tr key={ship.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{ship.name}</div>
                      <div className="text-sm text-gray-500">{ship.registrationNumber}</div>
                      <div className="text-xs text-gray-400">{ship.homePort}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{getTypeText(ship.type)}</div>
                    <div className="text-sm text-gray-500">{ship.tonnage} TRB</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ship.owner}</div>
                    <div className="text-sm text-gray-500">{ship.ownerDocument}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ship.captain}</div>
                    <div className="text-sm text-gray-500">{ship.captainLicense}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ship.status)}`}>
                      {getStatusText(ship.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedShip(ship);
                          setIsDetailsOpen(true);
                        }}
                        className="text-blue-600 hover:text-blue-900 p-1"
                        title="Ver detalles"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedShip(ship);
                          setIsFormOpen(true);
                        }}
                        className="text-green-600 hover:text-green-900 p-1"
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('¿Está seguro de que desea eliminar esta embarcación?')) {
                            // Handle delete
                            console.log('Delete ship:', ship.id);
                          }
                        }}
                        className="text-red-600 hover:text-red-900 p-1"
                        title="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {isFormOpen && (
        <ShipForm
          ship={selectedShip}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedShip(null);
          }}
          onSave={(shipData) => {
            console.log('Save ship:', shipData);
            setIsFormOpen(false);
            setSelectedShip(null);
          }}
        />
      )}

      {isDetailsOpen && selectedShip && (
        <ShipDetails
          ship={selectedShip}
          onClose={() => {
            setIsDetailsOpen(false);
            setSelectedShip(null);
          }}
        />
      )}
    </div>
  );
}

export default ShipRegistry;