# Royal Chat Empty State

## Goal

Render the Royal Chat panel as a polished empty state instead of showing fabricated chat members and messages.

## Skills Read

- No matching project skill is needed for this focused component update.

## Existing Code Inspected

- `src/components/dashboard/RoyalChat.tsx`
- `src/components/dashboard/Dashboard.tsx`
- `AGENTS.md`

## Decisions and Assumptions

- Keep the Royal Chat panel, member summary, VIP subscription banner, and read-only message composer in place.
- Replace sample chat messages with a centered empty-state treatment using Lucide icons and concise explanatory text.
- Keep the existing dark HUD palette, borders, spacing, typography, and responsive dashboard layout.
- Preserve all other dashboard and treasure-room changes; do not touch unrelated files.

## Files Likely to Change

- `src/components/dashboard/RoyalChat.tsx`

## Implementation Requirements

- Remove hardcoded sample names and conversation messages from the rendered chat.
- Keep the current Royal Chat header, viewer count, member summary, VIP banner, and disabled read-only composer.
- Show an icon-led empty state in the message-list region, with a clear title and short invitation to start the conversation when chat is available.
- Use existing Lucide icons and existing project color/style tokens.
- Maintain accessible icon semantics and appropriate empty-state text.
- Do not add chat functionality, networking, fabricated activity, or Web3 interactions.
- Preserve the changes already made to the rest of the dashboard.

## Security Requirements

- Remain read-only; do not add wallet requests, approvals, transactions, or external data connections.

## Acceptance Criteria

- Royal Chat no longer renders sample messages or fabricated user activity.
- The existing chat panel styling and surrounding dashboard layout remain unchanged.
- The message area displays an accessible, visually consistent empty state with iconography.
- The existing disabled composer remains present.

## Checks

- Run `npm run lint` from `client`.
- Run `npx tsc --noEmit` from `client`.

## Manual Test Steps

1. Run `npm run dev` from `client` and open the dashboard at desktop width.
2. Confirm the Royal Chat header, members summary, VIP banner, and disabled composer remain.
3. Confirm no sample messages or names appear and the empty state is centered in the conversation area.
4. Confirm the rest of the dashboard, including the treasure room, remains unchanged.
