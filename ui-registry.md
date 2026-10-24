# UI Registry — Visual Liquidity Pools Design System

Last updated: 2026-10-24

## Design Tokens (globals.css)

| Property | Value | Tailwind Class |
|----------|-------|----------------|
| Background primary | `#0D0E12` | `bg-bg-primary` |
| Background secondary | `#14151B` | `bg-bg-secondary` |
| Surface / Card | `#1A1C25` | `bg-surface` |
| Border / Stroke | `#2A2D3A` | `border-border` |
| Accent Violet | `#4F46E5` | `bg-accent-violet`, `text-accent-violet` |
| Accent Cyan | `#22D3EE` | `bg-accent-cyan`, `text-accent-cyan` |
| Accent Green | `#22C55E` | `bg-accent-green`, `text-accent-green` |
| Accent Gold | `#F59E0B` | `bg-accent-gold`, `text-accent-gold` |
| Accent Pink | `#EC4899` | `bg-accent-pink`, `text-accent-pink` |
| Text primary | `#E2E8F0` | `text-text-primary` |
| Text secondary | `#94A3B8` | `text-text-secondary` |
| Text muted | `#64748B` | `text-text-muted` |
| Radius card | `0.75rem` | `rounded-card` |
| Radius pill | `9999px` | `rounded-pill` |
| Shadow glow | `0 0 24px rgba(79,70,229,0.35)` | `shadow-glow` |

Typography scale (Inter): Display 4rem/700, H1 3rem/600, H2 2rem/600, Section 1.5rem/600, Body 1rem/400, Caption 0.875rem/500, Micro 0.75rem/400.

---

## Button

File: `src/components/ui/Button.tsx`

| Property | Class |
|----------|-------|
| Background | `bg-accent-violet` (primary), transparent (outline/ghost) |
| Border | `border border-border` (outline only) |
| Border radius | `rounded-lg` |
| Text — primary | `text-white` (primary), `text-text-primary` (outline/ghost) |
| Text — secondary | `text-text-secondary` |
| Spacing | `px-4 py-2` (md), `px-2.5 py-1.5` (sm), `px-6 py-3` (lg) |
| Hover state | `hover:bg-accent-cyan` (primary), `hover:bg-surface hover:border-accent-cyan` (outline), `hover:bg-surface/50` (ghost) |
| Shadow | `shadow-glow` (primary only) |
| Accent usage | Violet primary, cyan hover |

**Pattern notes:** All variants use `transition-all duration-200`, `active:scale-95`, `focus-visible:ring-1 focus-visible:ring-accent-cyan`. Disabled: `opacity-50 disabled:pointer-events-none`.

---

## Input

File: `src/components/ui/Input.tsx`

| Property | Class |
|----------|-------|
| Background | `bg-surface` |
| Border | `border border-border` |
| Border radius | `rounded-lg` |
| Text — primary | `text-text-primary` |
| Text — secondary | `placeholder:text-text-muted` |
| Spacing | `px-3 py-2`, `h-10` |
| Hover state | None (focus only) |
| Shadow | None |
| Accent usage | `focus-visible:ring-1 focus-visible:ring-accent-cyan` |

**Pattern notes:** Focus ring is accent-cyan. Disabled: `disabled:cursor-not-allowed disabled:opacity-50`. Placeholder uses `text-text-muted`.

---

## StatusBadge

File: `src/components/ui/StatusBadge.tsx`

| Property | Class |
|----------|-------|
| Background | `bg-surface/80 backdrop-blur` |
| Border | `border border-border` |
| Border radius | `rounded-full` (pill) |
| Text — primary | `text-text-secondary text-[0.75em]` |
| Spacing | `px-2.5 py-1`, `gap-1.5` |
| Hover state | None |
| Shadow | None |
| Accent usage | Status-colored dot: Connected=green, Pending=gold, Failed=pink, Completed=violet, Live=cyan, Coming Soon=muted |

**Pattern notes:** Pill-shaped with colored dot indicator (`h-2 w-2 rounded-full`). Dot uses status-specific shadow-glow variant.

---

## TabSelector

File: `src/components/ui/TabSelector.tsx`

| Property | Class |
|----------|-------|
| Background | `bg-surface/50 backdrop-blur` |
| Border | `border border-border` |
| Border radius | `rounded-pill` (container), `rounded-lg` (tabs) |
| Text — primary | `text-text-primary` (active), `text-text-secondary` (inactive) |
| Text — secondary | `text-text-muted` (inactive) |
| Spacing | `px-3 py-1.5`, `gap-1`, `px-0.5 py-0.5` (container) |
| Hover state | `hover:text-text-primary hover:bg-surface/50` (inactive) |
| Shadow | `shadow-glow` (active only) |
| Accent usage | `bg-accent-violet text-white` (active) |

**Pattern notes:** Segmented pills, active state uses accent-violet fill with white text. Container has `backdrop-blur`.

---

## GlassCard

File: `src/components/ui/GlassCard.tsx`

| Property | Class |
|----------|-------|
| Background | `bg-surface/80 backdrop-blur-md` |
| Border | `border border-border/50` |
| Border radius | `rounded-card` (`0.75rem`) |
| Text — primary | Inherits from parent |
| Spacing | `p-4` (sm), `p-6` (md), `p-8` (lg) |
| Hover state | `hover:border-accent-cyan/50` |
| Shadow | `shadow-glow` |
| Accent usage | Cyan border on hover |

**Pattern notes:** Glassmorphic container with backdrop blur, subtle border, and glow shadow. Hover brightens border to accent-cyan/50.

---

## Usage Rules

- All components render in read-only mode; no wallet connection required.
- No hardcoded hex values outside `globals.css` tokens.
- All interactive elements have `focus-visible` states.
- All buttons have explicit `type="button"` unless submitting a form.
- Form labels use `htmlFor` paired with input `id`.
- ARIA attributes only on supported elements.
