# Implementation Prompt: Reference-Matched Spin Wheel and Cooldown

## Goal
Enlarge and visually correct the spin wheel to match the latest supplied screenshot, remove the "Potion Cauldron" prize, require an explicit click on a spin button before animation, and reset/start the existing 24:18 countdown after each allowed spin.

## Skills and Guidance Read
- `client/AGENTS.md`
- `.agents/skills/imprint/SKILL.md`
- `ui-registry.md`

## Existing Code Inspected
- `src/components/dashboard/treasure-room/SpinWheel.tsx` — current 140-line wheel and auto-spin.
- `src/components/dashboard/treasure-room/TreasureRoom.tsx` — wheel position, current static timer.
- `src/components/dashboard/treasure-room/rewards.ts` — current reward definitions and label angles.
- `src/components/dashboard/treasure-room/RewardCards.tsx` — reward card rendering.
- `src/app/globals.css` — wheel, label, shell and spin animation CSS.
- Latest user screenshot — centered large radial wheel with eight colored wedges and prize art/labels at clockwise positions: top Potion of Oblivion, upper-right Crow Skull, right Red Agaric, lower-right Flying Broom, bottom Rare Relic, lower-left Red Agaric, left Witch's Cap, upper-left Potion Cauldron.

## Decisions / Clarifications
- Enlarge the wheel and its prize art, and closely match the screenshot's radial wedge geometry, segment ordering, exact positions, readable tangential labels, fixed top pointer, and fixed center result panel.
- Remove "Potion Cauldron" from the wheel and reward cards. To keep the requested eight-slot reference geometry, replace its slot with a distinct reward name and artwork chosen by the user in the approval form.
- Initial state shows a "SPIN TO WIN" button and no selected prize. A spin starts only on an explicit button click; mouse movement or hover never starts it.
- Each spin selects one reward, resets the countdown to 24:18, and animates to that reward. During the 4.8-second animation, disable the spin action. Afterward, highlight the winning segment and display its matching name and larger artwork, while retaining the separate visual-only "BUY A CHEST X1" button.
- The 24:18 timer counts down from the moment a spin starts. The spin control remains unavailable until it reaches zero; then the user may explicitly spin again and the timer resets. Keep timer implementation local and presentational; do not add APIs, storage, or wallet/claim behavior.
- Honor `prefers-reduced-motion`: choose and display a prize immediately when spinning is explicitly requested, without the long rotation, and run the same cooldown.

## Files Likely to Change
- `src/components/dashboard/treasure-room/SpinWheel.tsx`
- `src/components/dashboard/treasure-room/TreasureRoom.tsx`
- `src/components/dashboard/treasure-room/rewards.ts`
- `src/components/dashboard/treasure-room/RewardCards.tsx`
- `src/app/globals.css`
- `ui-registry.md`

## Acceptance Criteria
- Wheel and artwork are visibly larger and match the reference's prize placement and wheel silhouette.
- "Potion Cauldron" is absent. Eight wheel segments remain with the user's selected replacement.
- The initial wheel does not spin until the user activates "SPIN TO WIN".
- The chosen prize under the fixed pointer is the same prize highlighted on the wheel and shown by name/image/value in the result panel.
- "BUY A CHEST X1" appears only after a spin result; it remains a visual-only button.
- Every explicit spin resets and starts the 24:18 timer. Spinning is disabled until the countdown reaches zero.
- Treasure-room scroll and dashboard page-scroll behavior remain correct.
- `npm run lint` and `npx tsc --noEmit` pass.

## Manual Verification
1. Run `npm run dev` and open `/`.
2. Confirm the wheel matches the screenshot, is larger, and does not move before clicking "SPIN TO WIN".
3. Click once; confirm the timer starts at 24:18 and decrements, and repeat clicks cannot start another spin during the cooldown.
4. After the spin, verify the fixed pointer, gold-highlighted segment, result label, larger center artwork, and reward card correspond.
5. Confirm "Potion Cauldron" is absent and the selected replacement appears in the wheel and cards.
6. With reduced motion enabled, explicitly click Spin and confirm immediate result selection plus the same timer/cooldown.
