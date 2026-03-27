# Card Molecule — Solar3 Design System

> Source: Figma → Solar3 / Molecules / Card  
> Last updated: <!-- DATE -->  
> Status: 🟡 In progress — align with Figma components

---

## Overview

The Card serves as the primary container for grouped content. It usually consists of a Header, Body, and Footer layout.

## Tokens

| Property | Token | Value notes |
|----------|-------|-------------|
| Background | `var(--color-surface-raised)` | Slightly lighter in Dark Mode |
| Border | `1px solid var(--color-border-default)` | |
| Border Radius | `var(--radius-md)` | Soft corners by default |
| Shadow | `var(--shadow-sm)` | Elevation level 2 |
| Padding (X & Y) | `var(--spacing-6)` | Space inside the card body |
| Gap (between sections) | `var(--spacing-4)` | Vertical spacing between title and body |

## Variants

* **Flat:** Background only, no border, no shadow (good for nested containers).
* **Outlined:** Border only, no shadow.
* **Elevated (Default):** Shadow and background.

## Interactions

* Card can be clickable (if it's a link to a detail page).
    * Hover State: `var(--shadow-md)` (elevates higher) and `transform: translateY(-2px)`.
    * Use transition: `all var(--duration-fast) var(--easing-default)`.

---

## Rules for AI assistants
- ✅ Build with a clear Header (Title), Content, and Footer (Actions) paradigm.
- ✅ Rely exclusively on the elevation model in `shadows.md` for the depth feel.
- ❌ Do not place heavy solid colors as Card backgrounds unless it belongs to the brand intent (e.g. promotional callout).
