# Dropdown Molecule — Solar3 Design System

> Source: Figma → "Dropdown (Variables ✅)", "Dropdown Menu (Variables ✅)", "Dropdown List Item (Variables ✅)"
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

The Dropdown component is a form control that lets users select one or multiple values from a list. It is composed of three sub-components that are always used together:

| Sub-component | Role |
|---|---|
| **Dropdown Input** | The trigger field the user clicks to open the menu |
| **Dropdown Menu Item** | A single row inside the open menu (Header / ListItem / Footer) |
| **Dropdown Menu** | The floating panel that contains the list of items |

Dropdown is a **molecule** that builds on atoms: `Input`, `Checkbox`, `Chip`, `Avatar`, `Button`.

---

## 1. Dropdown Input

The field that shows the current value (or placeholder) and opens/closes the menu on click.

### Props / Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `size` | `lg`, `sm` | `lg` | Field height |
| `type` | `Empty`, `Placeholder`, `Text`, `Chips`, `Selected X` | `Empty` | Content inside the field |
| `state` | `Default`, `Hovered`, `Focused`, `Errored`, `Disabled` | `Default` | Interactive state |
| `label` | bool | `true` | Show label above the field |
| `helperMessage` | bool | `true` | Show helper text below the field |
| `hasLeadingIcon` | bool | `true` | Show optional leading icon (20×20 px) |
| `hasTrailingIcon` | bool | `true` | Show trailing chevron icon (arrow-down, 20×20 px) |

### Type descriptions

| Type | Visual |
|------|--------|
| `Placeholder` | Grey placeholder text, `--color-text-tertiary` |
| `Text` | Selected value, `--color-text-primary` |
| `Empty` | Empty field, no text content |
| `Chips` | One or more `Chip` atoms inside the field (multi-select) |
| `Selected X` | One selected value + close (×) button to clear the selection |

### Sizing

| Property | Size `lg` | Size `sm` |
|----------|-----------|-----------|
| Height | `48px` | `40px` |
| Padding X | `16px` (`--ui/dropdown/lg/px`) | `12px` |
| Gap X (icon ↔ content) | `8px` (`--ui/dropdown/lg/gap-x`) | `8px` |
| Border Radius | `12px` (`--ui/input-outline/lg/rounded`) | `12px` |

> On mobile (`SM` breakpoint) height steps up to `56px` and radius to `16px` — identical to `Input` atom behaviour.

### States

| State | Border | Background |
|-------|--------|------------|
| Default | `1px solid var(--border/border-default, #cdcdcd)` | `var(--background/secondary, white)` |
| Hovered | `1px solid var(--border/border-hovered, #9a9a9a)` | `var(--background/secondary, white)` |
| Focused | `1px solid var(--border/border-focus, #bfa369)` | `var(--background/secondary, white)` |
| Errored | `1px solid var(--border/border-error, #e32f43)` | `var(--background/secondary, white)` |
| Disabled | `1px solid var(--border/border-disabled, #9a9a9a)` | `var(--background/disabled)` |

### Typography

| Element | Style | Token |
|---------|-------|-------|
| Label (above field) | Body 1 fix / Regular — 14px, 400 | `--color-text-secondary` |
| Placeholder text | H8 fix / Medium — 16px, 500 | `--color-text-tertiary` |
| Selected value (Text) | H8 fix / Medium — 16px, 500 | `--color-text-primary` |
| Helper / error message | Caption 1 / Regular — 12px, 400 | `--color-text-secondary` |

### Layout & gaps

```
Label
  ↕ 6px gap (--ui/textbox/gap-y ≈ spacing-3)
[Input field]
  ↕ 4px gap (--ui/textbox/gap-y ≈ spacing-2)
Helper message
```

### CSS Implementation

