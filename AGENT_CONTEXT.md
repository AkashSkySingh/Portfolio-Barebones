# Agentic Context — Portfolio

Condensed, agent-oriented project context derived from a full codebase review. Intended for consumption by AI coding agents working in this repository.

## Project Snapshot

Personal portfolio website for Akashpreet Singh. Built with React 19 + TypeScript + StyleX, bundled via Vite+ (Vite + Rolldown + Vitest + Oxc + StyleX toolchain).

## Tech Stack

- **Runtime**: React 19 (`react`, `react-dom`), `@vitejs/plugin-react` (React Compiler via `babel-plugin-react-compiler`)
- **Styling**: StyleX 0.19 (`@stylexjs/stylex`, `@stylexjs/unplugin`, `@stylexjs/babel-plugin`, `@stylexjs/postcss-plugin`, `@stylexjs/shared-ui`)
- **Language**: TypeScript ~6.0 (strict; `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`)
- **Tooling**: Vite+ (`@voidzero-dev/vite-plus-core@1.3.0`), Oxc (lint/format), Vitest

## Commands

- `vp run dev` — dev server at http://localhost:5173
- `vp run build` — runs `tsc && vp build`
- `vp run preview` — preview production build
- `vp check` — format + lint + type check
- `vp test` — run tests

## Architecture

- **Entry**: `src/main.tsx` → `src/App.tsx`
- **State**: React Context at `src/components/AppContext/AppContext.ts` — holds theme (`system` / `light` / `dark`), `navToggle`, resume / navigation / labels / projects data, and theme/nav setters
- **Theme flow**: `App` owns theme state; toggles via context setters; StyleX themes (`system` / `light` / `dark`) applied through `stylex.createTheme`
- **Navigation**: fixed `NavigationBar` at top; slide-in `NavigationMenu` controlled by `navToggle` (auto-open on desktop >1080px, toggle via ☰/Esc)

## Directory Layout

- `src/App.tsx` — root composition + global StyleX styles (container / content / body / navMenu / menu states)
- `src/components/` — feature folders, each with colocated `index.ts` barrel
- `src/database/JSON/` — typed data modules: `resume.ts`, `navigation.ts`, `projects.ts`, `labels/label.ts`
- `src/assets/` — SVG icons; `public/` — `logo.svg`, `github.svg`
- `shared-ui/` — local pnpm workspace package `@stylexjs/shared-ui`: design tokens (`tokens.stylex.ts`), themes (`styling/themes.ts`), font styles (`styling/styles.tsx`), `Button` (`components/button.tsx`)

## Conventions & Gotchas

- All styling via StyleX: `stylex.create()`, `stylex.props()`, design tokens from shared-ui; responsive breakpoints via `designBreakpoints` constants
- React Compiler enabled via `@vitejs/plugin-react`
- `tsconfig.json` currently only includes `vite.config.ts` (build runs `tsc` before `vp build`)
- `HeroImageContact` component exists but is not currently referenced in `App.tsx`
- `src/database/JSON/navigation/navigation.json` appears legacy relative to `navigation.ts`

## Environment

- `.env`, `.env.local`, `.env.example`; `VITE_ENABLE_*` feature flags; `VP_*` Vite+ runtime/package-manager variables
