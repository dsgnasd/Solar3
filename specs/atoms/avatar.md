# Avatar Atom — Solar3 Design System

> Source: Figma → Component "Avatar" (extracted via MCP)  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

Avatar displays a user's profile image, initials, or a generic icon. It supports 4 sizes, 2 shapes, 3 content types, and an optional badge indicator.

![Avatar Variants from Figma](Figma screenshot showing a 4×6 matrix of Avatar variants: rows = xl, lg, sm, xs; columns = Text Circle, Text Square, Image Circle, Image Square, Icon Circle, Icon Square. Each variant has a red badge dot.)

---

## Props / Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `size` | `xl`, `lg`, `sm`, `xs` | `xl` | Controls width, height, and typography |
| `shape` | `Circle`, `Square` | `Circle` | Border radius mode |
| `type` | `Text`, `Image`, `Icon` | `Text` | Content displayed inside |
| `badge` | `true`, `false` | `true` | Red status indicator dot |

---

## Sizing (responsive via Figma variables)

Source: `breakpoints.*.uIAvatar*`

### Size dimensions per breakpoint

| Size | SM (375px) | MD (768px) | LG (1140px) | XL (1920px) |
|------|-----------|-----------|------------|------------|
| `xl` | 40×40 | 44×44 | 44×44 | 48×48 |
| `lg` | 40×40 | 44×44 | 44×44 | 48×48 |
| `sm` | 40×40 | 40×40 | 40×40 | 40×40 |
| `xs` | 24×24 | 24×24 | 24×24 | 24×24 |

> Note from Figma: There's also an additional `xl` size at 56×56 visible in the code (used for certain contexts).

### CSS Variables used in Figma

```
--ui/avatar/xs/h:  24px    --ui/avatar/xs/w:  24px
--ui/avatar/sm/h:  40px    --ui/avatar/sm/w:  40px
--ui/avatar/lg/h:  48px    --ui/avatar/lg/w:  48px
```

### Mapped to our tokens

| Size | Width/Height | Token |
|------|-------------|-------|
| `xs` | `24px` | `--spacing-12` |
| `sm` | `40px` | `--spacing-20` |
| `lg` | `48px` | `--spacing-24` |
| `xl` | `56px` | — (custom, no exact spacing token) |

---

## Border Radius

| Size | Circle | Square |
|------|--------|--------|
| `xs` | `--radius-full` (`9999px`) | `--radius-sm` (`8px`) |
| `sm` | `--radius-full` (`9999px`) | `--radius-md` (`12px`) |
| `lg` | `--radius-full` (`9999px`) | `--radius-md` (`12px`) |
| `xl` | `100px` (effectively full) | `--radius-lg` (`16px`) |

---

## Background

| Type | Background |
|------|-----------|
| `Text` | `--color-surface-raised` (`#ffffff` — `background/secondary`) |
| `Icon` | `--color-surface-raised` (`#ffffff`) |
| `Image` | none (image fills the container) |

---

## Typography (Text type — Initials)

| Size | Font size | Line height | Weight | Letter spacing | Figma style |
|------|-----------|-------------|--------|---------------|-------------|
| `xs` | `--font-size-10` (10px) | `--line-height-10` (14px) | `--font-weight-medium` (500) | `0` | Caption2/Medium |
| `sm` | `--font-size-14` (14px) | `--line-height-14` (20px) | `--font-weight-medium` (500) | `-0.14px` | Body1/Medium |
| `lg` | `--font-size-16` (16px) | `--line-height-16` (22px) | `--font-weight-medium` (500) | `-0.16px` | H8/Medium |
| `xl` | `--font-size-16` (16px) | `--line-height-16` (22px) | `--font-weight-medium` (500) | `-0.16px` | H8/Medium |

- Text Color: `--color-text-primary` (`#1c1c1c`)
- Text Alignment: `center` (absolute centered in container)
- Display: 2-letter initials, e.g. "DN"

---

## Icon (Icon type)

| Size | Icon dimensions | Source |
|------|----------------|--------|
| `xs` | `12×12` | `--icon-size-xs` |
| `sm` | `20×20` | `--icon-size-md` |
| `lg` | `20×20` | `--icon-size-md` |
| `xl` | `24×24` | `--icon-size-lg` |

- Icon is absolutely centered in the container (`left: 50%, top: 50%, transform: translate(-50%, -50%)`)
- Default icon: Profile/Person silhouette (SVG)
- Icon color: inherits from parent (dark on white background)

---

## Image (Image type)

- Image fills the container with `overflow: hidden`
- Clip shape = border-radius of the container
- Image is typically `150%` height of container, offset to center the face
- Always provide an `alt` attribute for accessibility

---

## Badge (Status indicator)

A small red dot in the bottom-right corner. Size and position vary:

| Avatar Size | Badge Size | Badge Border Radius | Position (Circle) | Position (Square: Image/Icon) | Position (Square: Text) |
|-------------|-----------|---------------------|-------------------|-------------------------------|------------------------|
| `xs` | `6×6 px` | `3px` | `bottom: 0, right: 0` | `bottom: -1px, right: 0` | `bottom: 0, right: 0` |
| `sm` | `8×8 px` | `4px` | `bottom: 2px, right: 2px` | `bottom: -1px, right: 0` | `bottom: 0, right: 0` |
| `lg` | `10×10 px` | `5px` | `bottom: 2px, right: 2px` | `bottom: -2px, right: -2px` | `bottom: 0, right: 0` |
| `xl` | `12×12 px` | `6px` | `bottom: 2px, right: 2px` | `bottom: -2px, right: -2px` | `bottom: 0, right: 0` |

