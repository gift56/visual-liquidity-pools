# Implementation Prompt: Treasure Room Spin-to-Win

## Goal
Refactor the treasure room into small, colocated components, make its content vertically scrollable so visitors can review the live feed, and reproduce the supplied prize-wheel reference. On first entry, show a "Spin to Win" chest preview, animate the wheel once, highlight the prize under the pointer, announce its name and artwork, then show the existing "Buy a Chest" action. The action remains visual-only; this is not a claim or purchase integration.

## Skills and Guidance Read
- `client/AGENTS.md`
- `.agents/skills/imprint/SKILL.md`
- `ui-registry.md`
- Next.js App Router and CSS/image guidance in `node_modules/next/dist/docs/`

## Existing Code Inspected
- `src/components/dashboard/TreasureRoom.tsx` — 232-line composition of wheel, chest, reward cards, and live feed.
- `src/components/dashboard/Dashboard.tsx` — full-viewport dashboard shell.
- `src/app/globals.css` — theme tokens and existing roulette wheel styling.
- `src/components/dashboard/RoyalChat.tsx` — adjacent panel already uses contained scrolling.
- `public/images/` — local cauldron/potion, crown, skull, mushroom/crystal, rocket, live-thumbnail, and liquid-token assets.
- Supplied prize-wheel screenshot — 8 radial segments, illustrated prizes with angled labels, a fixed center result/chest card, coin balance, and back-to-market control.

## Decisions
- Colocate related files under `src/components/dashboard/treasure-room/`: a short `TreasureRoom.tsx` orchestrator, wheel animation, reward cards, live feed, and shared reward data/types as needed. Export via a nearby barrel and update the dashboard import.
- Animate the illustrated wheel automatically once when the treasure room first mounts. Respect `prefers-reduced-motion`; in reduced-motion mode select and display a prize without a long rotation.
- Use one reward definition for wedge art, label, selected reward, and prize cards, so the highlighted winner, its name, and its image always match.
- Render eight radial wheel segments with the supplied local artwork, dark wedge dividers, angled/tangential item labels, and a fixed pointer/result panel inspired by the reference. Keep the center panel readable while the outer wheel rotates.
- Show “Spin to Win” while the opening spin is in progress/preview. On completion, highlight the selected segment and display its name and image; then reveal “Buy a Chest x1”. Do not imply purchase/claim success, connect a wallet, or perform any external action.
- Keep the treasure room vertically scrollable with overscroll contained, including on desktop; place live feed after the wheel and item cards so the user can scroll to review it. Keep document-level desktop overflow locked.

## Files Likely to Change
- `src/components/dashboard/TreasureRoom.tsx` (move/refactor into the colocated folder)
- `src/components/dashboard/treasure-room/` (new focused components and reward data)
- `src/components/dashboard/Dashboard.tsx` (update import)
- `src/app/globals.css` (wheel appearance, spin transition, reduced-motion styling)
- `ui-registry.md` (document the wheel and scroll behavior)

## Acceptance Criteria
- Treasure-room code is divided into short, related files in one dedicated folder.
- At first view, the wheel spins once, then one wedge is visibly selected; the center shows that same reward's name and artwork.
- The eight-segment illustrated wheel resembles the supplied reference and uses local images only.
- “Buy a Chest x1” appears after the result and has no transaction/claim side effects.
- The user can vertically scroll the treasure room to review the live feed. Scroll stays contained and the desktop page itself does not overscroll.
- Reduced-motion preference avoids the long spin animation while still displaying a selected reward.
- `npm run lint` and `npx tsc --noEmit` pass.

## Manual Verification
1. Run `npm run dev` and open `/`.
2. Observe the first-entry spin, then verify the highlighted wedge, reward name, and image all match.
3. Verify the Buy a Chest action appears after the spin and does not initiate a wallet, network, claim, or purchase action.
4. Scroll the central treasure room to review all reward cards and the live feed; verify scroll does not move the dashboard page.
5. Test a reduced-motion setting and verify a selected reward still appears without a long spin.
