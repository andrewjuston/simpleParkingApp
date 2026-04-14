// ─── Layout Constants ───────────────────────────────────────────────────────
export const SLOT_WIDTH = 100;
export const SLOT_HEIGHT = 60;
export const GAP = 15;
export const STAGE_WIDTH = 650;
export const STAGE_HEIGHT = 220;

// ─── Helper: Generate Slots for Selected Type ───────────────────────────────
export const generateSlots = (type) => {
  const slots = [];
  const prefix = type === 'car' ? 'C' : 'M';
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 5; col++) {
      slots.push({
        id: `${type}-${row}-${col}`,
        type,
        label: `${prefix}${row * 5 + col + 1}`,
        x: col * (SLOT_WIDTH + GAP) + 40,
        y: row * (SLOT_HEIGHT + GAP) + 30,
        booked: false,
      });
    }
  }
  return slots;
};