import React, { useState } from 'react';
import { Stage, Layer, Group, Rect, Text } from 'react-konva';

// ─── Screen 2: Parking Lot UI ───────────────────────────────────────────────
const ParkingLot = ({ vehicleInfo, slots, onBack, onBookSlot }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSlotClick = (slot) => {
    if (slot.booked) return;
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleConfirmBooking = () => {
    onBookSlot(vehicleInfo.type, selectedSlot.id);
    closeModal();
    onBack(); // Go back to vehicle selection after booking
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSlot(null);
  };

  return (
    <div style={styles.container}>
      {/* Header Info */}
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backBtn}>← Back</button>
        <div style={styles.vehicleInfo}>
          <span style={styles.badge(vehicleInfo.type)}>
            {vehicleInfo.type === 'car' ? '🚘 Car' : '🏍️ Motorcycle'}
          </span>
          <span style={styles.plate}>Plate: <strong>{vehicleInfo.plate}</strong></span>
        </div>
      </div>

      {/* Konva Canvas */}
      <Stage width={650} height={220} style={{ margin: '0 auto' }}>
        <Layer>
          {slots.map((slot) => (
            <Group key={slot.id} onClick={() => handleSlotClick(slot)} cursor="pointer">
              <Rect
                x={slot.x}
                y={slot.y}
                width={100}
                height={60}
                fill={slot.booked ? '#e74c3c' : '#3498db'}
                cornerRadius={8}
                shadowColor="black"
                shadowBlur={4}
                shadowOpacity={0.2}
                shadowOffset={{ x: 2, y: 2 }}
              />
              <Text
                x={slot.x}
                y={slot.y + 60 / 2 - 8}
                width={100}
                text={slot.label}
                fontSize={18}
                fontStyle="bold"
                align="center"
                fill="white"
                listening={false}
              />
              {slot.booked && (
                <Text
                  x={slot.x}
                  y={slot.y + 60 / 2 + 12}
                  width={100}
                  text="BOOKED"
                  fontSize={12}
                  align="center"
                  fill="rgba(255,255,255,0.9)"
                  listening={false}
                />
              )}
            </Group>
          ))}
        </Layer>
      </Stage>

      {/* Booking Confirmation Modal */}
      {showModal && selectedSlot && (
        <div style={modalStyles.overlay} onClick={closeModal}>
          <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 10px' }}>Confirm Booking</h3>
            <p style={{ color: '#555', margin: '0 0 8px' }}>
              Slot: <strong>{selectedSlot.label}</strong>
            </p>
            <p style={{ color: '#555', margin: '0 0 8px' }}>
              Vehicle: <strong>{vehicleInfo.type.toUpperCase()}</strong>
            </p>
            <p style={{ color: '#555', margin: '0 0 20px' }}>
              Plate: <strong>{vehicleInfo.plate}</strong>
            </p>
            <div style={modalStyles.buttonGroup}>
              <button style={modalStyles.confirmBtn} onClick={handleConfirmBooking}>
                ✅ Confirm
              </button>
              <button style={modalStyles.cancelBtn} onClick={closeModal}>
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Styles ─────────────────────────────────────────────────────────────────
const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
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

export default ParkingLot;