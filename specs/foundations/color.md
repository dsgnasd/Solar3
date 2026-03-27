# Color Foundation — Solar3 Design System

> Source: Figma → `tokens.json` + `Color Alias/*.tokens.json`  
> Last updated: 2026-03-27  
> Status: ✅ Complete — 3 brands verified

---

## Multi-Brand Architecture

The design system supports **3 brands**. Switching is done via `data-brand` on `<html>`:

```html
<html data-brand="kib-premium">    <!-- Default (Gold) -->
<html data-brand="pwa-win">        <!-- Violet -->
<html data-brand="strakhovanie">   <!-- Lime -->
```

### What changes per brand

| Layer | КИБ Premium | PWA, WIN | Страхование |
|-------|------------|----------|-------------|
| **Primary** | Gold `#BFA369` | Violet `#6177F3` | Lime `#7ABA54` |
| **Secondary** | Gold (= Primary) | Violet (= Primary) | Lime (= Primary) |
| **Success** | Teal `#307359` | Teal `#307359` ✅ same | Pure Green `#347C47` |
| **Warning** | Orange `#C98B29` | Orange `#C98B29` ✅ same | Yellow `#D0C225` |
| **Info** | Blue `#126791` | Blue `#126791` ✅ same | Teal/Cyan `#53B8C3` |
| **Error** | Red `#F3404C` | Red `#F3404C` | Red `#F3404C` ✅ same |
| **Neutral** | Grey | Grey | Grey ✅ same |

> **Key insight:** PWA-WIN shares semantic colors (Success/Warning/Info/Error) with КИБ. Страхование has its own Success, Warning, and Info palettes.

---

## Brand Palettes (Primary 50–1000)

### КИБ Premium — Gold (КИБ)

| Step | Hex | Source |
|------|-----|--------|
| 50 | `#FFF9F0` | Gold (КИБ)/50 |
| 100 | `#FCF4E7` | Gold (КИБ)/100 |
| 200 | `#EFE5D1` | Gold (КИБ)/200 |
| 300 | `#EADDC2` | Gold (КИБ)/300 |
| 400 | `#D9C8A5` | Gold (КИБ)/400 |
| **500** | **`#BFA369`** | Gold (КИБ)/500 — **main** |
| 600 | `#AA9262` | Gold (КИБ)/600 — hover |
| 700 | `#968154` | Gold (КИБ)/700 — pressed |
| 800 | `#7A6741` | Gold (КИБ)/800 |
| 900 | `#685835` | Gold (КИБ)/900 |
| 1000 | `#4D4127` | Gold (КИБ)/1000 — accent text |

### PWA, WIN — Violet (PWA, WIN)

| Step | Hex | Source |
|------|-----|--------|
| 50 | `#F5F6FF` | Violet (PWA, WIN)/50 |
| 100 | `#E9ECFF` | Violet (PWA, WIN)/100 |
| 200 | `#D1E0FF` | Violet (PWA, WIN)/200 |
| 300 | `#B4CAFD` | Violet (PWA, WIN)/300 |
| 400 | `#7F9BFA` | Violet (PWA, WIN)/400 |
| **500** | **`#6177F3`** | Violet (PWA, WIN)/500 — **main** |
| 600 | `#4450E7` | Violet (PWA, WIN)/600 — hover |
| 700 | `#1942AE` | Violet (PWA, WIN)/700 — pressed |
| 800 | `#2D3582` | Violet (PWA, WIN)/800 |
| 900 | `#1A1D4C` | Violet (PWA, WIN)/900 |
| 1000 | `#141622` | Violet (PWA, WIN)/1000 — accent text |

### Страхование — Lime (Страхование)

| Step | Hex | Source |
|------|-----|--------|
| 50 | `#F2FAEB` | Lime (Страхование)/50 |
| 100 | `#E2F3D3` | Lime (Страхование)/100 |
| 200 | `#C9E7B1` | Lime (Страхование)/200 |
| 300 | `#AFDA90` | Lime (Страхование)/300 |
| 400 | `#95CB71` | Lime (Страхование)/400 |
| **500** | **`#7ABA54`** | Lime (Страхование)/500 — **main** |
| 600 | `#659D43` | Lime (Страхование)/600 — hover |
| 700 | `#517B37` | Lime (Страхование)/700 — pressed |
| 800 | `#3D5A2A` | Lime (Страхование)/800 |
| 900 | `#283A1D` | Lime (Страхование)/900 |
| 1000 | `#131B0E` | Lime (Страхование)/1000 — accent text |

