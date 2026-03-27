# Motion Foundation — Solar3 Design System

> Source: Figma → Solar3 / Foundations / Motion  
> Last updated: <!-- DATE -->  
> Status: 🟡 In progress — fill values from Figma

---

## Motion Principles

1. **Purposeful** — Motion guides attention, not decorates.
2. **Subtle** — Animations reinforce actions without distracting.
3. **Consistent** — Same action always uses the same duration + easing.
4. **Accessible** — All motion respects `prefers-reduced-motion`.

---

## Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | `0ms` | No animation (programmatic updates) |
| `--duration-fast` | `<!-- TODO e.g. 100ms -->` | Hover states, micro-interactions |
| `--duration-normal` | `<!-- TODO e.g. 200ms -->` | Default transitions (color, opacity) |
| `--duration-slow` | `<!-- TODO e.g. 300ms -->` | Panel open/close, drawer slide |
| `--duration-slower` | `<!-- TODO e.g. 500ms -->` | Modal appear, page transitions |

---

## Easing

| Token | CSS value | Usage |
|-------|----------|-------|
| `--easing-default` | `<!-- TODO e.g. cubic-bezier(0.4, 0, 0.2, 1) -->` | General transitions |
| `--easing-in` | `<!-- TODO e.g. cubic-bezier(0.4, 0, 1, 1) -->` | Elements leaving the screen |
| `--easing-out` | `<!-- TODO e.g. cubic-bezier(0, 0, 0.2, 1) -->` | Elements entering the screen |
| `--easing-bounce` | `<!-- TODO e.g. cubic-bezier(0.34, 1.56, 0.64, 1) -->` | Playful, confirmatory actions |

---

## Standard Transitions by Context

| Context | Duration | Easing |
|---------|----------|--------|
| Color / background hover | `--duration-fast` | `--easing-default` |
| Button press feedback | `--duration-fast` | `--easing-in` |
| Dropdown / menu open | `--duration-normal` | `--easing-out` |
| Dropdown / menu close | `--duration-fast` | `--easing-in` |
| Modal appear | `--duration-slow` | `--easing-out` |
| Modal dismiss | `--duration-normal` | `--easing-in` |
| Toast / notification | `--duration-slow` | `--easing-bounce` |
| Page transition | `--duration-slower` | `--easing-default` |
| Skeleton loading pulse | `1.5s` infinite | `ease-in-out` |

---

## Accessibility

Always wrap animation rules with the reduced-motion media query:

```css
@media (prefers-reduced-motion: no-preference) {
  .my-element {
    transition: transform var(--duration-normal) var(--easing-out);
  }
}
```

For elements that must animate (e.g. progress bars), use opacity instead of motion.

---

## Rules for AI assistants

- ✅ Use `--duration-*` and `--easing-*` tokens in all `transition` and `animation` declarations
- ✅ Wrap all animations in `@media (prefers-reduced-motion: no-preference)`
- ❌ Never hard-code `ms`, `s`, or `cubic-bezier` values
- ❌ Avoid decorative animations not tied to user interaction
