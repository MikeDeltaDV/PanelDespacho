import React from 'react';
import { X, Ship as ShipIcon, User, Calendar, Ruler, Settings } from 'lucide-react';
import { Ship } from '../types';

interface ShipDetailsProps {
  ship: Ship;
  onClose: () => void;
}

function ShipDetails({ ship, onClose }: ShipDetailsProps) {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-700 p-2 rounded-lg">
              <ShipIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{ship.name}</h3>
              <p className="text-sm text-gray-500">{ship.registrationNumber}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Status Badge */}
          <div className="mb-6">
            <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(ship.status)}`}>
              {getStatusText(ship.status)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 flex items-center">
                <ShipIcon className="h-4 w-4 mr-2 text-blue-600" />
                Información Básica
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Nombre:</span>
                  <p className="text-gray-900">{ship.name}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Matrícula:</span>
                  <p className="text-gray-900">{ship.registrationNumber}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Bandera:</span>
                  <p className="text-gray-900">{ship.flag}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Tipo:</span>
                  <p className="text-gray-900">{getTypeText(ship.type)}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Puerto Base:</span>
                  <p className="text-gray-900">{ship.homePort}</p>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 flex items-center">
                <Ruler className="h-4 w-4 mr-2 text-green-600" />
                Especificaciones Técnicas
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Tonelaje:</span>
                  <p className="text-gray-900">{ship.tonnage} TRB</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Eslora:</span>
                  <p className="text-gray-900">{ship.length} m</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Manga:</span>
                  <p className="text-gray-900">{ship.width} m</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Puntal:</span>
                  <p className="text-gray-900">{ship.depth} m</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Potencia:</span>
                  <p className="text-gray-900">{ship.enginePower} HP</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Material:</span>
                  <p className="text-gray-900">{ship.materialType}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Año de Construcción:</span>
                  <p className="text-gray-900">{ship.constructionYear}</p>
                </div>
              </div>
            </div>

            {/* Owner and Captain Information */}
            <div className="space-y-6">
              {/* Owner */}
              <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-900 flex items-center">
                  <User className="h-4 w-4 mr-2 text-orange-600" />
                  Propietario
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Nombre:</span>
                    <p className="text-gray-900">{ship.owner}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Documento:</span>
                    <p className="text-gray-900">{ship.ownerDocument}</p>
                  </div>
                </div>
              </div>

              {/* Captain */}
              <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-900 flex items-center">
                  <Settings className="h-4 w-4 mr-2 text-purple-600" />
                  Capitán
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Nombre:</span>
                    <p className="text-gray-900">{ship.captain}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Licencia:</span>
                    <p className="text-gray-900">{ship.captainLicense}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dates Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-md font-semibold text-gray-900 flex items-center mb-4">
              <Calendar className="h-4 w-4 mr-2 text-blue-600" />
              Fechas Importantes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="font-medium text-gray-700">Fecha de Registro:</span>
                <p className="text-gray-900">{new Date(ship.registrationDate).toLocaleDateString('es-CO')}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Última Inspección:</span>
                <p className="text-gray-900">{new Date(ship.lastInspection).toLocaleDateString('es-CO')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShipDetails;