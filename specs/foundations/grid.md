# Grid & Layout Foundation — Solar3 Design System

> Source: Figma → `tokens.json` → `breakpoints` (spacingLayout*, spacingContent*)  
> Last updated: 2026-03-27  
> Status: ✅ Complete

---

## Breakpoints

| Name | Min width | Max width | CSS variable |
|------|----------|-----------|-------------|
| SM (mobile) | `375px` | `767px` | `--bp-sm` |
| MD (tablet) | `768px` | `1139px` | `--bp-md` |
| LG (desktop) | `1140px` | `1919px` | `--bp-lg` |
| XL (wide) | `1920px` | `∞` | `--bp-xl` |

---

## Container Widths

Source: `breakpoints.*.spacingLayoutContentMaxWidth`

| Token | Value | Breakpoint | Usage |
|-------|-------|-----------|-------|
| `--container-sm` | `375px` | SM | Mobile full-width |
| `--container-md` | `684px` | MD | Tablet content area |
| `--container-lg` | `1056px` | LG | Desktop content area |
| `--container-xl` | `1836px` | XL | Wide desktop content area |

---

## Layout Gutter

Source: `breakpoints.*.spacingLayoutContentGutterX`

| Breakpoint | Gutter X | Token to use |
|-----------|---------|-------------|
| SM | `16px` | `--spacing-8` |
| MD | `20px` | `--spacing-10` |
| LG | `40px` | `--spacing-20` |
| XL | `40px` | `--spacing-20` |

---

## Sidebar

| State | Width | CSS Variable |
|-------|-------|-------------|
| Collapsed | `84px` | `--sidebar-collapsed-width` |
| Expanded | `252px` | `--sidebar-expanded-width` |
| Mobile SM | `0` (hidden — uses drawer) | — |

### Sidebar responsive behavior
- **SM:** Sidebar is hidden. Navigation uses a full-screen drawer pattern.
- **MD–XL:** Collapsed sidebar (84px) shown by default; can expand to 252px.

---

## Header

Source: `breakpoints.*.uIHeaderPx`, `uIHeaderPy`

| Breakpoint | Height | px | py |
|-----------|--------|----|----|
| SM | ~56px | `16px` | `16px` |
| MD | ~52px | `20px` | `12px` |
| LG / XL | ~56px | `24px` | `16px` |

CSS variable: `--header-height-lg: 56px`

---

## Standard Layout Patterns

### Centered content container
```css
.container {
  width: 100%;
  max-width: var(--container-lg);
  margin-inline: auto;
  padding-inline: var(--spacing-20); /* 40px gutter */
}

@media (max-width: 1139px) {
  .container { padding-inline: var(--spacing-10); } /* 20px */
}
@media (max-width: 767px) {
  .container { padding-inline: var(--spacing-8); }  /* 16px */
}
```

### Sidebar + content layout (LG+)
```css
.layout-app {
  display: grid;
  grid-template-columns: var(--sidebar-expanded-width) 1fr;
  min-height: 100vh;
}
/* Collapsed variant */
.layout-app.sidebar-collapsed {
  grid-template-columns: var(--sidebar-collapsed-width) 1fr;
}
/* Mobile */
@media (max-width: 767px) {
  .layout-app { grid-template-columns: 1fr; }
}
```

### Section spacing
```css
.section { 
  padding-block: var(--spacing-16); /* 32px — LG/MD base */
}
@media (max-width: 767px) {
  .section { padding-block: var(--spacing-8); } /* 16px — SM */
}
```

---

## Rules for AI assistants

- ✅ Use `--container-*` tokens for max-width constraints
- ✅ Mobile-first: start at SM, add breakpoints upward with `@media (min-width: ...)`
- ✅ Sidebar is hidden on SM — never render it inline
- ❌ Never hard-code pixel widths for layout containers
- ❌ Do not use the sidebar layout on SM breakpoint