```css
/* Wrapper */
.dropdown-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px; /* label-to-field + field-to-helper spacing block */
}

/* Label row */
.dropdown-label-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dropdown-label {
  font-size: 14px;         /* --typography/body1fixsize */
  font-weight: 400;
  line-height: 20px;       /* --typography/body1fixline */
  letter-spacing: -0.14px;
  color: var(--color-text-secondary);
}

/* Field */
.dropdown-field {
  display: flex;
  align-items: center;
  gap: 8px;                /* --ui/dropdown/lg/gap-x */
  height: 48px;            /* lg; sm = 40px */
  padding: 0 16px;         /* --ui/dropdown/lg/px */
  border-radius: 12px;     /* --ui/input-outline/lg/rounded */
  border: 1px solid var(--border/border-default, #cdcdcd);
  background: var(--background/secondary, white);
  overflow: hidden;
  cursor: pointer;
  transition:
    border-color var(--duration-fast) var(--easing-default);
}

.dropdown-field:hover  { border-color: var(--border/border-hovered, #9a9a9a); }
.dropdown-field:focus,
.dropdown-field[aria-expanded="true"] { border-color: var(--border/border-focus, #bfa369); }
.dropdown-field--error { border-color: var(--border/border-error, #e32f43); }
.dropdown-field--disabled {
  border-color: var(--border/border-disabled, #9a9a9a);
  background: var(--background/disabled);
  cursor: not-allowed;
}

/* Placeholder */
.dropdown-placeholder {
  font-size: 16px;         /* --typography/h8fixsize */
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-tertiary, #9a9a9a);
  flex: 1 0 0;
  white-space: nowrap;
}

/* Selected value */
.dropdown-value {
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-primary, #1c1c1c);
  flex: 1 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Helper */
.dropdown-helper {
  font-size: 12px;         /* --typography/caption1size */
  line-height: 16px;       /* --typography/caption1line */
  color: var(--color-text-secondary);
}

/* Responsive (SM breakpoint ≤ 375px) */
@media (max-width: 375px) {
  .dropdown-field {
    height: 56px;
    border-radius: 16px;
  }
}
```

---

## 2. Dropdown Menu Item

A single row inside the dropdown list. Renders in one of three modes: **Header**, **ListItem**, or **Footer**.

### Props / Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `type` | `Header`, `ListItem`, `Footer` | `ListItem` | Row mode |
| `size` | `lg`, `sm` | `lg` | Row height |
| `state` | `Default`, `Hovered`, `Selected`, `Disabled` | `Default` | Interactive state (ListItem only) |
| `hasLeadingIcon` | bool | `true` | Leading icon 20×20 px |
| `checkbox` | bool | `true` | Checkbox 20×20 px (mutually exclusive with icon) |
| `chip` | bool | `false` | Chip tag (mutually exclusive with checkbox) |
| `avatar` | bool | `false` | Avatar sm / 40px (mutually exclusive with others) |
| `hasTrailingIcon` | bool | `false` | Trailing tick icon 24×24 px (shown when selected) |
| `resetBtn` | bool | `true` | Reset button label in Header |

> **Leading element priority**: only one of `hasLeadingIcon`, `checkbox`, `chip`, `avatar` should be shown at a time.

### Sizing

| Type | Size `lg` | Size `sm` |
|------|-----------|-----------|
| Header | `44px` | `44px` |
| ListItem | `56px` | `46px` |
| Footer | `80px` | `72px` |
| Selected (sm only) | — | `40px` |

### States (ListItem)

| State | Background | Text |
|-------|------------|------|
| Default | `var(--background/secondary, white)` | `--color-text-primary` |
| Hovered | `var(--background/primary, #f2f2f2)` | `--color-text-primary` |
| Selected | `var(--background/secondary, white)` + tick icon | `--color-text-primary` |
| Disabled | `var(--background/secondary, white)` | `--color-text-disabled` |

### Anatomy — Header

```
[ Selected: 0    ·    ·    ·    Reset label ]
 ↑ flex-grow                     ↑ shrink-0
```

- `pt: 16px`, `pb: 8px`, `px: 16px` (`--ui/dropdown-menu/header/*`)
- `gap-x: 10px` (`--ui/dropdown-menu/header/gap-x`)
- Top corners only rounded: `border-radius: 8px 8px 0 0`
- Typography: `Body 1 fix / Medium` — 14px, 500, `--color-text-secondary`

### Anatomy — ListItem

```
[ icon/checkbox/chip/avatar  |  Textbox (value + count)  |  trailing-icon? ]
        shrink-0                      flex: 1 0 0                shrink-0
```

- `px: 16px` (`--ui/dropdown-menu/listitem/px`)
- `py: 8px` (`--ui/dropdown-menu/listitem/py`)
- `gap-x: 10px` (`--ui/dropdown-menu/listitem/gap-x`)

**Textbox (value + count):**
- Wraps with `flex-wrap: wrap`, `gap: 4px`
- Value: `H8 / Medium` — 16px, 500, `--color-text-primary`
- Count/badge: `H8 / Medium` — 16px, 400, `--color-text-secondary`

### Anatomy — Footer

```
[ Primary button (flex: 1)  |  Secondary/Text button (flex: 1) ]
```

