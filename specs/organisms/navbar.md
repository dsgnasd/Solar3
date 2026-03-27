# NavBar Organism — Solar3 Design System

> Source: Figma → Solar3 / Organisms / Global Header  
> Last updated: <!-- DATE -->  
> Status: 🟡 In progress — align with Figma composition

---

## Overview

The Navigation Bar is a fixed organism at the top of the application. It consists of Atoms (Logo, Icons, Avatars) and Molecules (Search Bar, User Menu).

## Tokens & Layout

| Region | Spacing / Tokens |
|--------|------------------|
| Height | `64px` fixed |
| Padding X | `var(--spacing-6)` (Desktop) / `var(--spacing-4)` (Mobile) |
| Border Bottom | `1px solid var(--color-border-default)` |
| Background | `var(--color-surface-default)` (or slightly translucent `var(--color-surface-overlay)` if a frosted glass effect is required) |
| Shadow | `none` or `var(--shadow-sm)` on sticky scrolling |
| Z-Index | `var(--z-sticky)` |

## Composition

1. **Left side:** Brand Logo and main Navigation Links (Molecules).
2. **Center:** Global Search Input (Molecule).
3. **Right side:** Action Icons, Notifications Badge, Avatar Dropdown (Atoms/Molecules).

## Interaction Logic

* **Scroll State:** If the NavBar is sticky, it gains `var(--shadow-sm)` and reduced opacity background with backdrop-filter when the user scrolls past `0px`.
* **Mobile View:** Navigation links collapse into an Hamburger menu (Drawer Organism) below `--container-md` breakpoint.

---

## Rules for AI assistants
- ✅ Fix height to `64px`. Use flexbox to center items vertically.
- ✅ Rely on `space-between` logic to anchor Left/Center/Right content.
- ❌ Do not inject complex data fetching logic in the NavBar UI component itself; focus completely on visual token integration.
