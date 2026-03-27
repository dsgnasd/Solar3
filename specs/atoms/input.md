# Input Atom — Solar3 Design System

> Source: Figma → `tokens.json` → `breakpoints.*.uIInputOutline*`  
> Last updated: 2026-03-27  
> Status: ✅ Complete

---

## Overview

Outlined text input. Two sizes (sm / lg). Radius and height adapt on mobile (SM breakpoint).

---

## Sizing

| Property | Size `sm` | Size `lg` (LG/MD) | Size `lg` (SM mobile) |
|----------|-----------|-------------------|----------------------|
| Height | `40px` | `44px` (MD/LG) | `56px` |
| Padding X | `12px` (`--spacing-6`) | `16px` (`--spacing-8`) | `16px` (`--spacing-8`) |
| Icon/element gap X | `8px` (`--spacing-4`) | `8px` (`--spacing-4`) | `8px` |
| Border Radius | `--radius-md` (12px) | `--radius-md` (12px) | `--radius-lg` (16px) |

---

## States

| State | Border | Background | Text | Icon |
|-------|--------|-----------|------|------|
| Default | `1px solid --color-border-default` (`#cdcdcd`) | `--color-surface-raised` | `--color-text-primary` | `--color-icon-secondary` |
| Hover | `1px solid --color-border-hover` (`#9a9a9a`) | `--color-surface-raised` | `--color-text-primary` | `--color-icon-primary` |
| Focus | `1px solid --color-border-focus` (`#bfa369`) | `--color-surface-raised` | `--color-text-primary` | `--color-icon-primary` |
| Filled (has value) | `1px solid --color-border-focus-hover` (`#7a6741`) | `--color-surface-raised` | `--color-text-primary` | `--color-icon-primary` |
| Error | `1px solid --color-border-error` (`#e32f43`) | `--color-surface-raised` | `--color-text-primary` | `--color-icon-primary` |
| Error Hover | `1px solid --color-error-hover` | `--color-surface-raised` | `--color-text-primary` | — |
| Disabled | `1px solid --color-border-disabled` (`#9a9a9a`) | `--color-surface-sunken` | `--color-text-disabled` | `--color-icon-tertiary` |

---

## Placeholder text
- Color: `--color-text-tertiary` (`#9a9a9a`)

## Label & helper text
Source: `breakpoints.*.uITextboxGapY`, `uITextboxGapX`

| Element | Gap |
|---------|-----|
| Label → Input gap | `4px` (`--spacing-2`) — `uITextboxGapY` |
| Input → Helper/Error text gap | `4px` (`--spacing-2`) — `uITextboxGapY` |

Label style: `.text-caption` or `.text-body-sm`
Helper/Error text style: `.text-caption`
Error text color: `--color-text-error`

---

## Focus Ring
```css
input:focus-visible, input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 2px var(--color-brand-primary-subtle);
}
```

---

## Rules for AI assistants
- ✅ Always show a label above the input (even if visually hidden for a11y)
- ✅ Show helper/error text below input with `--spacing-2` gap
- ✅ Use `--color-border-focus` for focus, not a generic blue
- ❌ Never use `outline` for focus — use `border-color` + subtle `box-shadow`
- ❌ Do not reduce font size on mobile for inputs — keep `14px` minimum
