# Visual Liquidity Pools

Visual Liquidity Pools is a futuristic Web3 dashboard and interactive simulation experience designed to make liquidity, token ratios, and on-chain trading behavior feel tangible and easy to understand. The project combines a dark, game-like HUD with a live WebGL-driven liquid animation to represent how connected token pools balance and react as a market moves.

At a high level, this application is a concept prototype for a DeFi/market visualization product: instead of showing abstract charts alone, it turns the idea of liquidity pools into a visual, responsive system where users can see pool flow, ratio changes, and token behavior in real time.

## What the project is about

The product concept is built around a simple idea:

- liquidity is not just a number on a chart;
- it is a living system of flowing value, balancing ratios, and interacting assets;
- users should be able to understand what happens when one asset grows, another shrinks, or a pool rebalances through market activity.

The interface presents that system as a 3D-inspired liquid simulation with glowing, glassmorphic panels, token stats, a live feed, and wallet-connected actions. It is designed to feel like a premium trading command center or a futuristic treasury dashboard, while still being readable and usable as a front-end prototype.

## Core product goals

This project aims to:

- visualize connected liquidity pools as fluid, dynamic systems;
- communicate token ratio balancing in a way that feels immediate and intuitive;
- provide a gamified dark-mode trading interface with a strong visual identity;
- showcase a production-style frontend architecture in Next.js;
- include wallet-ready Web3 hooks for a Sepolia testnet experience with a token claim flow;
- create a polished design-system foundation for reuse across future product surfaces.

## Main experience

The app centers around a dashboard layout with three primary sections:

1. Sidebar navigation for product areas and app sections
2. Main live simulation area with the "Treasure Room" style experience
3. Right-side live chat / status feed for market and system updates

The main visual area is designed to resemble a vault-like or game-themed control chamber, where the user sees an animated pool-like stage under a glassmorphic HUD. It is meant to feel immersive and high-end rather than a standard analytics dashboard.

## Features

### Interactive liquid simulation

The project includes a WebGL / canvas-based liquid simulation concept that visually resembles connected tanks or pools. It represents how token relationships can shift over time and how liquidity pressure influences the appearance of the system.

This is not just decorative; it reinforces the product narrative: the market is fluid, connected, and constantly adjusting.

### Ratio controls and system balance

The UI includes controls to adjust ratios and observe how a pool responds. The idea is to model how liquidity can be tuned or drift as trades happen, giving the product a tangible sense of supply/demand interaction.

### Dark glassmorphism interface

The design language uses:

- deep charcoal backgrounds;
- neon accents and glowing edges;
- translucent panels;
- premium gaming-inspired typography and spacing;
- layered overlays to emphasize data and control surfaces.

This gives the app a distinctive "luxury trading terminal" aesthetic.

### Wallet-aware Web3 flow

The app is built with Web3 support in mind. It is designed to work in read-only mode by default and only ask for wallet actions when the user explicitly chooses to connect or claim tokens.

The planned flow includes:

- wallet connection via wagmi / viem;
- Sepolia network support;
- token claim interaction using a standard ERC-20 claim interface;
- read-only defaults that do not force wallet prompts for the core app experience.

### Design system

The project includes a dedicated design-system section with modular component blocks for visual elements such as:

- color palette;
- typography;
- cards and containers;
- forms and interactions;
- navigation patterns;
- alerts and toasts;
- iconography and mood boards.

This helps maintain a consistent and reusable frontend language as the concept evolves.

## Tech stack

This project is built with a modern frontend stack:

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- HTML5 Canvas / WebGL and shader-driven visuals
- Lucide React icons
- wagmi v2 and viem for wallet/Web3 integration
- dark glassmorphism UI system

## Project structure

The repository is organized around a frontend app and design system structure:

- `src/app/` — routing and app entry points
- `src/components/dashboard/` — core dashboard UI, sidebar, chat, header, and treasure-room experience
- `src/components/design-system/` — reusable design system sections and layout
- `src/components/ui/` — shared low-level UI primitives
- `prompts/` — implementation prompts and product direction artifacts
- `.agents/skills/` — project-specific system instructions and reusable implementation guidance

## Design philosophy

The app is intentionally more than a utility dashboard. It is designed as a product concept that expresses the emotional and visual qualities of DeFi:

- high stakes;
- real-time decision-making;
- fluid value flows;
- precision under uncertainty;
- immersive interface design.

The visual language turns a technical domain into an experience that feels atmospheric and premium while still communicating core functionality.

## How to run

From the project root (`client` directory):

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Environment variables

If you enable the wallet and Sepolia token flow, the app expects values like:

```bash
NEXT_PUBLIC_SEPOLIA_RPC_URL=
NEXT_PUBLIC_CONTRACT_ADDRESS=
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=
```

These are used for wallet connectivity and blockchain interactions without exposing secret keys in the client code.

## Security and usage expectations

The project intentionally follows a read-only-first pattern:

- the main interface should work without wallet connection;
- wallet access is explicit and user-driven;
- token claim actions are gated behind intentional user actions;
- no unsolicited approvals or hidden transaction prompts are expected.

## Status

This project is best described as a concept-driven frontend prototype for a visual liquidity-pool product. It blends product storytelling, interactive motion, and Web3-ready architecture into a single polished experience.

While it is not a full production DeFi platform yet, it clearly demonstrates the intended direction: a high-fidelity simulation and dashboard experience that makes liquidity feel alive and understandable.
