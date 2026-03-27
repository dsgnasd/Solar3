# Chip Atom — Solar3 Design System

> Source: Figma → Component "Chip" (11398:25053, 10512:11126)  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

Chips (or Tags) are compact elements that represent an input, attribute, or action. They can contain an icon/avatar, a text label, and a dismiss action.

---

## 1. Properties & Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `size` | `lg`, `sm` | `lg` | Controls height and typography |
| `color` | `Default`, `Accent`, `Info`, `Warning`, `Success`, `Error` | `Accent` | Semantic color theme |
| `variant`| `Filled`, `Outline` | `Filled` | Visual style. Filled uses **Soft/Secondary** backgrounds. |
| `state` | `Default`, `Hovered`, `Focused`, `Disabled` | `Default` | Interaction state |
| `leading`| `boolean` | `true` | Shows leading icon / avatar |
| `trailing`| `boolean`| `true` | Shows trailing dismiss / action icon |

---

## 2. Dimensions & Layout

Chips are fully rounded pills (`border-radius: var(--radius-full)` or `100px`).

| Size | Height | Padding X | Gap (Text to Icon) | Icon Size | Typography (Figma) |
|------|--------|-----------|--------------------|-----------|--------------------|
| `sm` | `30px` | *~6px* | *~4px* | `16px` | *Body 2 / Medium (13 or 14px)* |
| `lg` | `36px` | `8px` (`--ui/chip/lg/px`) | `6px` (`--ui/chip/lg/text-gap-x`) | `20px` | `H8 / Medium` (16px, weight 500) |

> **Note**: The padding (`8px` on `lg`) applies to the outer edges. If a leading/trailing icon is present, the distance from the edge of the chip to the icon is exactly that padding. The gap between the inline items is `0px` on the flex container, instead handled by giving the text a lateral padding `px-[6px]`. Alternatively, implementing this with a true flex `gap: 6px` is standard CSS practice.

### HTML Structure

```html
<button class="chip chip-lg chip-accent chip-filled">
  <!-- Leading (Optional) -->
  <span class="chip-icon chip-icon-leading">
    <svg>...</svg>
  </span>
  
  <!-- Content -->
  <span class="chip-label">Chip Label</span>
  
  <!-- Trailing (Optional) -->
  <span class="chip-icon chip-icon-trailing">
    <svg class="icon-close">...</svg>
  </span>
</button>
```

*(If the chip is not interactive, render it as a `<div>` or `<span>` instead of `<button>`)*

---

## 3. Color Logic & Themes

Unlike Buttons which use stark solid backgrounds for `Filled`, **Chips use "Soft/Secondary" backgrounds** to maintain better readability, as they often appear in clusters.

- **Default (Neutral)**
  - Filled Background: `--color-background-disabled-transparent` (`rgba(28,28,28,0.05)`)
  - Outline Border: *Standard neutral border*
  - Text/Icon: `--color-text-primary`
- **Accent (Brand)**
  - Filled Background: `--color-bg-accent-secondary` (`#efe5d1` in Gold brand)
  - Text/Icon: `--color-text-accent-secondary` (`#7a6741` in Gold brand)
- **Semantic (Success, Warning, Error, Info)**
  - Filled Background: Uses the explicit `--color-bg-{type}-secondary` token.
  - Text/Icon: Uses `--color-text-{type}-secondary`.

### Interactive States
- **Hovered**: The background darkens slightly (`--color-bg-{type}-secondary-hover`).
- **Focused**: Same as hovered, often with an external focus ring.
- **Disabled**: Lower opacity or forced to neutral grey soft background; interactions are removed.

---

## 4. CSS Implementation

```css
.chip {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  cursor: default; /* pointer if interactive */
  white-space: nowrap;
  transition: all var(--duration-fast) var(--easing-default);
  box-sizing: border-box;
}

/* Base Sizes */
.chip-lg {
  height: 36px;
  padding: 0 8px;
  gap: 6px;
}

.chip-lg .chip-label {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium); /* 500 */
  font-size: var(--font-size-16);
  line-height: var(--line-height-16);
  letter-spacing: -0.16px;
}

.chip-lg .chip-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

/* Variant: Filled (Accent example) */
.chip-filled.chip-accent {
  background: var(--color-bg-accent-secondary);
  color: var(--color-text-accent-secondary);
}

/* Variant: Outline (Accent example) */
.chip-outline.chip-accent {
  background: transparent;
  border-color: var(--color-border-accent); /* or corresponding token */
  color: var(--color-text-accent-secondary);
}
```

---

## Rules for AI assistants

- ✅ **Soft Colors**: Always use the `-secondary` background color tokens for Filled chips, NEVER the primary solid button colors unless explicitly requested.
- ✅ **Typography**: Chip labels are `Medium` (500) weight, not Semibold like Buttons.
- ✅ **Layout**: If a chip has a close icon (`trailing=true`), ensure that element is clickable independently if the chip itself is also interactive.
- ❌ Do not use random hex codes for semantic chips; rely completely on the design system's semantic color aliases (`--color-bg-error-secondary`, etc.).