- `px: 16px`, `py: 16px` (`--ui/dropdown-menu/footer/*`)
- `gap-x: 8px` (`--ui/dropdown-menu/footer/gap-x`)
- `border-top: 1px solid var(--border/divider, #e6e6e6)`
- Bottom corners only rounded: `border-radius: 0 0 16px 16px`
- Both buttons: `Button lg` (48px height, `--ui/button/lg/*`)
  - Primary: `bg: var(--background/accent-primary, #bfa369)`, text: `--color-text-on-accent-primary` (white)
  - Secondary: text-only, text: `var(--text/accent-secondary, #7a6741)`

### CSS Implementation

```css
/* Base row */
.dropdown-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;               /* --ui/dropdown-menu/listitem/gap-x */
  padding: 8px 16px;       /* --ui/dropdown-menu/listitem/py --ui/dropdown-menu/listitem/px */
  background: var(--background/secondary, white);
  width: 100%;
  cursor: pointer;
  transition: background var(--duration-fast) var(--easing-default);
}

.dropdown-menu-item:hover:not([aria-disabled="true"]) {
  background: var(--background/primary, #f2f2f2);
}

.dropdown-menu-item[aria-selected="true"] {
  /* Background stays white; trailing tick icon appears */
}

.dropdown-menu-item[aria-disabled="true"] {
  cursor: not-allowed;
  color: var(--color-text-disabled);
}

/* Header row */
.dropdown-menu-item--header {
  align-items: flex-start;
  padding: 16px 16px 8px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;         /* --typography/body1fixsize */
  font-weight: 500;
  line-height: 20px;
  color: var(--color-text-secondary);
  cursor: default;
}

/* Footer row */
.dropdown-menu-item--footer {
  padding: 16px;
  border-top: 1px solid var(--border/divider, #e6e6e6);
  border-radius: 0 0 16px 16px;
  display: flex;
  gap: 8px;
}

/* Textbox */
.dropdown-textbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  min-width: 0;
}

.dropdown-textbox-value {
  font-size: 16px;         /* --typography/h8size */
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-primary);
  white-space: nowrap;
}

.dropdown-textbox-count {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-secondary);
  white-space: nowrap;
}
```

---

## 3. Dropdown Menu

The floating panel containing the full list. Appears below (or above) the Dropdown Input.

### Props / Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `size` | `lg`, `sm` | `lg` | Menu width |
| `header` | bool | `true` | Show Header row at top |
| `search` | bool | `true` | Show Search input inside menu |
| `footer` | bool | `true` | Show Footer with action buttons |
| `scroll` | bool | `true` | Show custom scrollbar when list overflows |

### Dimensions

| Property | Size `lg` | Size `sm` |
|----------|-----------|-----------|
| Width | `330px` | `240px` |
| Border radius | `12px` | `12px` |
| Border | `1px solid var(--border/divider, #e6e6e6)` | same |
| Shadow | `0 4px 8px 0 rgba(0,0,0,0.08)` (Shadow/Dropdown) | same |
| Background | `var(--background/secondary, white)` | same |

### Internal structure (top → bottom)

```
┌─────────────────────────────────────┐
│  Search input (optional)             │  pt:16px px:16px pb:0
├─────────────────────────────────────┤
│  Header row (optional)               │  pt:16px pb:8px px:16px
├─────────────────────────────────────┤
│  Listitem Group                      │  py:8px px:0 gap-y:8px
│    ├ ListItem                        │
│    ├ ListItem                        │
│    ├ ListItem                        │
│    └ ...                             │
├─────────────────────────────────────┤  (only when scroll=true)
│  Custom scrollbar (6px, right side)  │
├─────────────────────────────────────┤
│  Footer (optional)                   │  py:16px px:16px
└─────────────────────────────────────┘
```

### Search field

Reuses `Input` atom (size `lg`, 48px, `border-radius: 12px`) with a `search` leading icon.

- Container: `pt: 16px`, `px: 16px`, `pb: 0px` (`--ui/dropdown-menu/search/*`)

### Listitem group

- `padding: 8px 0px` (`--ui/dropdown-menu/listitem-group/py`, `px`)
- `gap: 8px` between items (`--ui/dropdown-menu/listitem-group/gap-y`)

### Custom scrollbar

- Track background: `var(--background/primary, #f2f2f2)`, `border-radius: 8px`
- Thumb: `var(--background/disabled, #b2b2b2)`, `height: 80px`, `border-radius: 9999px`, `width: 6px`
- Container: `width: 10px`, `padding: 8px 4px`

### CSS Implementation

