# Implementation Prompt: Wager-Style Dashboard UI

## Goal
Replace the current home-page redirect with a responsive, polished dashboard that closely recreates the supplied 1024×768 reference image for Visual Liquidity Pools. Use the existing images in `public/images/`, Lucide React, and React Icons. This is a UI-only dashboard; do not add wallet, contract, or network behavior.

## Skills Read
- `.agents/skills/imprint` — capture the finished dashboard's visual patterns in `ui-registry.md`.
- `.agents/skills/tailwind` — unavailable in the current checkout; follow the existing Tailwind CSS v4 setup and `ui-registry.md`.
- `client/AGENTS.md` — product, architecture, styling, and implementation workflow.

## Existing Code Inspected
- `src/app/page.tsx` — home route currently redirects to `/design-system`.
- `src/app/globals.css` — Tailwind v4 theme with the existing dark palette and typography.
- `src/app/layout.tsx` — global font and metadata.
- `src/app/design-system/page.tsx` and design-system components — existing design-system route should remain intact.
- `src/components/ui/GlassCard.tsx` — existing glass card styling.
- `src/components/design-system/sections/NavigationSection.tsx` and `IconSetSection.tsx` — existing navigation patterns and examples using both icon libraries.
- `public/images/` — `crow-skull.png`, `fly-agaric-crystal.png`, `flying-rocket.png`, `liquid-token.png`, `live-thumbnail.png`, `potion.png`, and `witch-crown.png`.
- `package.json` — Next.js 16, React 19, Tailwind CSS v4, `lucide-react`, and `react-icons` are already installed.
- `ui-registry.md` — existing design tokens and shared component patterns.

## Visual Interpretation
Recreate the reference's game-like “WAGER” dashboard, not the existing design-system showcase:
- At desktop size, frame the app in a broad rounded dark panel centered on a muted periwinkle/violet outer canvas, with a subtle shadow. The screenshot uses a very dark top bar, a narrow left navigation, a dominant central game area, and a right chat column.
- Use a dense, compact HUD hierarchy and restrained charcoal surfaces, fine borders, small muted labels, bright blue-violet selected/primary controls, and occasional gold coin and cyan/green details. Preserve the supplied design-system palette where it fits; define any necessary lavender frame color as a CSS token rather than scattering raw hex values.
- Keep the screenshot's proportions and content hierarchy at approximately 1024×768: top bar across the shell; sidebar around one-sixth of the shell; chat around one-fifth; center stage taking the remaining width.
- The center stage is a circular chest roulette: a central Witch Chest panel with coin reward, chest artwork, title, supporting copy, and a strong “BUY A CHEST” call to action. Arrange selectable illustrated item rewards around a large segmented circular track, with a small “Back to market” label above.
- Under the roulette, show a horizontal “ITEMS FROM THE CHEST” row of compact collectible cards and a lower “LIVE FEED” strip. Use the bundled potion, crown, skull, mushroom, rocket, and token artwork where appropriate.
- The left navigation begins with the WAGER wordmark and small account/category controls, then Royal Games links (Home page, Duel Arena, Royal Roulette, Chest Battle) with Chest Battle selected. Below it show Custom Features (Friends, Notifications, Rewards) and Additional Information / Daily Tasks. Use recognizable Lucide icons and concise labels.
- The top bar includes compact game-category tabs, a search field, small balance/notification indicators, and an avatar/profile control.
- The right column has a “Royal Chat” header, online/member indicators, an eye-catching VIP subscription banner, a scrollable-looking set of compact member messages with avatars/status markers, and a message composer.
- Keep the overall visual tone close to the supplied image while improving legibility and accessibility. Avoid external image URLs; use only bundled assets and local CSS treatments.

