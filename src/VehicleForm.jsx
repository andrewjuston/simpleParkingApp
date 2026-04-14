import React, { useState } from 'react';

// ─── Screen 1: Vehicle Form ─────────────────────────────────────────────────
const VehicleForm = ({ onNext, onCheck }) => {
  const [vehicleType, setVehicleType] = useState('car');
  const [plate, setPlate] = useState('');
  const [duration, setDuration] = useState(1);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!plate.trim()) {
      setError('License plate is required');
      return;
    }
    if (duration < 1) {
      setError('Duration must be at least 1 hour');
      return;
    }
    onNext({ type: vehicleType, plate: plate.toUpperCase().trim(), duration });
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>🚗 Book a Parking Slot</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Vehicle Type Selection */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Vehicle Type</label>
          <div style={styles.typeSelector}>
            {['car', 'motorcycle'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setVehicleType(type)}
                style={{
                  ...styles.typeBtn,
                  ...(vehicleType === type ? styles.typeBtnActive : {}),
                }}
              >
                {type === 'car' ? '🚘 Car' : '🏍️ Motorcycle'}
              </button>
            ))}
          </div>
        </div>

        {/* License Plate Input */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="plate">License Plate</label>
          <input
            id="plate"
            type="text"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            placeholder="e.g., ABC-1234"
            style={styles.input}
            maxLength={10}
          />
          {error && <p style={styles.error}>{error}</p>}
        </div>

        {/* Duration Input */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="duration">Parking Duration (hours)</label>
          <input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
            min="1"
            max="24"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.primaryBtn}>
          Continue to Parking Lot →
        </button>
        <button type="button" onClick={onCheck} style={styles.secondaryBtn}>
          Check Parking Availability
        </button>
      </form>
    </div>
  );
};

// ─── Styles ─────────────────────────────────────────────────────────────────
const styles = {
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
};

export default VehicleForm;