---

## Neutral Palette (shared across ALL brands)

Source: Grey primitives. Identical in all 3 `Color Alias/*.tokens.json`.

| Step | Hex | Token |
|------|-----|-------|
| White | `#FFFFFF` | `--color-neutral-0` |
| 50 | `#FAFAFA` | `--color-neutral-50` |
| 100 | `#F2F2F2` | `--color-neutral-100` |
| 200 | `#E6E6E6` | `--color-neutral-200` |
| 300 | `#D9D9D9` | `--color-neutral-300` |
| 400 | `#CDCDCD` | `--color-neutral-400` |
| 500 | `#B2B2B2` | `--color-neutral-500` |
| 600 | `#9A9A9A` | `--color-neutral-600` |
| 700 | `#818181` | `--color-neutral-700` |
| 800 | `#676767` | `--color-neutral-800` |
| 900 | `#4F4F4F` | `--color-neutral-900` |
| 1000 | `#3D3D3D` | `--color-neutral-1000` |
| Black | `#1C1C1C` | `--color-neutral-black` |
| Black 5% | `#1C1C1C0C` | `--color-neutral-black5` |

---

## Error Palette (shared across ALL brands)

| Step | Hex | Token |
|------|-----|-------|
| 50 | `#FFF2F1` | `--color-error-50` |
| 100 | `#FFE5E4` | `--color-error-100` |
| 200 | `#FECDCE` | `--color-error-200` |
| 300 | `#FCA5A6` | `--color-error-300` |
| 400 | `#FA7277` | `--color-error-400` |
| 500 | `#F3404C` | `--color-error-500` |
| 600 | `#E32F43` | `--color-error-600` |
| 700 | `#BD132B` | `--color-error-700` |
| 800 | `#9E132A` | `--color-error-800` |
| 900 | `#87142B` | `--color-error-900` |
| 1000 | `#4C0511` | `--color-error-1000` |

---

## Semantic Tokens (how to use in components)

Components don't reference palette steps directly. Use these semantic aliases:

### Brand / Accent

| Token | Resolves to | Usage |
|-------|------------|-------|
| `--color-brand-primary` | `primary-500` | Primary buttons, links |
| `--color-brand-primary-hover` | `primary-600` | Hover state |
| `--color-brand-primary-pressed` | `primary-700` | Pressed/active state |
| `--color-brand-primary-subtle` | `primary-200` | Tinted backgrounds |
| `--color-brand-accent` | `primary-1000` | Dark accent text |
| `--color-text-accent` | `primary-1000` | Accent text |

### Surface (shared)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-surface-default` | `#F2F2F2` | Page background |
| `--color-surface-raised` | `#FFFFFF` | Cards, modals |
| `--color-surface-sunken` | `#E6E6E6` | Disabled inputs |
| `--color-surface-dark` | `#1C1C1C` | Dark sections |
| `--color-surface-light` | `#FAFAFA` | Near-white areas |

### Text (shared)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | `#1C1C1C` | Headings, body |
| `--color-text-secondary` | `#676767` | Labels, meta |
| `--color-text-tertiary` | `#9A9A9A` | Placeholders |
| `--color-text-disabled` | `#B2B2B2` | Disabled text |
| `--color-text-inverse` | `#FFFFFF` | Text on dark bg |
| `--color-text-on-brand` | `#FFFFFF` | Text on brand bg |

### Semantic state text (brand-aware)

| Token | КИБ/PWA | Страхование |
|-------|---------|-------------|
| `--color-text-success` | `#307359` | `#347C47` |
| `--color-text-warning` | `#93531F` | `#7B7508` |
| `--color-text-info` | `#126791` | `#377D84` |
| `--color-text-error` | `#BD132B` | `#BD132B` ✅ same |

---

## Rules for AI assistants

- ✅ **Always use semantic tokens** (`--color-brand-primary`, `--color-text-accent`) — never raw palette steps
- ✅ **Brand switching works automatically** — just set `data-brand` on `<html>`, no code changes needed
- ✅ **Neutrals and Error are always safe** — they never change between brands
- ⚠️ **Success, Warning, Info DO change per brand** — always use semantic tokens, not hardcoded hex
- ❌ **Never hardcode brand hex values** — always use `--color-primary-*` or `--color-brand-*`
- ❌ **Never assume Success is teal** — it's pure green for Страхование
