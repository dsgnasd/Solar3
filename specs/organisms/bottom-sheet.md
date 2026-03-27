# Bottom Sheet Organism — Solar3 Design System

> Source: Figma → Component "Bottom sheet" (node-id "11791:903")  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

Bottom Sheet is a modal panel that anchors to the bottom of the screen. It is used to present additional context or actions without taking the user completely away from the current context. It consists of three main areas: **Header**, **Content**, and **Footer**.

---

## Structure & Anatomy

```html
<BottomSheet>
  <Header>
    <DragHandle />
    <HeaderTitleActions />
  </Header>
  
  <ContentArea>
    <!-- Scrollable content goes here -->
  </ContentArea>
  
  <Footer>
    <ActionArea />
    <HomeIndicator /> <!-- iOS specific UI -->
  </Footer>
</BottomSheet>
```

### Container Substrate
- **Background**: `--color-surface-raised` (`#ffffff`)
- **Top Corners**: `20px` radius (`--radius-xl`) — top-left and top-right only. Bottom corners are square (0).
- **Shadow / Elevation**: Custom SmallCard shadow: `0px 4px 20px 0px rgba(0,0,0,0.03)` (Note: Figma effect `Shadow/SmallCard` specifies `0 4px 20px rgba(0,0,0,0.08)` but actual CSS token output is `0.03` alpha; use system shadow tokens if available, or explicit shadow).

---

## 1. Header Area

The header contains the drag handle and the main title/actions.

### Drag Handle ("Tab")
Provides a visual affordance that the sheet can be swiped down.
- **Size**: `44px` width × `4px` height
- **Border Radius**: `4px` (`--radius-xs`)
- **Color**: `--color-text-tertiary` (`#9a9a9a`)
- **Positioning**: Centered horizontally (`left: 50%, translate: -50%`), spaced `8px` (`--spacing-4`) from the exact top of the sheet container.
- **Container wrapper**: There is a `12px` tall wrapper block at the very top of the header used for drag handle spacing.

### Title and Actions
Directly below the drag handle block.
- **Container Padding**: `20px` all sides (`--spacing-10`)
- **Layout**: Flexbox, `align-items: center`, `justify-content: space-between`
- **Leading (Title)**:
  - Typography: `H4 / Semibold`
  - Font size: `20px` (`--font-size-20`)
  - Line height: `28px` (`--line-height-20`)
  - Weight: Semibold (`--font-weight-semibold`)
  - Color: `--color-text-primary` (`#1c1c1c`)
- **Trailing (Actions)**:
  - Contains optional text buttons or icon buttons.
  - Spacing between trailing items: `12px` (`--spacing-6`)
  - Text typography: `Body 1 fix / Medium` (14px/20px, medium, `--color-text-secondary`)
  - Icon size: `24px` box, usually carrying a `12px` or `20px` internal icon.

---

## 2. Content Area

The scrollable zone for the main payload.
- **Background**: Continues `--color-surface-raised` (`#ffffff`)
- **Padding X**: `20px` (left/right, `--spacing-10`)
- **Padding Bottom**: `16px` (`--spacing-8`)
- **Scroll**: Content should `overflow-y: auto`. Make sure the padding is respected inside the scroll container.

---

## 3. Footer Area

Anchored to the bottom of the screen.

### Action Area (Buttons)
- **Padding Y**: `24px` top and bottom (`--spacing-12`)
- **Padding X**: `20px` left and right (`--spacing-10`)
- **Content**: Usually contains primary/secondary `Button` components. If a single button is used, it often takes `width: 100%`.
- Example Button sizing: `lg` variant (56px height, 16px radius, H8 bold typography).

### iOS Home Indicator (System Area)
If rendering inside a native wrapper that doesn't provide its own indicator, or for web apps meant to look native:
- **Container Box**: `34px` height
- **Indicator Pill**: `134px` width × `5px` height
- **Border Radius**: `100px` (pill)
- **Positioning**: Centered horizontally, `9px` from the bottom edge of the container.
- **Color**: `--color-text-primary` (`#1c1c1c` in light mode)

---

## Implementation Details (CSS / Structure)

```css
/* Bottom Sheet Container */
.bottom-sheet {
  position: absolute; /* or fixed, depending on modal context */
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--color-surface-raised);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.08); /* upwards shadow for bottom sheet */
  display: flex;
  flex-direction: column;
  max-height: 90vh; /* leave safety room at top */
}

/* Header */
.bottom-sheet-header {
  position: relative;
  flex-shrink: 0;
}

.bottom-sheet-drag-handle-zone {
  height: 12px;
  position: relative;
  width: 100%;
}

.bottom-sheet-drag-handle {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 4px;
  border-radius: var(--radius-xs);
  background: var(--color-text-tertiary);
}

.bottom-sheet-title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-10); /* 20px */
}

/* Content */
.bottom-sheet-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 var(--spacing-10) var(--spacing-8) var(--spacing-10);
  /* 0 top, 20px sides, 16px bottom */
}

/* Footer */
.bottom-sheet-footer {
  flex-shrink: 0;
}

.bottom-sheet-actions {
  padding: var(--spacing-12) var(--spacing-10); /* 24px Y, 20px X */
}

.bottom-sheet-system-home {
  height: 34px;
  position: relative;
}

.bottom-sheet-system-home-pill {
  position: absolute;
  bottom: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  border-radius: 100px;
  background: var(--color-text-primary);
}
```

---

## Rules for AI assistants

- ✅ Always apply `--radius-xl` (20px) **only to the top corners**.
- ✅ Keep the Drag Handle semantic structure clean. It must use `--color-text-tertiary`.
- ✅ Content inside the body must be scrollable if it exceeds screen height; Header and Footer should remain pinned.
- ✅ The iOS Home Indicator is part of the layout specification for mobile-web targets; ensure it sits in a 34px reserved block.
- ❌ Do not add side margins to the Bottom Sheet container (it should snap to phone width edges).
- ❌ Do not hardcode typography logic inside the sheet header — use standard tokens (`H4` etc).
