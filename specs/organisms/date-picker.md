# Date & Time Picker — Solar3 Design System

> Source: Figma → Component "Date & time picker 2.0_Main Components" (13038:58245)  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

The Date & Time Picker is a complex organism used for selecting specific dates, date ranges, and time values. It combines multiple sub-components (molecules and atoms) into a complete calendar and time selection interface.

---

## 1. Atoms & Sub-Components

### 1.1 Day Cell (Atom)
The interactive building block of the calendar grid.
- **Dimensions**: `44px` × `44px` square.
- **Border Radius**: `10px` (Note: not a perfect circle, slight squarish shape).
- **Typography**: `H8 fix / Medium` (16px, 500 weight, 22px line-height, -0.16px tracking).
- **Interactions & States**:
  - `Default`: Background `Transparent`/Surface, Text `--color-text-primary`.
  - `Hovered`: Background `--color-surface-hover` (or similar soft interaction layer).
  - `Selected` / `Range (Start)` / `Range (End)`: Background `--color-bg-accent-primary`, Text `--color-text-inverse` (White).
  - `Range (In-between)`: Background `--color-bg-accent-secondary` (soft brand background).
  - `Disabled`: Background `Transparent`, Text `--color-text-disabled`.
- **Dots Feature**: Supports a tiny indicator (usually for "events") positioned absolutely at the bottom center.

### 1.2 Month & Year Header
- Contains the current "Month Year" label (e.g., "Декабрь 2025") which acts as a dropdown trigger (indicated by a chevron down).
- Flanked by left (`<`) and right (`>`) arrow buttons for quick month navigation.

### 1.3 Weekdays Row
- Contains 7 text nodes representing days of the week (Пн, Вт, и т.д.).
- Text uses a smaller caption/body-2 typography, usually colored `--color-text-secondary`.
- Aligned to the 7-column grid layout of the calendar body.

### 1.4 Time Picker (Molecule)
- Represented as a segmented horizontal group of number inputs (Hours : Minutes : Seconds).
- **Format**: Supports 2 fields (HH:MM) or 3 fields (HH:MM:SS) configuration.
- Supports all standard form field visual states: `Default`, `Hover`, `Focus`, `Disabled`, `Error`, and `Focus Error`.

---

## 2. Layout & Assembly

### Calendar Grid (Date Picker)
- Based on a 7-column CSS Grid.
- The `Day` cells are arranged in rows of 7.
- Width of the entire calendar block is primarily determined by `7 * 44px + gaps`.
- Pop-up wrapper standard spacing: `16px` or `24px` internal padding depending on container standard.

### Example Combinations
1. **Date Picker Only**: Standard calendar view.
2. **Time Picker Only**: The segmented time input group.
3. **Date & Time Picker**: Calendar on the left (or top), Time Picker on the right (or bottom). Range selections typically display two side-by-side calendars.

---

## 3. Responsive Behavior (Mobile)

On small screens (`sm`, Mobile):
- The calendar stretches to fill the container (`100%` width).
- Day cells might shrink slightly or use flex layout to distribute space evenly (`justify-content: space-between`).
- Implemented frequently within a **Bottom Sheet** (see `specs/organisms/bottom-sheet.md`). The user opens the filter/input, and the Date Picker slides up from the bottom with a header and footer.

---

## 4. CSS Implementation Guidelines

```css
/* Calendar Wrapper */
.calendar {
  display: flex;
  flex-direction: column;
  gap: 16px; /* spacing between header, weekdays, and grid */
}

/* Header Navigation */
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between; /* arrows on edges, title in center */
}

/* 7-Column Grid for Weekdays and Days */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px; /* minimal gap between days */
}

/* Day Atom */
.calendar-day {
  width: 44px;
  height: 44px;
  border-radius: 10px; /* Crucial: Not 50% */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  background: transparent;
  color: var(--color-text-primary);
  /* Strip default button styling */
  border: none;
  padding: 0;
}

/* Day States */
.calendar-day:hover:not(:disabled) {
  background: var(--color-bg-hover);
}

.calendar-day.selected,
.calendar-day.range-start,
.calendar-day.range-end {
  background: var(--color-bg-accent-primary);
  color: var(--color-text-inverse);
}

.calendar-day.range-in-between {
  background: var(--color-bg-accent-secondary);
  border-radius: 0; /* Often square to connect the range visually */
}

.calendar-day:disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

/* Time Picker Inputs */
.timepicker-group {
  display: flex;
  align-items: center;
  gap: 8px; /* space between input blocks or colons */
}
```

---

## Rules for AI assistants
- ✅ **Border Radius**: Pay special attention to the `10px` border radius of the `Day` cell; it is not fully circular.
- ✅ **Range Selection Styling**: When implementing date ranges, ensure the "in-between" days stretch horizontally without gaps to form a continuous block, which typically requires toggling off the standard `10px` radius on connecting sides.
- ✅ **Typography**: Day cells use Medium (500) text weight, ensuring they remain highly legible.
- ❌ Do not use native `<input type="date">` styles. This organism requires a completely custom DOM implementation to map correctly to the Solar3 component logic and brand tokens.
