# Badge Atom — Solar3 Design System

> Source: Figma → Component "Badge" (extracted via MCP)  
> Last updated: 2026-03-27  
> Status: ✅ Complete — verified from Figma

---

## Overview

Badge is a compact indicator used for counts, notifications, and status dots. It comes in **7 sizes** (from dot-only `2xs` to full counter `2xl`) and **6 colors**. Small sizes (2xs–md) are dot-only; larger sizes (lg–2xl) show a text counter.

---

## Props / Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `size` | `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl` | `2xl` | Controls dimensions and content mode |
| `color` | `Error`, `Primary`, `Accent Primary`, `Accent Secondary`, `Secondary`, `Tertiary` | `Error` | Background + text color scheme |

---

## Size System

Two modes: **dot** (no text) and **counter** (shows number).

### Dot sizes (no text content)

| Size | Width × Height | Border Radius |
|------|---------------|---------------|
| `2xs` | `6 × 6 px` | `3px` |
| `xs` | `8 × 8 px` | `4px` |
| `sm` | `10 × 10 px` | `5px` |
| `md` | `12 × 12 px` | `6px` |

### Counter sizes (shows text)

| Size | Height | Padding X | Min Width (padding area) | Border Radius | Font Size | Line Height | Weight |
|------|--------|-----------|--------------------------|---------------|-----------|-------------|--------|
| `lg` | `16px` | `4px` | `8px` | `8px` | `10px` (Caption2) | `14px` | SemiBold (600) |
| `xl` | `20px` | `5px` | `10px` | `10px` | `12px` (Caption1) | `16px` | SemiBold (600) |
| `2xl` | `24px` | `6px` | `12px` | `12px` | `14px` (Body1) | `20px` | SemiBold (600) |

> Counter sizes have vertical padding spacers (top + bottom):  
> `lg` → 1.333px each, `xl` → 1.667px each, `2xl` → 2px each

---

## Color Variants

### Dot sizes (2xs–md) — background only, no text

| Color | Background Token | Figma Var | Hex (КИБ default) |
|-------|-----------------|-----------|-------------------|
| **Error** | `--color-badge-background` | `background/badge` | `#F3404C` |
| **Primary** | `--color-surface-dark` | `background/dark` | `#1C1C1C` |
| **Accent Primary** | `--color-brand-primary` | `background/accent-primary` | `#BFA369` ⚠️ brand-dependent |
| **Accent Secondary** | `--color-brand-primary-subtle` | `background/accent-secondary` | `#EFE5D1` ⚠️ brand-dependent |
| **Secondary** | `--color-surface-disabled` | `background/disabled` | `#B2B2B2` |
| **Tertiary** | `--color-surface-sunken` | `background/tertiary` | `#E6E6E6` |

### Counter sizes (lg–2xl) — background + text

| Color | Background | Text Token | Text Hex (КИБ) |
|-------|-----------|-----------|-----------------|
| **Error** | `--color-badge-background` | `--color-text-on-brand` | `#FFFFFF` |
| **Primary** | `--color-surface-dark` | `--color-text-on-brand` | `#FFFFFF` |
| **Accent Primary** | `--color-brand-primary` | `--color-text-accent` | `#4D4127` ⚠️ brand |
| **Accent Secondary** | `--color-brand-primary-subtle` | `--color-text-accent-secondary` | `#7A6741` ⚠️ brand |
| **Secondary** | `--color-surface-disabled` | `--color-text-primary` | `#1C1C1C` |
| **Tertiary** | `--color-surface-sunken` | `--color-text-secondary` | `#676767` |

> ⚠️ "Accent Primary" and "Accent Secondary" colors are **brand-dependent** — they change with `data-brand`.

---

## Typography per Counter Size

| Size | Figma Style | Font | Size | Line Height | Weight | Letter Spacing |
|------|------------|------|------|-------------|--------|---------------|
| `lg` | Caption2/Semibold | `--font-family-base` | `--font-size-10` (10px) | `--line-height-10` (14px) | `--font-weight-semibold` (600) | `0` |
| `xl` | Caption1/Semibold | `--font-family-base` | `--font-size-12` (12px) | `--line-height-12` (16px) | `--font-weight-semibold` (600) | `0` |
| `2xl` | Body1/Semibold | `--font-family-base` | `--font-size-14` (14px) | `--line-height-14` (20px) | `--font-weight-semibold` (600) | `-0.14px` |

---

## Layout Structure

### Dot (2xs–md)
Simple colored circle/square — no inner content.

```html
<span class="badge badge-sm badge-error"></span>
```

### Counter (lg–2xl)
Pill-shaped container with centered text:

```
┌─ padding-spacer (height: ~2px) ─┐
│          "3"                     │  ← centered text
└─ padding-spacer (height: ~2px) ─┘
```

```html
<span class="badge badge-2xl badge-error">3</span>
```

---

## CSS Implementation

```css
/* ── Base ──────────────────────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
}

/* ── Dot sizes (no text) ───────────────────────────────────────── */
.badge-2xs { width: 6px;  height: 6px;  border-radius: 3px; }
.badge-xs  { width: 8px;  height: 8px;  border-radius: 4px; }
.badge-sm  { width: 10px; height: 10px; border-radius: 5px; }
.badge-md  { width: 12px; height: 12px; border-radius: 6px; }

/* ── Counter sizes (with text) ─────────────────────────────────── */
.badge-lg {
  height: 16px;
  min-width: 16px;
  padding: 0 4px;
  border-radius: 8px;
  font-size: var(--font-size-10);
  line-height: var(--line-height-10);
}

.badge-xl {
  height: 20px;
  min-width: 20px;
  padding: 0 5px;
  border-radius: 10px;
  font-size: var(--font-size-12);
  line-height: var(--line-height-12);
}

.badge-2xl {
  height: 24px;
  min-width: 24px;
  padding: 0 6px;
  border-radius: 12px;
  font-size: var(--font-size-14);
  line-height: var(--line-height-14);
  letter-spacing: -0.14px;
}

/* ── Color: Error (default) ────────────────────────────────────── */
.badge-error {
  background: var(--color-badge-background);   /* #F3404C */
  color: var(--color-text-on-brand);           /* #FFFFFF */
}

/* ── Color: Primary ────────────────────────────────────────────── */
.badge-primary {
  background: var(--color-surface-dark);       /* #1C1C1C */
  color: var(--color-text-on-brand);           /* #FFFFFF */
}

/* ── Color: Accent Primary (brand-dependent) ───────────────────── */
.badge-accent-primary {
  background: var(--color-brand-primary);      /* #BFA369 → brand */
  color: var(--color-text-accent);             /* #4D4127 → brand */
}

/* ── Color: Accent Secondary (brand-dependent) ─────────────────── */
.badge-accent-secondary {
  background: var(--color-brand-primary-subtle);/* #EFE5D1 → brand */
  color: var(--color-text-accent-secondary);   /* #7A6741 → brand */
}

/* ── Color: Secondary ──────────────────────────────────────────── */
.badge-secondary {
  background: var(--color-surface-disabled);   /* #B2B2B2 */
  color: var(--color-text-primary);            /* #1C1C1C */
}

/* ── Color: Tertiary ───────────────────────────────────────────── */
.badge-tertiary {
  background: var(--color-surface-sunken);     /* #E6E6E6 */
  color: var(--color-text-secondary);          /* #676767 */
}
```

---

## HTML Examples

```html
<!-- Notification dot (used on avatars, nav items) -->
<span class="badge badge-2xs badge-error"></span>

<!-- Small status indicator -->
<span class="badge badge-sm badge-accent-primary"></span>

<!-- Counter badge (e.g. unread messages) -->
<span class="badge badge-2xl badge-error">3</span>

<!-- Large counter with brand accent -->
<span class="badge badge-xl badge-accent-primary">12</span>

<!-- Muted counter -->
<span class="badge badge-lg badge-tertiary">5</span>
```

---

## Usage with Avatar

Badge is used as a sub-component of Avatar for status/notification indicators. See [avatar.md](./avatar.md) for positioning rules per size/shape.

Typical pairing:
| Avatar Size | Badge Size | Purpose |
|-------------|-----------|---------|
| `xs` | `2xs` (6px) | Minimal presence dot |
| `sm` | `xs` (8px) | Status indicator |
| `lg` | `sm` (10px) | Status indicator |
| `xl` | `md` (12px) | Status indicator |

For counter badges on other elements (tab bars, nav items), use `lg`–`2xl` sizes.

---

## Full Variant Matrix

**7 sizes × 6 colors = 42 variants total**

| | Error | Primary | Accent Primary | Accent Secondary | Secondary | Tertiary |
|---|---|---|---|---|---|---|
| **2xs** | 🔴 | ⚫ | 🟡 | 🟤 | ⚪ | ⬜ |
| **xs** | 🔴 | ⚫ | 🟡 | 🟤 | ⚪ | ⬜ |
| **sm** | 🔴 | ⚫ | 🟡 | 🟤 | ⚪ | ⬜ |
| **md** | 🔴 | ⚫ | 🟡 | 🟤 | ⚪ | ⬜ |
| **lg** | `3` | `3` | `3` | `3` | `3` | `3` |
| **xl** | `3` | `3` | `3` | `3` | `3` | `3` |
| **2xl** | `3` | `3` | `3` | `3` | `3` | `3` |

---

## Rules for AI assistants

- ✅ Dot sizes (2xs–md) have **no text** — they are pure colored circles
- ✅ Counter sizes (lg–2xl) display a number — always use `font-weight-semibold`
- ✅ `border-radius` is always `height / 2` — badges are always pill-shaped
- ✅ "Accent Primary" and "Accent Secondary" are **brand-aware** — they auto-switch via CSS vars
- ✅ Use `min-width = height` to ensure the badge is at least circular when showing "1"
- ❌ Never hardcode `#f3404c` — use `--color-badge-background`
- ❌ Never use `opacity` to create tertiary/secondary — use explicit token colors
- ❌ Do not create custom sizes outside the 7-step scale
