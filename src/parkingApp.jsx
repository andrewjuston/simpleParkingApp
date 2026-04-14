// ParkingApp.jsx
import React, { useState } from 'react';
import VehicleForm from './VehicleForm';
import ParkingLot from './ParkingLot';
import ParkingStatus from './ParkingStatus';
import { generateSlots } from './utils';

// ─── Main App Router (State-based) ──────────────────────────────────────────
export default function ParkingApp() {
  const [view, setView] = useState('form');
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [carSlots, setCarSlots] = useState(generateSlots('car'));
  const [motorcycleSlots, setMotorcycleSlots] = useState(generateSlots('motorcycle'));

  const handleNext = (info) => {
    setVehicleInfo(info);
    setView('parking');
  };

  const handleCheck = () => {
    setView('check');
  };

  const handleBack = () => {
    setView('form');
    setVehicleInfo(null);
  };

  const handleBookSlot = (type, slotId) => {
    if (type === 'car') {
      setCarSlots((prev) =>
        prev.map((s) => (s.id === slotId ? { ...s, booked: true } : s))
      );
    } else {
      setMotorcycleSlots((prev) =>
        prev.map((s) => (s.id === slotId ? { ...s, booked: true } : s))
      );
    }
  };

  return (
    <>
      {view === 'form' && <VehicleForm onNext={handleNext} onCheck={handleCheck} />}
      {view === 'parking' && (
        <ParkingLot
          vehicleInfo={vehicleInfo}
          slots={vehicleInfo.type === 'car' ? carSlots : motorcycleSlots}
          onBack={handleBack}
          onBookSlot={handleBookSlot}
        />
      )}
      {view === 'check' && (
        <ParkingStatus carSlots={carSlots} motorcycleSlots={motorcycleSlots} onBack={handleBack} />
      )}
    </>
  );
}

// ─── Inline Styles ──────────────────────────────────────────────────────────
const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  formContainer: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '420px',
    margin: '60px auto',
    padding: '30px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  heading: { margin: '0 0 20px', color: '#2c3e50' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  fieldGroup: { textAlign: 'left' },
  label: { display: 'block', marginBottom: '6px', fontWeight: '500', color: '#34495e' },
  typeSelector: { display: 'flex', gap: '12px' },
  typeBtn: {
    flex: 1,
    padding: '12px',
    border: '2px solid #ecf0f1',
    borderRadius: '8px',
    background: '#f8f9fa',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s',
  },
  typeBtnActive: {
    borderColor: '#3498db',
    background: '#ebf5fb',
    color: '#2980b9',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '2px solid #bdc3c7',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  error: { color: '#e74c3c', fontSize: '13px', margin: '6px 0 0' },
  primaryBtn: {
    marginTop: '10px',
    padding: '14px',
    background: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  secondaryBtn: {
    marginTop: '10px',
    padding: '14px',
    background: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '0 10px',
  },
  backBtn: {
    background: 'transparent',
    border: 'none',
    color: '#7f8c8d',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
  },
  vehicleInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
  badge: (type) => ({
    padding: '6px 12px',
    background: type === 'car' ? '#e8f6f3' : '#fef9e7',
    color: type === 'car' ? '#1abc9c' : '#f39c12',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
  }),
  plate: { color: '#555', fontSize: '14px' },
};

const modalStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
  },
  modal: {
    background: '#fff', padding: '24px', borderRadius: '12px',
    width: '320px', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  buttonGroup: { display: 'flex', justifyContent: 'space-around', marginTop: '16px' },
  confirmBtn: {
    padding: '10px 20px', background: '#2ecc71', color: '#fff',
    border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer',
  },
  cancelBtn: {
    padding: '10px 20px', background: '#e74c3c', color: '#fff',
    border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer',
  },
};