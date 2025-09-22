export interface Ship {
  id: string;
  name: string;
  registrationNumber: string;
  flag: string;
  type: 'cargo' | 'passenger' | 'fishing' | 'recreational' | 'other';
  tonnage: number;
  length: number;
  width: number;
  depth: number;
  enginePower: number;
  owner: string;
  ownerDocument: string;
  captain: string;
  captainLicense: string;
  homePort: string;
  constructionYear: number;
  materialType: string;
  registrationDate: string;
  lastInspection: string;
  status: 'active' | 'inactive' | 'maintenance' | 'inspection';
}

export interface Dispatch {
  id: string;
  shipId: string;
  shipName: string;
  dispatchNumber: string;
  dispatchDate: string;
  departurePort: string;
  arrivalPort: string;
  purpose: string;
  cargo: string;
  cargoWeight?: number;
  estimatedDeparture: string;
  estimatedArrival: string;
  actualDeparture?: string;
  actualArrival?: string;
  authority: string;
  authorizedBy: string;
  status: 'pending' | 'authorized' | 'departed' | 'arrived' | 'cancelled';
  observations?: string;
}

export interface Role {
  id: string;
  shipId: string;
  shipName: string;
  roleNumber: string;
  roleDate: string;
  tripType: 'domestic' | 'international';
  crewMembers: CrewMember[];
  passengers: Passenger[];
  totalCrew: number;
  totalPassengers: number;
  issuedBy: string;
  validUntil: string;
  status: 'active' | 'expired' | 'cancelled';
}

export interface CrewMember {
  id: string;
  name: string;
  document: string;
  position: string;
  license: string;
  nationality: string;
  birthDate: string;
  experience: number;
}

export interface Passenger {
  id: string;
  name: string;
  document: string;
  nationality: string;
  birthDate: string;
  gender: 'male' | 'female';
  emergencyContact: string;
}