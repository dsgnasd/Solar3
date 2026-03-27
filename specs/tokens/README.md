# Tokens Reference

This folder is intended to store token mappings if you want to split your Figma variables into granular domains (e.g. `colors.json` or `colors.md`, `typography.md`).

Right now, the single source of truth for **all** tokens is `tokens.css` located in the root directory.

If your design system grows, you can document specific token aliases here.

Example: `theme-dark.md` mapping:
```css
--color-surface-default: var(--color-neutral-900);
--color-text-primary: var(--color-neutral-50);
```
