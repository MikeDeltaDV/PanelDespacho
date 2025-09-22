import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Ship } from '../types';

interface ShipFormProps {
  ship?: Ship | null;
  onClose: () => void;
  onSave: (ship: Partial<Ship>) => void;
}

function ShipForm({ ship, onClose, onSave }: ShipFormProps) {
  const [formData, setFormData] = useState<Partial<Ship>>({
    name: ship?.name || '',
    registrationNumber: ship?.registrationNumber || '',
    flag: ship?.flag || 'Colombia',
    type: ship?.type || 'cargo',
    tonnage: ship?.tonnage || 0,
    length: ship?.length || 0,
    width: ship?.width || 0,
    depth: ship?.depth || 0,
    enginePower: ship?.enginePower || 0,
    owner: ship?.owner || '',
    ownerDocument: ship?.ownerDocument || '',
    captain: ship?.captain || '',
    captainLicense: ship?.captainLicense || '',
    homePort: ship?.homePort || '',
    constructionYear: ship?.constructionYear || new Date().getFullYear(),
    materialType: ship?.materialType || '',
    registrationDate: ship?.registrationDate || new Date().toISOString().split('T')[0],
    lastInspection: ship?.lastInspection || new Date().toISOString().split('T')[0],
    status: ship?.status || 'active'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'tonnage' || name === 'length' || name === 'width' || name === 'depth' || name === 'enginePower' || name === 'constructionYear'
        ? Number(value)
        : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {ship ? 'Editar Embarcación' : 'Nueva Embarcación'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 border-b pb-2">Información Básica</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de la Embarcación *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Matrícula *
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bandera
                </label>
                <input
                  type="text"
                  name="flag"
                  value={formData.flag}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Embarcación *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="cargo">Carga</option>
                  <option value="passenger">Pasajeros</option>
                  <option value="fishing">Pesquera</option>
                  <option value="recreational">Recreativa</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Puerto Base *
                </label>
                <input
                  type="text"
                  name="homePort"
                  value={formData.homePort}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="active">Activa</option>
                  <option value="inactive">Inactiva</option>
                  <option value="maintenance">Mantenimiento</option>
                  <option value="inspection">Inspección</option>
                </select>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 border-b pb-2">Especificaciones Técnicas</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tonelaje (TRB)
                  </label>
                  <input
                    type="number"
                    name="tonnage"
                    value={formData.tonnage}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Eslora (m)
                  </label>
                  <input
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Manga (m)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Puntal (m)
                  </label>
                  <input
                    type="number"
                    name="depth"
                    value={formData.depth}
                    onChange={handleChange}
                    min="0"
                    step="0.1"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Potencia Motor (HP)
                  </label>
                  <input
                    type="number"
                    name="enginePower"
                    value={formData.enginePower}
                    onChange={handleChange}
                    min="0"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Año de Construcción
                  </label>
                  <input
                    type="number"
                    name="constructionYear"
                    value={formData.constructionYear}
                    onChange={handleChange}
                    min="1900"
                    max={new Date().getFullYear()}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Material del Casco
                </label>
                <input
                  type="text"
                  name="materialType"
                  value={formData.materialType}
                  onChange={handleChange}
                  placeholder="Ej: Acero, Fibra de vidrio, Madera"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha de Registro
                  </label>
                  <input
                    type="date"
                    name="registrationDate"
                    value={formData.registrationDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Última Inspección
                  </label>
                  <input
                    type="date"
                    name="lastInspection"
                    value={formData.lastInspection}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Owner Information */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 border-b pb-2">Información del Propietario</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Propietario *
                </label>
                <input
                  type="text"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Documento del Propietario *
                </label>
                <input
                  type="text"
                  name="ownerDocument"
                  value={formData.ownerDocument}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Captain Information */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 border-b pb-2">Información del Capitán</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capitán *
                </label>
                <input
                  type="text"
                  name="captain"
                  value={formData.captain}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Licencia del Capitán *
                </label>
                <input
                  type="text"
                  name="captainLicense"
                  value={formData.captainLicense}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              {ship ? 'Actualizar' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShipForm;