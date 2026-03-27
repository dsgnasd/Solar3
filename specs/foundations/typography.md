# Typography Foundation — Solar3 Design System

> Source: Figma → `tokens.json` → `primitives.general`, `breakpoints`  
> Last updated: 2026-03-27  
> Status: ✅ Complete

---

## Font Family

| Token | Value | Usage |
|-------|-------|-------|
| `--font-family-base` | `'Inter', -apple-system, sans-serif` | All UI text |
| `--font-family-display` | `'Inter', sans-serif` | Headlines (same family, heavier weight) |
| `--font-family-mono` | `'JetBrains Mono', monospace` | Code, numeric data |

**Loading Inter:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## Font Weights

| Token | Value | Name |
|-------|-------|------|
| `--font-weight-light` | `300` | Light |
| `--font-weight-regular` | `400` | Regular |
| `--font-weight-medium` | `500` | Medium |
| `--font-weight-semibold` | `600` | SemiBold |
| `--font-weight-bold` | `700` | Bold |

---

## Type Scale (Fixed / Breakpoint-independent)

These are the primitive sizes. Use the **semantic text styles** below in components.

| Token | Size | Line Height | Figma name |
|-------|------|-------------|-----------|
| `--font-size-10` | `10px` | `14px` (`--line-height-10`) | caption2 |
| `--font-size-12` | `12px` | `16px` (`--line-height-12`) | caption1, overline |
| `--font-size-13` | `13px` | `18px` (`--line-height-13`) | body2 |
| `--font-size-14` | `14px` | `20px` (`--line-height-14`) | body1 ← **base** |
| `--font-size-16` | `16px` | `22px` (`--line-height-16`) | h8 |
| `--font-size-18` | `18px` | `24px` (`--line-height-18`) | h7 |
| `--font-size-20` | `20px` | `28px` (`--line-height-20`) | h6 |
| `--font-size-24` | `24px` | `32px` (`--line-height-24`) | h5 (desktop) |
| `--font-size-28` | `28px` | `36px` (`--line-height-28`) | h4 (desktop) |
| `--font-size-32` | `32px` | `40px` (`--line-height-32`) | h3 (desktop) |
| `--font-size-36` | `36px` | `44px` (`--line-height-36`) | h1 (LG/MD), h2 (XL) |
| `--font-size-48` | `48px` | `56px` (`--line-height-48`) | h1 (XL only) |

---

## Responsive Type Scale by Breakpoint

Source: `breakpoints` object. Heading sizes adapt to viewport.

| Style | SM (375px) | MD (768px) | LG (1140px) | XL (1920px) |
|-------|-----------|-----------|------------|------------|
| H1 | 32/40 | 36/44 | 36/44 | 48/56 |
| H2 | 28/36 | 32/40 | 32/40 | 36/44 |
| H3 | 24/32 | 28/36 | 28/36 | 32/40 |
| H4 | 20/28 | 24/32 | 24/32 | 28/36 |
| H5 | 16/22 | 18/24 | 20/28 | 24/32 |
| H6 | 16/22 | 16/22 | 18/24 | 20/28 |
| H7 | 16/22 | 16/22 | 18/24 | 18/24 |
| H8 | 14/20 | 14/20 | 16/22 | 16/22 |
| Body1 | 13/18 | 13/18 | 14/20 | 14/20 |
| Body2 | 12/16 | 12/16 | 13/18 | 13/18 |
| Caption1 | 12/16 | 12/16 | 12/16 | 12/16 |
| Caption2 | 10/14 | 10/14 | 10/14 | 10/14 |
| Overline | 12/18 | 12/18 | 12/18 | 12/18 |

*(Values shown as size/line-height in px)*

---

## Semantic Text Styles

Use these CSS class names in components. They compose size + weight + line-height.

| Class | Size | Weight | Line height | Usage |
|-------|------|--------|-------------|-------|
| `.text-display` | `48px` | bold | `56px` | Hero headlines (XL only) |
| `.text-h1` | `36px`* | bold | `44px`* | Page titles |
| `.text-h2` | `32px`* | bold | `40px`* | Section titles |
| `.text-h3` | `28px`* | bold | `36px`* | Sub-sections |
| `.text-h4` | `24px`* | semibold | `32px`* | Card titles |
| `.text-h5` | `20px`* | semibold | `28px`* | Sub-card titles |
| `.text-h6` | `18px`* | semibold | `24px`* | Small headings |
| `.text-h7` | `18px` | semibold | `24px` | Fixed heading |
| `.text-h8` | `16px` | semibold | `22px` | Fixed heading |
| `.text-body-lg` | `16px` | regular | `22px` | Lead paragraphs |
| `.text-body` | `14px` | regular | `20px` | Body copy ← **default** |
| `.text-body-sm` | `13px` | regular | `18px` | Secondary text |
| `.text-caption` | `12px` | regular | `16px` | Labels, metadata |
| `.text-caption-xs` | `10px` | regular | `14px` | Micro labels |
| `.text-overline` | `12px` | medium | `18px` | Section labels (UPPERCASE) |
| `.text-code` | `13px` | regular | `18px` | Code inline |

*\* Responsive — see breakpoint table above*

---

## Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--letter-spacing-tight` | `-0.02em` | Large display text, H1 |
| `--letter-spacing-normal` | `0` | All body text |
| `--letter-spacing-wide` | `0.08em` | Overline (uppercase labels) |

---

## Rules for AI assistants

- ✅ Use `text-*` semantic classes in all components
- ✅ Scale headings responsively using breakpoint values from this table
- ❌ Never hard-code `font-size`, `font-weight`, or `line-height` raw values
- ❌ Never use system fonts — always load Inter
- ✅ Always pair size with its matching line-height from the primitives table
