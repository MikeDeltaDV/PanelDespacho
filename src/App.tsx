import React, { useState } from 'react';
import { Ship, FileText, Users, BarChart3 } from 'lucide-react';
import Dashboard from './components/Dashboard';
import ShipRegistry from './components/ShipRegistry';
import DispatchManagement from './components/DispatchManagement';
import RoleManagement from './components/RoleManagement';
import './App.css';

type Tab = 'dashboard' | 'ships' | 'dispatches' | 'roles';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const tabs = [
    { id: 'dashboard' as Tab, label: 'Dashboard', icon: BarChart3 },
    { id: 'ships' as Tab, label: 'Registro de Embarcaciones', icon: Ship },
    { id: 'dispatches' as Tab, label: 'Gestión de Despachos', icon: FileText },
    { id: 'roles' as Tab, label: 'Gestión de Roles', icon: Users },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'ships':
        return <ShipRegistry />;
      case 'dispatches':
        return <DispatchManagement />;
      case 'roles':
        return <RoleManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-blue-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-700 p-3 rounded-lg">
                <Ship className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Sistema de Gestión de Embarcaciones
                </h1>
                <p className="text-sm text-gray-600">
                  Instituto Colombiano Agropecuario - ICA
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Sistema ICA</p>
                <p className="text-xs text-gray-500">Despachos y Roles</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-700 text-blue-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 Instituto Colombiano Agropecuario - ICA. Sistema de Gestión de Embarcaciones
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;