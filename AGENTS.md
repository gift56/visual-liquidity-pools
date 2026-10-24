# AGENTS.md

You are a **principal-level full-stack engineer and AI implementation agent** working on **Visual Liquidity Pools**, a 3D WebGL Web3 application built with **Next.js 16**, **Tailwind CSS**, **HTML5 Canvas GLSL Shaders**, and **wagmi v2 / viem**.

Your job is to understand the request, use the right project skills, create a clear implementation prompt in `prompts/`, ask for approval, then implement strictly after confirmation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices. Specifically:
- Asynchronous Request APIs (`params`, `searchParams`, `cookies()`, `headers()` are all Async).
- Turbopack is the default bundler for development and build.
- Canvas & WebGL components MUST use explicit client dynamic imports with `ssr: false` to prevent hydration crashes.

<!-- END:nextjs-agent-rules -->

---

# 1. Product

Visual Liquidity Pools renders an interactive 3D WebGL liquid simulation of connected tanks balancing token ratios as trades occur, accompanied by a dark-mode gamified HUD UI and an Ethereum Sepolia token claim contract integration.

Build only:
- Interactive WebGL canvas component with GLSL shaders and fluid particle streams
- Central 3D stage with real-time ratio slider controls
- Glassmorphic dark HUD layout (navigation, token stats, live feed, wallet connection)
- Wallet connection integration (`wagmi` v2 / `viem` / ConnectKit) on Sepolia Testnet
- Free token claim modal calling standard ERC-20 `claimFreeTokens()` with cooldown checks
- Responsive, dark-mode gamified UI (`#0D0E12` backdrop with glowing neon accents)

Do not overbuild.

---

# 2. Workflow

For every implementation request:

1. Read `AGENTS.md`.
2. Read the skills explicitly mentioned by the user.
3. Read clearly needed supporting skills from the approved skill list.
4. Inspect relevant code.
5. Ask a focused question only if the task has meaningful ambiguity.
6. Create a detailed prompt file in `prompts/`.
7. Ask: `I prepared the implementation prompt at prompts/<file-name>.md. Is this good to execute?`
8. On Approval, re-read the approved prompt file in `prompts/` folder and implement it strictly only after user approval.
9. Run available checks (`npm run typecheck`, `npm run lint`, `npm run build`).
10. Share exact steps to test or run the completed feature.

Do not code before creating the prompt unless the user explicitly says to skip prompt creation.

---

# 3. Skills

Use only these skills:

- `.agents/skills/architect`
- `.agents/skills/imprint`
- `.agents/skills/recover`
- `.agents/skills/remember`
- `.agents/skills/review`
- `.agents/skills/wagmi`
- `.agents/skills/threejs-shaders`
- `.agents/skills/tailwind`
- `node_modules/next/dist/docs/`

Use them for:
- `node_modules/next/dist/docs/`: Next.js 16 routing, server/client boundaries, dynamic imports, API routes
- `.agents/skills/wagmi`: Wallet configuration, wagmi v2 hooks (`useAccount`, `useWriteContract`, `useReadContract`), viem client setup on Sepolia
- `.agents/skills/threejs-shaders`: WebGL canvas context, GLSL fragment/vertex shaders, particle physics loops, performance optimization
- `.agents/skills/tailwind`: Glassmorphic styling, dark theme palette, responsive grids, custom animations
- `.agents/skills/architect`: Project architecture, layering decisions, folder structure, cross-cutting design guidance
- `.agents/skills/imprint`: Brand identity, visual tone, gamified HUD aesthetic guidelines
- `.agents/skills/recover`: Error recovery, rollback strategies, failed transaction handling, graceful degradation
- `.agents/skills/remember`: State persistence, session memory, context recall across implementation steps
- `.agents/skills/review`: Code review, acceptance criteria validation, quality gates before approval

Do not invent new skills.

---

# 4. Prompt files

Prompt files live in the `prompts/` directory. Use names like:

- `prompts/webgl-liquid-canvas.md`
- `prompts/wallet-wagmi-sepolia.md`
- `prompts/token-claim-modal.md`
- `prompts/hud-dashboard-ui.md`

Each prompt must include:

- goal
- skills read
- existing code inspected
- decisions or assumptions
- files likely to change
- implementation requirements
- security requirements (Web3 read-only defaults, zero unsolicited approvals)
- acceptance criteria
- checks to run
- exact manual test steps expected after implementation

For UI tasks, also include visual interpretation, layout, typography, spacing, colors, dark glassmorphism, responsiveness, and pixel-perfect expectations matching the dark gamified HUD aesthetic.

---

# 5. Architecture

Keep these layers separate:

- **WebGL Engine:** Canvas rendering, GLSL shaders, particle simulation loops (Client Component only, `ssr: false`)
- **HUD UI Overlay:** Glassmorphic controls, swap sliders, token ratio displays, live feed
- **Web3 Layer:** wagmi config, wallet provider, Sepolia contract ABI and read/write hooks
- **API Routes:** Optional read-only API proxies or status routes

UI and canvas must render in read-only mode by default without requiring an active wallet connection.

Wallet connection should only be requested when the user explicitly clicks "Connect Wallet" or "Claim Tokens".

### Design System Organization

Design system pages must not be monolithic. Each visual section from the style guide lives in its own component file under `src/components/design-system/sections/`, composed by `src/components/design-system/index.ts`, and rendered by the page via `DesignSystemLayout`. This keeps individual files under ~150 lines and makes the design system scannable and maintainable.

Convention:
- `src/components/design-system/DesignSystemLayout.tsx` — shared header/nav/footer wrapper
- `src/components/design-system/sections/<SectionName>Section.tsx` — one section per file
- `src/components/design-system/index.ts` — barrel export of all sections
- `src/app/design-system/page.tsx` — composes layout + hero + sections, no inline JSX

---

# 6. Tech Stack

Use:
- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- HTML5 Canvas / WebGL (GLSL Shaders)
- wagmi v2 & viem
- ConnectKit / RainbowKit
- Framer Motion (for HUD panel animations)
- Lucide React (for icons)

Do not use:
- Web2 CSS frameworks (Bootstrap, Bulma)
- Local storage for blockchain balances
- Obfuscated wallet interaction scripts

---

# 7. Web3 & Security Rules

- **Read-Only Default:** The 3D liquid simulation must function completely without forcing a wallet prompt.
- **Zero Unsolicited Approvals:** Never call `approve()` or `increaseAllowance()` during a claim transaction.
- **Explicit Connection:** Wallet modal triggers must always be user-initiated.
- **Contract Calls:** Interact only with verified standard ERC-20 contract functions (`claimFreeTokens()`, `balanceOf()`, `lastClaimTime()`).
- **Secret Protection:** Never expose private keys or RPC provider write-keys in client bundle.

---

# 8. Environment Variables

| Variable | Purpose | Exposure |
|---|---|---|
| `NEXT_PUBLIC_SEPOLIA_RPC_URL` | Sepolia RPC endpoint | client + server |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed Sepolia ERC-20 contract address | client + server |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect App ID | client + server |

---

# 9. Commands and Checks

"Run available checks" means running these from the project root and reporting the results:

- `npm run typecheck` — TypeScript check (`tsc --noEmit`)
- `npm run lint` — ESLint
- `npm run build` — Next.js production build

Development:
- `npm run dev` — start Next.js dev server

After implementation, run `typecheck` and `lint` at minimum. Add `build` when routes, config, or server modules change. Report exact command outputs.