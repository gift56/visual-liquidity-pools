# Implementation Prompt: Fullscreen Dashboard and Readable Type

## Goal
Adjust the existing chest dashboard to fill the viewport edge-to-edge, use `bg-primary` as its source of truth instead of the violet page backdrop, increase text sizes across dashboard controls and labels, and prevent desktop page scrolling/overscroll.

## Skills and Guidance Read
- `client/AGENTS.md`
- `.agents/skills/imprint` and `ui-registry.md`
- Relevant Next.js 16 App Router and CSS documentation under `node_modules/next/dist/docs/`

## Existing Code Inspected
- `src/components/dashboard/Dashboard.tsx`
- `src/components/dashboard/RoyalHeader.tsx`
- `src/components/dashboard/DashboardSidebar.tsx`
- `src/components/dashboard/TreasureRoom.tsx`
- `src/components/dashboard/RoyalChat.tsx`
- `src/app/globals.css`
- `ui-registry.md`
- The supplied screenshot shows the desired full-viewport desktop treatment with no outer violet gutters.

## Decisions
- Fill the viewport at all sizes: remove outer gradient framing, shell gutters, rounded shell, max-width and frame shadow.
- Use the existing `bg-primary` (`#0D0E12`) body/canvas as the dashboard background source of truth; preserve intentional dark panel and violet accent surfaces.
- Raise dashboard microcopy to comfortable readable sizes, increasing nav, header, chat, item, and feed text while retaining visual hierarchy and compact layout.
- Lock document scrolling/overscroll on desktop; use a viewport-sized shell and prevent outer page scroll. Keep only intentional, contained inner-panel scrolling when content cannot fit. Preserve sensible mobile behavior without accidental document bounce or horizontal overflow.
- Update `ui-registry.md` to reflect the new fullscreen treatment and type scale.

## Files Likely to Change
- `src/components/dashboard/Dashboard.tsx`
- `src/components/dashboard/RoyalHeader.tsx`
- `src/components/dashboard/DashboardSidebar.tsx`
- `src/components/dashboard/TreasureRoom.tsx`
- `src/components/dashboard/RoyalChat.tsx`
- `src/app/globals.css`
- `ui-registry.md`

## Acceptance Criteria
- The dashboard touches all viewport edges, without a violet border/gutter.
- `bg-primary` is the page/dashboard canvas background.
- Dashboard text is visibly larger and legible, and all desktop regions still fit without unintended outer scrolling.
- Desktop scrolling and overscroll are suppressed; necessary panel overflow remains contained.
- Mobile remains usable without horizontal page overflow.
- `npm run lint` and `npx tsc --noEmit` pass.

## Manual Verification
1. Run `npm run dev`.
2. At 1366×768 and 1024×768, confirm edge-to-edge primary-background framing, increased legibility, and no document scrollbar or overscroll.
3. At 390×844, confirm readable controls, usable chest stage, contained overflow, and no horizontal page scrolling.
