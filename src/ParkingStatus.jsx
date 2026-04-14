import React from 'react';
import { Stage, Layer, Group, Rect, Text } from 'react-konva';
import { STAGE_WIDTH, STAGE_HEIGHT, SLOT_WIDTH, SLOT_HEIGHT } from './utils';

// ─── Screen 3: Parking Status Check (Read-only) ─────────────────────────────
const ParkingStatus = ({ carSlots, motorcycleSlots, onBack }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backBtn}>← Back</button>
        <h2 style={{ margin: 0, color: '#2c3e50' }}>Parking Lot Status</h2>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>Car Slots</h3>
        <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} style={{ margin: '0 auto' }}>
          <Layer>
            {carSlots.map((slot) => (
              <Group key={slot.id}>
                <Rect
                  x={slot.x}
                  y={slot.y}
                  width={SLOT_WIDTH}
                  height={SLOT_HEIGHT}
                  fill={slot.booked ? '#e74c3c' : '#3498db'}
                  cornerRadius={8}
                  shadowColor="black"
                  shadowBlur={4}
                  shadowOpacity={0.2}
                  shadowOffset={{ x: 2, y: 2 }}
                />
                <Text
                  x={slot.x}
                  y={slot.y + SLOT_HEIGHT / 2 - 8}
                  width={SLOT_WIDTH}
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
                    y={slot.y + SLOT_HEIGHT / 2 + 12}
                    width={SLOT_WIDTH}
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
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3>Motorcycle Slots</h3>
        <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} style={{ margin: '0 auto' }}>
          <Layer>
            {motorcycleSlots.map((slot) => (
              <Group key={slot.id}>
                <Rect
                  x={slot.x}
                  y={slot.y}
                  width={SLOT_WIDTH}
                  height={SLOT_HEIGHT}
                  fill={slot.booked ? '#e74c3c' : '#3498db'}
                  cornerRadius={8}
                  shadowColor="black"
                  shadowBlur={4}
                  shadowOpacity={0.2}
                  shadowOffset={{ x: 2, y: 2 }}
                />
                <Text
                  x={slot.x}
                  y={slot.y + SLOT_HEIGHT / 2 - 8}
                  width={SLOT_WIDTH}
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
                    y={slot.y + SLOT_HEIGHT / 2 + 12}
                    width={SLOT_WIDTH}
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
      </div>
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
};

export default ParkingStatus;