- Badge Background: `--color-badge-background` (`#f3404c`)
- Badge has no border/outline on base state
- Badge is always `position: absolute`

---

## CSS Implementation

```css
/* ── Base ──────────────────────────────────────────────────────── */
.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

/* ── Sizes ─────────────────────────────────────────────────────── */
.avatar-xs { width: 24px; height: 24px; }
.avatar-sm { width: 40px; height: 40px; }
.avatar-lg { width: 48px; height: 48px; }
.avatar-xl { width: 56px; height: 56px; }

/* ── Shapes ────────────────────────────────────────────────────── */
.avatar-circle.avatar-xs { border-radius: var(--radius-full); }
.avatar-circle.avatar-sm { border-radius: var(--radius-full); }
.avatar-circle.avatar-lg { border-radius: var(--radius-full); }
.avatar-circle.avatar-xl { border-radius: 100px; }

.avatar-square.avatar-xs { border-radius: var(--radius-sm); }   /* 8px */
.avatar-square.avatar-sm { border-radius: var(--radius-md); }   /* 12px */
.avatar-square.avatar-lg { border-radius: var(--radius-md); }   /* 12px */
.avatar-square.avatar-xl { border-radius: var(--radius-lg); }   /* 16px */

/* ── Content types ─────────────────────────────────────────────── */
.avatar-text,
.avatar-icon {
  background: var(--color-surface-raised);
}

.avatar-image {
  background: none;
}

/* ── Initials text ─────────────────────────────────────────────── */
.avatar-initials {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  text-align: center;
  white-space: nowrap;
  line-height: 0; /* centering trick */
}

.avatar-xs .avatar-initials { font-size: var(--font-size-10); }
.avatar-sm .avatar-initials { font-size: var(--font-size-14); letter-spacing: -0.14px; }
.avatar-lg .avatar-initials,
.avatar-xl .avatar-initials { font-size: var(--font-size-16); letter-spacing: -0.16px; }

/* ── Badge ─────────────────────────────────────────────────────── */
.avatar-badge {
  position: absolute;
  background: var(--color-badge-background);
}

.avatar-xs .avatar-badge { width: 6px; height: 6px; border-radius: 3px; }
.avatar-sm .avatar-badge { width: 8px; height: 8px; border-radius: 4px; }
.avatar-lg .avatar-badge { width: 10px; height: 10px; border-radius: 5px; }
.avatar-xl .avatar-badge { width: 12px; height: 12px; border-radius: 6px; }

/* Badge position (circle) */
.avatar-circle .avatar-badge { bottom: 2px; right: 2px; }
.avatar-circle.avatar-xs .avatar-badge { bottom: 0; right: 0; }

/* Badge position (square) */
.avatar-square .avatar-badge { bottom: -2px; right: -2px; }
.avatar-square.avatar-xs .avatar-badge { bottom: -1px; right: 0; }
.avatar-square.avatar-sm .avatar-badge { bottom: -1px; right: 0; }

/* ── Responsive ────────────────────────────────────────────────── */
@media (min-width: 1920px) { /* XL */
  .avatar-lg { width: 48px; height: 48px; }
  .avatar-xl { width: 56px; height: 56px; }
}
@media (min-width: 768px) and (max-width: 1919px) { /* MD/LG */
  .avatar-lg { width: 44px; height: 44px; }
}
@media (max-width: 767px) { /* SM */
  .avatar-lg { width: 40px; height: 40px; }
  .avatar-xl { width: 40px; height: 40px; }
}
```

---

## HTML Structure (vanilla)

```html
<!-- Text / Circle / Badge -->
<div class="avatar avatar-lg avatar-circle avatar-text">
  <span class="avatar-initials">DN</span>
  <span class="avatar-badge"></span>
</div>

<!-- Image / Square / No badge -->
<div class="avatar avatar-sm avatar-square avatar-image">
  <img src="user-photo.jpg" alt="User name" class="avatar-img" />
</div>

<!-- Icon / Circle / Badge -->
<div class="avatar avatar-xs avatar-circle avatar-icon">
  <svg class="avatar-icon-svg"><!-- profile icon --></svg>
  <span class="avatar-badge"></span>
</div>
```

---

## Rules for AI assistants

- ✅ Always set both width AND height (never rely on just one)
- ✅ Use `--color-surface-raised` for Text/Icon backgrounds — never hardcode white
- ✅ Badge is always absolutely positioned — container must be `position: relative`
- ✅ Image covers the container. Use `object-fit: cover` or overflow clipping
- ✅ Support all 4 sizes × 2 shapes × 3 types = **24 variants**
- ❌ Never hardcode `#f3404c` for badge — use `--color-badge-background`
- ❌ Do not add custom sizes outside xs/sm/lg/xl
- ❌ Do not skip `alt` text on image avatars
