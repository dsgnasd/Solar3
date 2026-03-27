# Dialogs (Modal) — Solar3 Design System

> Source: Figma → Component "Dialoges" (12185:7127, 8651:6654)  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

Dialogs (Modals) interrupt current tasks to prompt a user for a decision or present critical information. They appear on top of a dark overlay (`--color-overlay-dark`) and block interaction with the rest of the application until dismissed. 

## 1. Structure & Sizes

Dialogs consist of three stacked modules inside a rounded container (`border-radius: 16px`, standard `--radius-lg` equivalent):
1. **Header Module**: Title and optional Close (`x`) button.
2. **Content Module**: The dynamic body (text, forms, inputs).
3. **Footer Module**: Action buttons container.

### Sizes

| Prop | Max Width | Header Typography | Button Alignment | Use Case |
|------|-----------|-------------------|------------------|----------|
| `mobile` | `343px` (typically `100% - 32px`) | `H6 Modal sm / Medium` (18px) | **Vertical/Stacked** full-width | Alerts on mobile, narrow devices |
| `sm` | `360px` | `H6 Modal sm / Medium` (18px) | **Horizontal right-aligned** | Desktop simple alerts / confirmations |
| `lg` | `360px` (or custom wider for complex) | `H5 / Medium` (24px) | **Horizontal right-aligned** | Desktop forms, complex selections |

> **Note on Width**: While Figma specs say `360px` for desktop sizes, dialogs often scale up to `420px` or `560px` in production for complex forms. The layout principles (padding, stacking) remain identical.

---

## 2. Anatomy & Padding

All Dialogs share strict vertical padding rhythms, heavily relying on `24px` horizontal bounds.

### Header Module
- **Top Padding**: `24px` (`--ui/dialogs/lg/header/py`)
- **Horizontal**: `24px` (`--ui/dialogs/lg/header/px`)
- **Bottom**: `16px` (or `12px` for `mobile`)
- **Layout**: `flex`, `justify-content: space-between`, `align-items: center`.
- **Title Text**: 
  - `lg`: H5 (24px, 500 weight, 32px line height, `-0.24px` tracking).
  - `sm`/`mobile`: H6 Modal sm (18px, 500 weight, 24px line height, `-0.18px` tracking).
- **Element**: 24×24px `linear` Close Icon button on the right.

### Content Module
- **Horizontal**: `24px` (`--spacing/content-area/px`)
- **Bottom**: `16px` (or `12px` for `mobile`)
- **Layout**: Flexible vertical column. Usually contains `Body 1 fix / Regular` (14px, 400 weight, 20px line height) text, colored `--color-text-secondary` (`#676767`), or custom Form modules.

### Footer Module
- **Top Padding**: `16px` (or `12px` for `mobile`)
- **Bottom Padding**: `24px` (`--ui/dialogs/lg/footer/py`)
- **Horizontal**: `24px`
- **Layout**:
  - `sm` / `lg` (Desktop): `flex-direction: row`, `justify-content: flex-end`, `gap: 8px`. Buttons are usually intrinsic width (`px-20`, `h-48`). Soft/Secondary button ("Cancel") comes *first*, Solid/Primary button ("Save") comes *second* (Right).
  - `mobile`: `flex-direction: column` or `column-reverse`, `gap: 8px`. Buttons stretch to `100%` width (`h-56`). Primary action often sits *above* the secondary action to be closer to thumb reach.

---

## 3. CSS Architecture

```html
<!-- Generic HTML Structure -->
<div class="dialog-overlay">
  <div class="dialog dialog-lg" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
    
    <header class="dialog-header">
      <h2 id="dialog-title" class="dialog-title">Заголовок</h2>
      <button class="dialog-close" aria-label="Close">
        <svg><!-- Close Icon 24x24 --></svg>
      </button>
    </header>
    
    <div class="dialog-content">
      <p>После выхода для повторного входа потребуется ввести логин.</p>
      <!-- Or complex layout -->
    </div>
    
    <footer class="dialog-footer">
      <button class="btn btn-secondary">Отмена</button>
      <button class="btn btn-primary">Выйти</button>
    </footer>
    
  </div>
</div>
```

```css
.dialog {
  background: var(--color-background-secondary, #ffffff);
  border-radius: var(--radius-xl, 16px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden; /* Ensures header/footer don't leak rounded bounds */
}

/* Modifiers */
.dialog-mobile {
  width: calc(100% - 32px);
  max-width: 343px;
}

.dialog-sm,
.dialog-lg {
  width: 360px; /* Base, adjusts based on content / props */
}

/* Padding System (Desktop Default) */
.dialog-header {
  padding: 24px 24px 16px 24px;
}
.dialog-content {
  padding: 0 24px 16px 24px;
  flex-grow: 1;
}
.dialog-footer {
  padding: 16px 24px 24px 24px;
}

/* Footer layout variations */
.dialog-footer {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* Desktop vs Mobile buttons logic via media queries or generic classes */
@media (max-width: 768px) /* or specific .dialog-mobile class */ {
  .dialog-footer {
    flex-direction: column; /* stacked */
  }
  .dialog-footer .btn {
    width: 100%;
  }
}
```

---

## Rules for AI assistants
- ✅ **Layout Detachment**: The `Content` area is fully detachable in Figma; it acts as a slot holding `inputs`, lists, or raw text. The `Header` and `Footer` define the structural bounds of the Dialog and should be standardized components.
- ✅ **Button Ordering**: On desktop horizontal layouts, Primary Affirmative Action is on the **Right** (e.g. `[Cancel] [Save]`). On mobile stacked layouts, Primary Affirmative Action is usually on **Top** to prevent accidental dismissal during scrolling.
- ❌ Do not apply background color to the inner `Content` area itself. The background color `--color-background-secondary` belongs to the main `Dialog` wrapper container to ensure uniform corners.
