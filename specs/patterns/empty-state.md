# Empty State Pattern — Solar3 Design System

> Source: Figma → Solar3 / Patterns / Empty State  
> Last updated: <!-- DATE -->  
> Status: 🟡 In progress — align with Figma composition

---

## Overview

The Empty State pattern is displayed when a container or page has no data to show. It exists to inform the user, reassure them something isn't broken, and guide them toward a call to action.

## Core Elements

1. **Illustration / Icon:** Big visual cue (Atom).
2. **Title:** Short, friendly text on why it's empty (`.text-h3`).
3. **Description:** Helpful context text (`.text-body-sm` or `.text-body`, color `var(--color-text-secondary)`).
4. **Primary Action:** A button to fix the empty state (Molecule).

## Layout & Tokens

| Element | Spacing / Tokens |
|---------|------------------|
| Section Padding | `var(--spacing-12)` top/bottom (center content) |
| Illustration Size | `120px` to `160px` |
| Gap to Title | `var(--spacing-6)` |
| Gap Title to Desc | `var(--spacing-2)` |
| Gap Desc to Action | `var(--spacing-8)` |
| Alignment | Text center (`text-align: center`) |

## Composition

```html
<div class="empty-state">
  <div class="empty-illustration">...</div>
  <h3 class="text-h3">No projects yet</h3>
  <p class="text-body text-color-secondary">Create your first project to get started.</p>
  <button class="btn btn-primary">Create Project</button>
</div>
```

---

## Rules for AI assistants
- ✅ Center all content horizontally and vertically within the parent container.
- ✅ Use `var(--color-text-secondary)` for the description.
- ❌ Do not use primary colors on the empty state title. Keep it neutral (`var(--color-text-primary)`).
- ❌ Ensure there's a strong visual hierarchy. The CTA button should be the anchor element.
