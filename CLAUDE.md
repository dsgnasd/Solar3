# Solar3 Design System — LLM Instructions

## Purpose
This file is the entry point for any AI assistant (Claude, Cursor, Copilot, etc.) working in this project.
**Before writing any UI code, always read the relevant spec files listed below.**

## What is this design system?
Solar3 is the design system for the Antigravity product. It defines all visual tokens, components, and patterns used across the product.
The source of truth is Figma. This directory contains machine-readable specs extracted from Figma to ensure consistency across AI-generated and human-written code.

---

## How to use this system

### 1. Always import tokens
All color, typography, spacing, radius, shadow, and z-index values come from `tokens.css`.
Never hard-code raw values. Instead, use the CSS custom properties defined there.

```css
/* ✅ Correct */
color: var(--color-brand-primary);
padding: var(--spacing-4);

/* ❌ Wrong */
color: #4F6EF7;
padding: 16px;
```

### 2. Check foundations first
Before building any component, read the foundation specs in `specs/foundations/`.
They define the core visual logic (grid, color semantics, type scale, motion).

### 3. Find the right component spec
Components are organized by atomic design level:
- `specs/atoms/` — Buttons, inputs, badges, icons, avatars
- `specs/molecules/` — Cards, form groups, tooltips, dropdowns
- `specs/organisms/` — Navigation, sidebars, modals, data tables
- `specs/patterns/` — Full page layouts, onboarding flows, empty states

### 4. Run the audit after changes
After any token-related changes, run:
```bash
node scripts/token-audit.js
```
This will flag any hard-coded values that should be tokens.

---

## File map

| Path | Contents |
|------|----------|
| `tokens.css` | All CSS custom properties (single source of truth) |
| `specs/foundations/color.md` | Color palette, semantic roles, dark mode |
| `specs/foundations/typography.md` | Type scale, font families, line heights |
| `specs/foundations/spacing.md` | Spacing scale (4px base grid) |
| `specs/foundations/radius.md` | Border radius scale |
| `specs/foundations/shadows.md` | Elevation / shadow scale |
| `specs/foundations/motion.md` | Duration, easing, animation principles |
| `specs/foundations/grid.md` | Layout grid, breakpoints, container widths |
| `specs/tokens/` | Token definitions by category (mirrors tokens.css) |
| `specs/atoms/` | Atom-level component specs |
| `specs/molecules/` | Molecule-level component specs |
| `specs/organisms/` | Organism-level component specs |
| `specs/patterns/` | Full pattern & page-level specs |

---

## Rules for AI assistants

1. **Never invent values** — use only tokens from `tokens.css`
2. **Never skip reading the spec** — even for small components
3. **Always match the Figma design** — if in doubt, ask for a Figma link
4. **Prefer composition** — build from atoms → molecules → organisms
5. **Document deviations** — if you must deviate from the spec, add a `<!-- DS_DEVIATION: reason -->` comment

---

## Updating the design system

When the Figma design changes:
1. Update the relevant spec file in `specs/`
2. Update `tokens.css` if token values changed
3. Run `node scripts/token-audit.js` to catch broken references
4. Commit with the message: `ds: update [component/token name]`
