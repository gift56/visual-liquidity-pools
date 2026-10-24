# Implementation Prompt: Dark Gamified HUD Design System

## Goal
Build a dark-mode, gamified Web3 design system for **Visual Liquidity Pools** that matches the provided style-guide image (Web3 UI Kit Design System & Style Guide). The design system must define design tokens (color palette, typography, radius, shadows), glassmorphic UI components (Button, Input, Status Badge, Tab Selector, Card/Container), and a showcase that renders in read-only mode with no wallet required. This is the visual foundation for the HUD, 3D stage, and Web3 layers.

## Skills Read
- `.agents/skills/imprint` — extract visual patterns into `ui-registry.md` after components are built
- `.agents/skills/tailwind-4-docs` — Tailwind CSS v4 utilities, `@theme`, `adding-custom-styles`, `theme` configuration
- `.agents/skills/architect` — layer separation, folder structure, cross-cutting design decisions
- `node_modules/next/dist/docs/` — Next.js 16 App Router, `next/font`, dynamic imports, SSR boundaries

## Existing Code Inspected
- `client/package.json` — Next.js 16.4.0, React 19.3.0, Tailwind CSS v4; wagmi/viem/connectkit/framer-motion/lucide-react NOT yet installed
- `client/src/app/globals.css` — default `@import "tailwindcss"`, light/dark `:root`, Geist font (to be replaced with Inter + design tokens)
- `client/src/app/layout.tsx` — RootLayout with Geist fonts, `min-h-full flex flex-col` body
- `client/src/app/page.tsx` — default Next.js starter page (to be replaced by design-system showcase)
- `client/tsconfig.json` — strict TS, `@/*` path alias to `./src/*`
- `client/next.config.ts` — Turbopack tailwind loader, reactCompiler enabled
- `client/AGENTS.md` — product rules: `#0D0E12` backdrop, neon accents, read-only default, zero unsolicited approvals, `ssr: false` for canvas

## Decisions / Assumptions
- **Palette (from image):** Primary Background `#0D0E12`, Secondary Background `#14151B`, Surface/Card `#1A1C25`, Border/Stroke `#2A2D3A`; accents: Electric Violet/Blue `#4F46E5`, Hover/Light Blue `#22D3EE`, Neon Green `#22C55E`, Gold/Amber `#F59E0B`, Magenta/Pink `#EC4899`. Text: primary `#E2E8F0`, secondary `#94A3B8`, muted `#64748B`.
- **Typography:** Inter (geometric sans-serif) via `next/font/google` with `subsets: ["latin"]`; Display 64/72 Bold, H1 48/56 Semibold, H2 32/40 Semibold, Section 24/32 Semibold, Body 16/24 Regular, Caption 14/20 Medium, Micro 12/16 Regular.
- **Components scoped for this task:** Button (primary/outline/ghost + hover/focus/active), Input, StatusBadge (Connected/Pending/Failed/Completed/Live/Coming Soon), TabSelector, GlassCard (glassmorphic container). Icon Set, 3D Illustrations, Alerts/Toasts, Forms are noted as future scope but their tokens are defined now.
- **Implementation approach:** Tailwind v4 `@theme` block in `globals.css` for all tokens; `next/font` Inter in `layout.tsx`; reusable components under `src/components/ui/`; a `DesignSystem` page under `src/app/design-system/page.tsx` mirroring the image layout; `ui-registry.md` at project root per imprint skill.
- **Read-only default:** Nothing in the design system touches wallet/Web3; no connection prompts.
- **No new dependencies beyond AGENTS.md stack** beyond what is needed now; wagmi etc. are deferred to later prompts.
- **Responsiveness:** mobile-first, stack sections on small screens, grid on `sm:`+.

## Files Likely to Change
- `client/src/app/globals.css` — add `@theme` design tokens (colors, font, radius, shadows)
- `client/src/app/layout.tsx` — swap Geist for Inter, apply dark theme wrapper classes
- `client/src/app/page.tsx` — replace starter with design-system landing/redirect
- `client/src/app/design-system/page.tsx` — NEW: full design-system showcase page
- `client/src/components/ui/Button.tsx` — NEW
- `client/src/components/ui/Input.tsx` — NEW
- `client/src/components/ui/StatusBadge.tsx` — NEW
- `client/src/components/ui/TabSelector.tsx` — NEW
- `client/src/components/ui/GlassCard.tsx` — NEW
- `client/src/components/ui/index.ts` — NEW barrel export
- `client/ui-registry.md` — NEW (per imprint skill, after components built)
- `client/prompts/design-system-ui.md` — this file