## Decisions / Assumptions
- The dashboard becomes the `/` landing page; keep `/design-system` available as its current development-only page.
- Build presentational UI and local, reversible affordances only. Navigation/tab selection can use simple local state where needed; chat and purchase controls must not imply or perform real transactions.
- Do not add dependencies: both requested icon packages and all listed image assets are already present.
- Compose the dashboard from focused components under `src/components/dashboard/` rather than a single monolithic page. Preserve the existing design-system and shared UI components unless changes are directly required.
- At narrower widths, avoid squeezing the desktop shell: reflow or hide secondary regions in a deliberate responsive layout while keeping the chest and primary action usable.

## Files Likely to Change
- `src/app/page.tsx` — render the dashboard instead of redirecting to the design-system route.
- `src/app/globals.css` — add only directly needed dashboard styles/tokens if Tailwind classes alone are insufficient.
- `src/app/layout.tsx` — update product metadata if needed.
- `src/components/dashboard/` — add focused dashboard shell, sidebar, top bar, chest stage, collectible strip, live feed, and chat components as appropriate.
- `ui-registry.md` — record the implemented dashboard's reusable visual patterns after implementation.
- `prompts/hud-dashboard-ui.md` — implementation requirements and acceptance criteria.

## Implementation Requirements
1. Before coding, read the relevant Next.js 16 guidance under `node_modules/next/dist/docs/` and any applicable current project skill files.
2. Reuse existing theme classes and UI patterns from `globals.css` and `ui-registry.md`; keep components typed, accessible, and consistent with the repository's formatting conventions.
3. Use `next/image` or otherwise follow established local asset conventions for images in `public/images/`. Give images meaningful alt text when informative and empty alt text when decorative.
4. Use both Lucide React and React Icons where appropriate: Lucide for navigation and controls; React Icons for crypto/game marks where a suitable icon exists. Do not replace supplied collectible artwork with emoji.
5. Give all icon-only buttons accessible names, all buttons explicit `type="button"` unless they submit a form, and interactive controls visible focus states.
6. Keep the dashboard read-only by default. Do not add wallet prompts, RPC calls, contract calls, transaction-shaped success states, or unsolicited approvals.
7. Keep `/design-system` behavior unchanged and ensure the home route loads the dashboard without hydration errors.
8. Update `ui-registry.md` with the dashboard's visual patterns per the imprint skill.

## Security Requirements
- No wallet, RPC, API, or contract interactions are needed for this UI.
- No private keys, write-capable credentials, or blockchain balances stored in local storage.
- The chest purchase and chat UI are visual affordances only and must not claim that a real purchase/message occurred.

## Acceptance Criteria
- `/` renders the dashboard rather than redirecting to `/design-system`.
- At a desktop viewport near 1024×768, the layout clearly matches the reference's outer violet frame, dark rounded shell, left navigation, central circular chest game, item/live-feed rows, and right chat panel.
- Existing images from `public/images/` are meaningfully used in collectible cards and/or game art; no external image service is required.
- Lucide React and React Icons both appear in the dashboard UI in suitable roles.
- Desktop layout remains compact and readable; tablet/mobile layouts adapt without horizontal overflow or unusable primary content.
- `/design-system` still works as before.
- `ui-registry.md` documents the dashboard's reusable visual choices.
- `npm run lint` and `npm run typecheck` pass; run `npm run build` if route or app configuration changes expose build-specific issues. Note: `package.json` currently does not define a `typecheck` script, so use `npx tsc --noEmit` unless the script is added intentionally.

## Checks to Run
From `client/`:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## Exact Manual Test Steps
1. Run `npm run dev` from `client/`.
2. Open `http://localhost:3000/` and compare it with the supplied reference at a 1024×768 viewport.
3. Confirm the left navigation, top bar, chest roulette, collectible cards, live feed, and Royal Chat all render, and that the provided local artwork loads.
4. Resize to tablet and mobile widths; confirm the layout reflows without horizontal scrolling and the chest action remains visible.
5. Keyboard-tab through interactive controls and confirm visible focus indicators and accessible names.
6. Open `http://localhost:3000/design-system` in development and confirm the existing design-system page remains available.
7. Confirm that no wallet prompt, transaction, or external image request is triggered by loading or interacting with the visual controls.