```css
/* Menu container */
.dropdown-menu {
  display: flex;
  flex-direction: column;
  width: 330px;            /* lg; sm = 240px */
  background: var(--background/secondary, white);
  border: 1px solid var(--border/divider, #e6e6e6);
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08); /* Shadow/Dropdown */
  overflow: hidden;
}

/* Search section */
.dropdown-menu__search {
  padding: 16px 16px 0;    /* --ui/dropdown-menu/search/* */
}

/* List group */
.dropdown-menu__list {
  display: flex;
  flex-direction: column;
  padding: 8px 0;          /* --ui/dropdown-menu/listitem-group/py, px */
  gap: 8px;                /* --ui/dropdown-menu/listitem-group/gap-y */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--background/disabled, #b2b2b2) var(--background/primary, #f2f2f2);
}

/* Custom scrollbar (webkit) */
.dropdown-menu__list::-webkit-scrollbar {
  width: 6px;
}
.dropdown-menu__list::-webkit-scrollbar-track {
  background: var(--background/primary, #f2f2f2);
  border-radius: 8px;
}
.dropdown-menu__list::-webkit-scrollbar-thumb {
  background: var(--background/disabled, #b2b2b2);
  border-radius: 9999px;
}

/* Footer section */
.dropdown-menu__footer {
  padding: 16px;
  border-top: 1px solid var(--border/divider, #e6e6e6);
  border-radius: 0 0 16px 16px;
  display: flex;
  gap: 8px;
}
```

---

## Composition example

```html
<!-- Full Dropdown (closed) -->
<div class="dropdown">
  <div class="dropdown-input-wrapper">
    <div class="dropdown-label-row">
      <span class="dropdown-label">Label</span>
      <button
        class="dropdown-field"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="dropdown-menu-1"
      >
        <svg class="dropdown-leading-icon" aria-hidden="true"><!-- folder-open --></svg>
        <span class="dropdown-placeholder">Placeholder text</span>
        <svg class="dropdown-trailing-icon" aria-hidden="true"><!-- arrow-down --></svg>
      </button>
    </div>
    <span class="dropdown-helper">Help message</span>
  </div>

  <!-- Menu (shown when aria-expanded="true") -->
  <div class="dropdown-menu" id="dropdown-menu-1" role="listbox" hidden>

    <!-- Search -->
    <div class="dropdown-menu__search">
      <div class="dropdown-field">
        <svg aria-hidden="true"><!-- search icon --></svg>
        <span class="dropdown-placeholder">Placeholder text</span>
      </div>
    </div>

    <!-- Header -->
    <div class="dropdown-menu-item dropdown-menu-item--header" role="presentation">
      <span>Selected: 0</span>
      <button class="dropdown-reset">Label</button>
    </div>

    <!-- List -->
    <ul class="dropdown-menu__list">
      <li class="dropdown-menu-item" role="option" aria-selected="false">
        <span class="checkbox-box"></span>
        <div class="dropdown-textbox">
          <span class="dropdown-textbox-value">Text</span>
          <span class="dropdown-textbox-count">0</span>
        </div>
      </li>
      <!-- repeat for each option -->
    </ul>

    <!-- Footer -->
    <div class="dropdown-menu-item dropdown-menu-item--footer">
      <button class="btn btn--primary btn--lg">Label</button>
      <button class="btn btn--text btn--lg">Label</button>
    </div>

  </div>
</div>
```

---

## Rules for AI assistants

- ✅ Use `aria-haspopup="listbox"` + `aria-expanded` on the trigger button
- ✅ Use `role="listbox"` on the menu and `role="option"` + `aria-selected` on each item
- ✅ Trailing chevron rotates 180° when the menu is open — use CSS `transform: rotate(180deg)` on `[aria-expanded="true"]`
- ✅ Always show `Dropdown Input` with a visible label (even if hidden for a11y via `.sr-only`)
- ✅ `Chips` type height is flexible — the field grows to wrap multiple chips
- ✅ Footer buttons use full `Button lg` atom — never reduce height below `48px`
- ✅ Custom scrollbar styles must always be paired: `scrollbar-width` (Firefox) + `::-webkit-scrollbar-*` (Chromium/Safari)
- ❌ Never use `<select>` element — this is a fully custom component
- ❌ Never hardcode width, color, or spacing — always reference design tokens
- ❌ Do not show both `checkbox` and `leadingIcon` on the same ListItem — pick one
- ❌ Do not apply `border-radius` to all corners of the Footer — only bottom corners (`0 0 16px 16px`)
