# Spacing Foundation — Solar3 Design System

> Source: Figma → `tokens.json` → `primitives.general.spacingSpace*`  
> Last updated: 2026-03-27  
> Status: ✅ Complete

---

## Spacing Scale

Base unit: **2px** (not the assumed 4px — Figma starts at 2px increments).

| Token | Value | Common usage |
|-------|-------|-------------|
| `--spacing-0` | `0` | Reset |
| `--spacing-1` | `2px` | Micro nudges (text-gap) |
| `--spacing-2` | `4px` | Tight internal gaps (checkbox, radio gap) |
| `--spacing-3` | `6px` | Chip padding |
| `--spacing-4` | `8px` | Small inner padding (dropdown items) |
| `--spacing-5` | `10px` | Sidebar icon gap, list item gap |
| `--spacing-6` | `12px` | Sidebar item py, compact block gap |
| `--spacing-8` | `16px` | Button px (sm), input px (sm), card content gap |
| `--spacing-10` | `20px` | Button px (lg), block px, header px |
| `--spacing-12` | `24px` | Card px, modal padding, block title gap |
| `--spacing-14` | `28px` | Block py, section gap |
| `--spacing-16` | `32px` | Block px (LG+), section gap X |
| `--spacing-18` | `36px` | — |
| `--spacing-20` | `40px` | Content gutter (LG/XL) |
| `--spacing-22` | `44px` | — |
| `--spacing-24` | `48px` | Page bottom padding (LG) |
| `--spacing-26` | `52px` | Page bottom padding (XL), section gap Y (large) |

---

## Responsive Spacing (from breakpoints)

Key spacing values that adapt to viewport size:

| Property | SM | MD | LG | XL |
|----------|----|----|----|----|
| Layout gutter X | `16px` | `20px` | `40px` | `40px` |
| Block px | `20px` | `28px` | `32px` | `32px` |
| Block py | `20px` | `24px` | `28px` | `28px` |
| Card px (compact) | `20px` | `20px` | `24px` | `24px` |
| Card py (compact) | `16px` | `16px` | `20px` | `20px` |
| Page bottom pb | `24px` | `44px` | `48px` | `52px` |
| Section gap Y (base) | `16px` | `24px` | `32px` | `32px` |
| Section gap Y (large) | `24px` | `44px` | `48px` | `52px` |
| Header px | `16px` | `20px` | `24px` | `24px` |
| Header py | `16px` | `12px` | `16px` | `16px` |

---

## Usage by Component

| Context | Token |
|---------|-------|
| Checkbox/Radio gap to label | `--spacing-5` (`10px`) |
| Chip padding X (lg) | `--spacing-4` (`8px`) |
| Chip padding X (sm) | `--spacing-3` (`6px`) |
| Button padding X (sm) | `--spacing-8` (`16px`) |
| Button padding X (lg) | `--spacing-10` (`20px`) |
| Input padding X (sm) | `--spacing-6` (`12px`) |
| Input padding X (lg) | `--spacing-8` (`16px`) |
| Dropdown item py | `--spacing-4` (`8px`) |
| Sidebar menu item px | `--spacing-5` (`10px`) |
| Card/Block padding | `--spacing-12` (`24px`) |
| Modal header padding | `--spacing-12` (`24px`) |
| Content gap (between sections) | `--spacing-10` – `--spacing-14` |

---

## Rules for AI assistants

- ✅ Always use `--spacing-*` tokens for `margin`, `padding`, `gap`
- ✅ Use the responsive table to pick the right value for each breakpoint
- ❌ Never use arbitrary `px` values for spacing
- ❌ Don't assume 4px base — the Figma system uses 2px increments at the smallest step
