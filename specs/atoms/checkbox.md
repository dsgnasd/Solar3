# Checkbox Atom — Solar3 Design System

> Source: Figma → Components "Checkbox", "CheckboxLine", "CheckboxGroup"  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

The Checkbox component allows users to select one or multiple items from a list. It exists as a base visual atom (`Checkbox`) and is usually wrapped in a layout container with text (`CheckboxLine`) and grouped together (`CheckboxGroup`).

---

## 1. Checkbox (Base Atom)

The standalone visual checkbox box.

### Props / Variants
| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `checked` | `true`, `false` | `false` | Active state |
| `indeterminate` | `true`, `false` | `false` | Partially selected state ("minus" icon) |
| `type` | `Squared`, `Rounded` | `Squared` | Shape of the checkbox (Rounded acts like Radio, but allows multi-select conceptually in some lists) |
| `color` | `Accent`, `Black` | `Accent` | Color theme for filled state |
| `state` | `Default`, `Hovered`, `Focused`, `Disabled` | `Default` | Interactive state |
| `size` | `lg` | `lg` | Base size (20×20 px) |

### Dimensions & Structure
- **Size**: `20px` × `20px`
- **Border Radius**: 
  - `Squared`: `6px` (`--radius-sm`)
  - `Rounded`: `var(--radius-full)` (Circular)

### Color & States

#### Unchecked (Empty)
- **Background**: `--color-surface-raised` (`#ffffff`)
- **Border**: `1px solid --color-border-hover` (`#9a9a9a`) — *Note: Figma token names it border-hovered,-focused, but it represents the idle border for form controls.*

#### Checked / Indeterminate (Filled)
- **Background**: 
  - If `Accent`: `--color-bg-accent-primary` (`#bfa369`)
  - If `Black`: `--color-neutral-800` (`#1c1c1c`)
- **Border**: `none` 
- **Icon**: White (`--color-text-inverse`). Checked icon (`✓`) or Indeterminate icon (`-`).

#### Interactive States
- **Hovered**: Add background overlay or adjust border color to `--color-neutral-800`.
- **Disabled**:
  - Unchecked: Border `--color-border-disabled`, Background `--color-surface-sunken`
  - Checked: Background `--color-neutral-500`

---

## 2. Checkbox Line (Layout Wrapper)

A checkbox bound with a label and optional trailing elements.

### Layout Details
- **Container**: `display: flex; align-items: flex-start; gap: 10px` (`--ui/checkbox/line/gap-x`)
- **Main Box**: Shrinks `0`.
- **Text Area**: `flex: 1 0 0`; `display: flex; flex-direction: column; gap: 4px` (`--ui/checkbox/line/textbox-gap-y`)
  - **Title**: `Body 1 fix / Medium` (14px, Line-height 20px, Medium 500). Color: `--color-text-primary`.
  - **Subtitle** *(optional)*: `Caption 1 / Regular` (12px, Line-height 16px, Regular 400). Color: `--color-text-secondary`.
- **Trailing Add-ons** *(optional)*:
  - **Status Chip**: Appears after text, centered vertically.
  - **Info Icon**: `20×20px` container (16px icon), color: `--color-text-tertiary`.

#### Alignment
Because the Checkbox atom is `20px` high, and the Title text line-height is `20px`, `align-items: flex-start` naturally centers the checkbox perfectly with the first line of text.

```html
<label class="checkbox-line">
  <input type="checkbox" class="sr-only" />
  <span class="checkbox-box">
    <!-- SVG Check -->
  </span>
  <span class="checkbox-text">
    <span class="checkbox-title">Title</span>
    <span class="checkbox-subtitle">Subtitle</span>
  </span>
  <span class="checkbox-trailing">
    <svg class="info-icon">...</svg>
  </span>
</label>
```

---

## 3. Checkbox Group

Layout container for stacking multiple CheckboxLines.
- **Vertical Orientation**: `display: flex; flex-direction: column; gap: 0px` (or list padding depending on context).
- **Horizontal Orientation**: `display: flex; flex-direction: row; gap: 16px` (or auto wrap).

---

## CSS Implementation

```css
/* Base Line */
.checkbox-line {
  display: flex;
  align-items: flex-start;
  gap: 10px; /* var(--ui/checkbox/line/gap-x) */
  cursor: pointer;
  position: relative;
}

.checkbox-line.disabled {
  cursor: not-allowed;
}

/* Base Atom */
.checkbox-box {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: var(--color-surface-raised, #ffffff);
  border: 1px solid var(--color-border-hover, #9a9a9a);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--duration-fast) var(--easing-default);
}

.checkbox-line input:checked + .checkbox-box {
  background: var(--color-bg-accent-primary);
  border-color: transparent;
}

.checkbox-box svg {
  opacity: 0;
  color: var(--color-text-inverse);
  transition: opacity var(--duration-fast);
}

.checkbox-line input:checked + .checkbox-box svg {
  opacity: 1;
}

/* Forms text */
.checkbox-text {
  display: flex;
  flex-direction: column;
  gap: 4px; /* var(--ui/checkbox/line/textbox-gap-y) */
  flex-grow: 1;
}

.checkbox-title {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 20px;
  color: var(--color-text-primary);
}

.checkbox-subtitle {
  font-size: var(--font-size-12);
  line-height: var(--line-height-12);
  color: var(--color-text-secondary);
}
```

---

## Rules for AI assistants
- ✅ Always wrap `Checkbox` and labels inside a `CheckboxLine` container using `align-items: flex-start` to ensure the box aligns correctly with multi-line text.
- ✅ Rely on the `10px` gap between the box and the label.
- ✅ Base idle border for checkboxes uses `--color-border-hover` (`#9A9A9A`), not the standard weak border, for better accessibility contrast.
- ❌ Do not use native `<input type="checkbox">` rendering (e.g. `appearance: auto`); explicitly style a substitute span or div synced with a visually hidden actual input.
- ❌ The `Rounded` type is visually identical to a Radio button but operates logically as a multi-select Checkbox in certain card UI contexts in Solar3. Do not confuse its logic with `type="radio"` unless functionally required.