## Implementation Requirements
1. Define all design tokens in `globals.css` via `@theme inline` matching the image exactly: `--color-bg-primary #0D0E12`, `--color-bg-secondary #14151B`, `--color-surface #1A1C25`, `--color-border #2A2D3A`, `--color-accent-violet #4F46E5`, `--color-accent-cyan #22D3EE`, `--color-accent-green #22C55E`, `--color-accent-gold #F59E0B`, `--color-accent-pink #EC4899`, text colors (`--color-text-primary #E2E8F0`, `--color-text-secondary #94A3B8`, `--color-text-muted #64748B`), `--radius`, `--shadow-glow`, etc. Expose as Tailwind classes (e.g. `bg-bg-primary`, `text-accent-violet`).
2. Load Inter via `next/font/google` in `layout.tsx`; set `className="inter-font antialiased"` on `<html>`/`<body>`.
3. Body/root: `bg-bg-primary text-text-primary min-h-full`.
4. Button: primary (violet fill, white text, glow shadow), outline (border-border, transparent bg), ghost (no border); hover brightens accent; active scales slightly; disabled opacity 50%. Rounded-full or rounded-lg per variant.
5. Input: bg-surface, border-border, text-primary, placeholder muted, focus ring accent-cyan, rounded-lg, padding consistent.
6. StatusBadge: pill-shaped, colored dot + text; Connected=green, Pending=gold, Failed=pink, Completed=violet, Live=cyan, Coming Soon=muted.
7. TabSelector: segmented pills, active state uses accent-violet fill with white text, inactive muted.
8. GlassCard: `bg-surface/80 backdrop-blur border border-border/50 shadow-glow rounded-xl`, subtle glow on hover.
9. DesignSystem page: reproduce image sections — Color Palette swatches, Typography scale, UI Components gallery (Buttons/Inputs/Badges/Tabs), Cards & Containers, Icon Set placeholders, Navigation, Alerts, Forms, Style/Mood Board — all in the dark gamified HUD aesthetic.
10. All components: TypeScript, React 19, responsive, no hardcoded hex outside tokens (use theme classes/CSS vars), accessible (aria labels, focus visible).
11. After building, write `ui-registry.md` capturing per component: Background, Border, Border radius, Text colors/sizes/weights, Spacing, Hover state, Shadow, Accent usage.

## Security Requirements
- Read-only by default: no wallet connection, no RPC calls, no contract interaction in this design system.
- Zero unsolicited approvals: not applicable (no Web3), but record rule for future.
- No private keys or RPC write-keys in client bundle.
- No localStorage for blockchain balances.


## Acceptance Criteria
- `globals.css` defines the full token palette and typography matching the image; Tailwind utility classes resolve correctly.
- Page renders with `#0D0E12` backdrop, Inter font, neon accents; no layout shift or hydration errors.
- Button/Input/StatusBadge/TabSelector/GlassCard render correctly in all variants with hover/focus/active states.
- DesignSystem page is responsive (mobile stack, desktop grid) and visually matches the image sections.
- `ui-registry.md` exists and captures every component's visual patterns.
- `npm run typecheck` and `npm run lint` pass from `client/`.

## Checks to Run
From `client/`:
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — `biome check`
- (Optional, if routes/config changed) `npm run build` — Next.js production build
- `npm run dev` — verify page loads at `http://localhost:3000/design-system`

## Exact Manual Test Steps
1. Run `npm run dev` from `client/`.
2. Open `http://localhost:3000/design-system`.
3. Confirm background is `#0D0E12`, text is legible, Inter font applied.
4. Confirm Color Palette section shows swatches for bg-primary, bg-secondary, surface, border, violet, cyan, green, gold, pink.
5. Confirm Typography section shows all scale sizes/weights.
6. Click each Button variant (default/hover/pressed, outline, ghost) — confirm hover brightens and pressed scales.
7. Confirm Input shows focus ring in accent-cyan and placeholder in muted.
8. Confirm StatusBadge cycles through Connected/Pending/Failed/Completed/Live/Coming Soon with correct colors.
9. Confirm TabSelector highlights active tab with violet fill.
10. Confirm GlassCard has backdrop blur, border, and subtle glow.
11. Resize browser to mobile width — sections stack, remain readable.
12. Run `npm run typecheck` and `npm run lint` — both must pass with no errors.

