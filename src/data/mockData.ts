import { Ship, Dispatch, Role } from '../types';

export const mockShips: Ship[] = [
  {
    id: '1',
    name: 'IMPALA CAMPANA',
    registrationNumber: 'IC-2024-001',
    flag: 'Colombia',
    type: 'cargo',
    tonnage: 1250,
    length: 45.2,
    width: 8.5,
    depth: 4.2,
    enginePower: 450,
    owner: 'Naviera del Caribe S.A.S',
    ownerDocument: '900.123.456-7',
    captain: 'Carlos Alberto Mendoza',
    captainLicense: 'CAP-2023-0456',
    homePort: 'Cartagena',
    constructionYear: 2018,
    materialType: 'Acero',
    registrationDate: '2024-01-15',
    lastInspection: '2024-10-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'MAGDALENA EXPLORER',
    registrationNumber: 'ME-2023-089',
    flag: 'Colombia',
    type: 'passenger',
    tonnage: 850,
    length: 38.7,
    width: 7.8,
    depth: 3.9,
    enginePower: 320,
    owner: 'Turismo Fluvial Colombia Ltda',
    ownerDocument: '890.987.654-3',
    captain: 'María Elena Rodríguez',
    captainLicense: 'CAP-2022-0789',
    homePort: 'Barranquilla',
    constructionYear: 2020,
    materialType: 'Fibra de vidrio',
    registrationDate: '2023-03-22',
    lastInspection: '2024-11-08',
    status: 'active'
  },
  {
    id: '3',
    name: 'PESCADOR DORADO',
    registrationNumber: 'PD-2024-024',
    flag: 'Colombia',
    type: 'fishing',
    tonnage: 420,
    length: 28.3,
    width: 6.2,
    depth: 3.1,
    enginePower: 180,
    owner: 'Cooperativa Pesquera del Atlántico',
    ownerDocument: '800.456.123-9',
    captain: 'José Luis Martínez',
    captainLicense: 'CAP-2023-0234',
    homePort: 'Santa Marta',
    constructionYear: 2019,
    materialType: 'Madera reforzada',
    registrationDate: '2024-02-10',
    lastInspection: '2024-09-20',
    status: 'maintenance'
  }
];

export const mockDispatches: Dispatch[] = [
  {
    id: '1',
    shipId: '1',
    shipName: 'IMPALA CAMPANA',
    dispatchNumber: 'DESP-2024-0156',
    dispatchDate: '2024-12-15',
    departurePort: 'Cartagena',
    arrivalPort: 'Barranquilla',
    purpose: 'Transporte de carga general',
    cargo: 'Contenedores varios',
    cargoWeight: 850,
    estimatedDeparture: '2024-12-16 06:00',
    estimatedArrival: '2024-12-16 18:00',
    authority: 'Capitanía de Puerto Cartagena',
    authorizedBy: 'Cap. Fernando Jiménez',
    status: 'authorized',
    observations: 'Condiciones climáticas favorables'
  },
  {
    id: '2',
    shipId: '2',
    shipName: 'MAGDALENA EXPLORER',
    dispatchNumber: 'DESP-2024-0157',
    dispatchDate: '2024-12-14',
    departurePort: 'Barranquilla',
    arrivalPort: 'Ciénaga',
    purpose: 'Turismo fluvial',
    cargo: 'Pasajeros',
    estimatedDeparture: '2024-12-15 08:00',
    estimatedArrival: '2024-12-15 16:00',
    actualDeparture: '2024-12-15 08:15',
    actualArrival: '2024-12-15 15:45',
    authority: 'Capitanía de Puerto Barranquilla',
    authorizedBy: 'Cap. Ana María López',
    status: 'arrived',
    observations: 'Viaje exitoso con 45 pasajeros'
  }
];

export const mockRoles: Role[] = [
  {
    id: '1',
    shipId: '1',
    shipName: 'IMPALA CAMPANA',
    roleNumber: 'ROL-2024-0089',
    roleDate: '2024-12-15',
    tripType: 'domestic',
    crewMembers: [
      {
        id: '1',
        name: 'Carlos Alberto Mendoza',
        document: '12.345.678',
        position: 'Capitán',
        license: 'CAP-2023-0456',
        nationality: 'Colombiana',
        birthDate: '1978-05-12',
        experience: 15
      },
      {
        id: '2',
        name: 'Roberto Silva Castro',
        document: '23.456.789',
        position: 'Primer Oficial',
        license: 'PO-2023-0789',
        nationality: 'Colombiana',
        birthDate: '1985-11-03',
        experience: 8
      },
      {
        id: '3',
        name: 'Miguel Ángel Torres',
        document: '34.567.890',
        position: 'Maquinista',
        license: 'MAQ-2023-0234',
        nationality: 'Colombiana',
        birthDate: '1980-09-22',
        experience: 12
      }
    ],
    passengers: [],
    totalCrew: 3,
    totalPassengers: 0,
    issuedBy: 'Cap. Fernando Jiménez',
    validUntil: '2024-12-31',
    status: 'active'
  },
  {
    id: '2',
    shipId: '2',
    shipName: 'MAGDALENA EXPLORER',
    roleNumber: 'ROL-2024-0090',
    roleDate: '2024-12-14',
    tripType: 'domestic',
    crewMembers: [
      {
        id: '4',
        name: 'María Elena Rodríguez',
        document: '45.678.901',
        position: 'Capitán',
        license: 'CAP-2022-0789',
        nationality: 'Colombiana',
        birthDate: '1982-03-15',
        experience: 10
      },
      {
        id: '5',
        name: 'Jorge Luis Herrera',
        document: '56.789.012',
        position: 'Marinero',
        license: 'MAR-2023-0567',
        nationality: 'Colombiana',
        birthDate: '1988-07-28',
        experience: 6
      }
    ],
    passengers: [
      {
        id: '1',
        name: 'Ana Lucía Gómez',
        document: '67.890.123',
        nationality: 'Colombiana',
        birthDate: '1990-04-10',
        gender: 'female',
        emergencyContact: 'Luis Gómez - 312-555-0123'
      }
    ],
    totalCrew: 2,
    totalPassengers: 1,
    issuedBy: 'Cap. Ana María López',
    validUntil: '2024-12-31',
    status: 'active'
  }
];