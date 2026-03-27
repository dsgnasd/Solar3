# Shadows & Elevation — Solar3 Design System

> Source: Figma → Solar3 / Foundations / Shadows  
> Last updated: <!-- DATE -->  
> Status: 🟡 In progress — fill values from Figma

---

## Shadow Scale

| Token | Figma value | Elevation level | Usage |
|-------|------------|----------------|-------|
| `--shadow-none` | `none` | 0 — Flat | No elevation |
| `--shadow-xs` | `<!-- TODO -->` | 1 — Near | Hover state on flat elements |
| `--shadow-sm` | `<!-- TODO -->` | 2 — Low | Cards, inputs |
| `--shadow-md` | `<!-- TODO -->` | 3 — Medium | Dropdowns, popovers |
| `--shadow-lg` | `<!-- TODO -->` | 4 — High | Modals, sidebars |
| `--shadow-xl` | `<!-- TODO -->` | 5 — Floating | Floating action buttons, toasts |

---

## Elevation Model

Each level should feel like the element is physically closer to the viewer.
In dark mode, elevation is often expressed with increased surface lightness rather than heavy shadows.

```
Level 0: page background       → no shadow
Level 1: cards, panels         → --shadow-sm
Level 2: dropdowns, tooltips   → --shadow-md
Level 3: modals, dialogs       → --shadow-lg
Level 4: toasts, notifications → --shadow-xl
```

---

## Dark Mode Consideration

In dark mode, reduce shadow opacity and increase surface lightness to convey elevation:

```css
[data-theme="dark"] {
  --shadow-sm: /* lighter, lower-opacity version */;
  --color-surface-raised: /* slightly lighter than surface-default */;
}
```

---

## Rules for AI assistants

- ✅ Use `--shadow-*` tokens for all `box-shadow` values
- ✅ Combine shadow tokens with surface tokens to convey elevation correctly
- ❌ Never hard-code `box-shadow` values
- ❌ Do not mix shadow levels (e.g. `--shadow-sm` on a modal)
