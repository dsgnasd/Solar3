# Border Radius Foundation — Solar3 Design System

> Source: Figma → `tokens.json` → `primitives.general.radiusRadius*`  
> Last updated: 2026-03-27  
> Status: ✅ Complete

---

## Radius Scale

| Token | Value | Figma name | Usage |
|-------|-------|-----------|-------|
| `--radius-none` | `0` | radiusNone | Sharp corners (tables, dividers) |
| `--radius-2xs` | `2px` | radius2xs | Very tight elements |
| `--radius-xs` | `4px` | radiusXs | Badges, tight chips |
| `--radius-sm` | `8px` | radiusSm | Avatar square (xs), small containers |
| `--radius-md` | `12px` | radiusMd | **Default** — buttons, inputs, cards, dropdowns |
| `--radius-lg` | `16px` | radiusLg | Mobile buttons (SM bp), large cards, currency icons |
| `--radius-xl` | `20px` | radiusXl | Large feature containers |
| `--radius-2xl` | `24px` | radius2xl | Extra-large containers |
| `--radius-full` | `9999px` | radiusFull | Pills, avatars (circle), chips, toggles |

---

## Component-to-Token Mapping

Source: `breakpoints` (uIButton*Rounded, uIInput*Rounded, etc.)

| Component | Token | Value |
|-----------|-------|-------|
| Button (sm) | `--radius-md` | `12px` |
| Button (lg) | `--radius-md` | `12px` |
| Button (lg, mobile SM) | `--radius-lg` | `16px` |
| Input Outline (sm) | `--radius-md` | `12px` |
| Input Outline (lg) | `--radius-md` | `12px` |
| Input Outline (lg, mobile SM) | `--radius-lg` | `16px` |
| Dropdown (sm) | `--radius-md` | `12px` |
| Dropdown (lg) | `--radius-md` | `12px` |
| Dropdown (lg, mobile SM) | `--radius-lg` | `16px` |
| Card (default) | `--radius-md` | `12px` |
| Modal / Dialog | `--radius-md` | `12px` |
| Avatar (lg square) | `--radius-md` | `12px` |
| Avatar (sm square) | `--radius-md` | `12px` |
| Avatar (xs square) | `--radius-sm` | `8px` |
| Avatar (any circle) | `--radius-full` | `9999px` |
| Chip (lg) | `--radius-full` | `9999px` |
| Chip (sm) | `--radius-full` | `9999px` |
| Stepper point | `--radius-full` | `9999px` |
| Currency icon (LG/MD) | `--radius-md` | `12px` |
| Currency icon (SM) | `--radius-md` | `12px` |
| Action button | `--radius-md` | `12px` |
| Sidebar menu item | `--radius-md` | `12px` (inferred) |

> **Key insight:** `--radius-md` (`12px`) is the universal default for interactive elements across all breakpoints. Only mobile (SM) buttons and inputs step up to `--radius-lg` (`16px`).

---

## Rules for AI assistants

- ✅ Default to `--radius-md` (`12px`) for all interactive elements
- ✅ Use `--radius-full` for all pill shapes, circle avatars, and chip components
- ✅ On mobile (SM breakpoint), step up buttons/inputs to `--radius-lg` (`16px`)
- ❌ Never hard-code `px` or `%` radius in components
