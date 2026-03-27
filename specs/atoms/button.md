# Button Atom — Solar3 Design System

> Source: Figma → Components "Button" (10340:14235) & "Action Button" (11411:19447)  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

The Design System provides two main button components:
1. **Button**: Standard text button, optionally with leading/trailing icons.
2. **Action Button**: Icon-only button that can be Square or Circle.

Both share the same sizing logic, colors, and interactive states.

---

## 1. Standard Button (`Button`)

A button with a text label and optional icons.

### Props / Variants
| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `size` | `lg`, `sm` | `lg` | Controls height, padding, and typography |
| `type` | `Primary`, `Secondary`, `Error` | `Primary` | Semantic color theme |
| `variants`| `Filled`, `Outlined`, `Text` | `Filled` | Visual style (background vs transparent) |
| `state` | `Default`, `Hover`, `Focused`, `Disabled` | `Default` | Interaction state |
| `hasLeadingIcon` | `boolean` | `false` | Shows an icon before the label |
| `hasTrailingIcon` | `boolean` | `false` | Shows an icon after the label |

### Sizing & Typography

| Size | Height | Padding X | Gap X | Border Radius | Font Size (Figma Style) |
|------|--------|-----------|-------|---------------|-------------------------|
| `sm` | `40px` | `16px` | `8px` | `10px` | `14px` (Body 1 / Semibold) |
| `lg` | `48px` | `20px` | `12px` | `12px` | `16px` (H8 fix / Semibold) |

> **Note on mobile**: On the `sm` (mobile) breakpoint, `lg` buttons typically stretch to `width: 100%` inside footers/bottom sheets.

---

## 2. Icon Button (`Action Button`)

An icon-only button used for toolbars, close buttons, and isolated actions.

### Props / Variants
| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `size` | `lg`, `sm` | `lg` | Controls dimensions |
| `shape`| `Square`, `Circle` | `Square` | Border radius mode |
| `type` | `Primary`, `Secondary`, `Tertiary`, `Error`, `White` | `Primary` | Color theme |
| `variant`| `Filled`, `Unfilled` | `Filled` | Has background or is transparent |

### Sizing
| Size | Width × Height | Icon Size | Border Radius (Square) | Border Radius (Circle) |
|------|----------------|-----------|------------------------|------------------------|
| `sm` | `40 × 40 px` | `20px` (`md`) | `10px` | `9999px` (Full) |
| `lg` | `48 × 48 px` | `24px` (`lg`) | `12px` | `9999px` (Full) |

---

## Color Themes & States (Shared)

Buttons map directly to semantic design tokens. The exact hex values change automatically when the `data-brand` attribute changes on `<html>` (e.g., КИБ, PWA, Страхование).

### 1. Primary (`Filled`)
- **Default**: Background: `--color-bg-accent-primary` / Text: `--color-text-on-brand`
- **Hover**: Background: `--color-bg-accent-primary-hover`
- **Focused**: Background: `--color-bg-accent-primary-pressed`
- **Disabled**: Background: `--color-surface-sunken` (`#E6E6E6`) / Text: `--color-text-disabled` (`#B2B2B2`)

### 2. Secondary (`Outlined`)
- **Default**: Background: `transparent` / Border: `1px solid --color-border-default` / Text: `--color-text-primary`
- **Hover**: Background: `--color-surface-sunken` (`#e6e6e6`)
- **Focused**: Border: `--color-border-strong`
- **Disabled**: Border: `--color-border-disabled` / Text: `--color-text-disabled`

### 3. Text / Unfilled (`Ghost`)
- **Default**: Background: `transparent` / Text: `--color-brand-primary` (or `--color-text-primary` for neutral)
- **Hover**: Background: `--color-surface-sunken`
- **Focused**: Background: `--color-surface-sunken`
- **Disabled**: Text: `--color-text-disabled`

### 4. Error (`Filled`)
- **Default**: Background: `--color-bg-error` / Text: `--color-text-error`
- **Hover**: Background: `--color-bg-error-hover`
- **Focused**: Background: `--color-bg-error-pressed`

---

## Layout Structure

Standard Button HTML structure:
```html
<button class="btn btn-lg btn-primary btn-filled">
  <!-- Optional Leading Icon -->
  <span class="btn-icon">
    <svg>...</svg>
  </span>
  
  <!-- Label -->
  <span class="btn-label">Label</span>
  
  <!-- Optional Trailing Icon -->
  <span class="btn-icon">
    <svg>...</svg>
  </span>
</button>
```

Action Button HTML structure:
```html
<button class="action-btn action-btn-lg action-btn-square action-btn-secondary action-btn-unfilled">
  <span class="action-btn-icon">
    <svg>...</svg>
  </span>
</button>
```

---

## CSS Implementation Details

```css
/* Base Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-semibold); /* 600 */
  box-sizing: border-box;
  transition: all var(--duration-fast) var(--easing-default);
}

.btn:disabled {
  cursor: not-allowed;
}

/* Base Action Button (Icon) */
.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background var(--duration-fast) var(--easing-default);
}

/* Sizes: Button */
.btn-sm {
  height: 40px;
  padding: 0 16px;
  gap: 8px;
  border-radius: 10px;
  font-size: var(--font-size-14);
  line-height: var(--line-height-14);
}

.btn-lg {
  height: 48px;
  padding: 0 20px;
  gap: 12px;
  border-radius: 12px;
  font-size: var(--font-size-16);
  line-height: var(--line-height-16);
  letter-spacing: -0.16px;
}

/* Sizes: Action Button */
.action-btn-sm {
  width: 40px;
  height: 40px;
}

.action-btn-lg {
  width: 48px;
  height: 48px;
}

/* Shapes: Action Button ONLY */
.action-btn-square.action-btn-sm { border-radius: 10px; }
.action-btn-square.action-btn-lg { border-radius: 12px; }
.action-btn-circle { border-radius: var(--radius-full); }

/* Internal Icon sizing */
.btn-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## Rules for AI assistants

- ✅ Standard buttons (`Button`) control their width by content (`padding-x`), while Icon buttons (`Action Button`) have fixed `width: height`.
- ✅ Font weight is **always** Semibold (600) for button labels.
- ✅ Rely on semantic tokens for states (e.g. `--color-bg-accent-primary-hover`) rather than using CSS `opacity`.
- ✅ For the `Disabled` state, background usually becomes `--color-surface-sunken` (#E6E6E6) and text becomes `--color-text-disabled` (#B2B2B2) for filled buttons.
- ❌ Do not apply `border-radius: var(--radius-full)` to text buttons — only `Action Button (Circle)` gets fully rounded corners. Standard buttons use `10px` or `12px`.
