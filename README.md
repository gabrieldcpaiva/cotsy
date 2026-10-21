# COTSY // The Vale Archive — Atmospheric Spatial Luxury Manifest

A production-grade single-page architectural manifest for **COTSY**, a seven-chamber monastic countryside sanctuary in the Gloucestershire Wold (`51°49'14.2"N · 001°52'08.9"W`).

## Target Artifacts
- **`design_system.json`** (`/design_system.json` & `/public/design_system.json`): Complete token specification for diurnal color substrates, typographic weight ceilings, negative-space reservation laws, and hardware-accelerated motion curves.
- **`index.astro`** (`/src/pages/index.astro` & `/index.astro`): Static Site Generated (SSG) luxury manifest with partial hydration islands (`AtmosphereChronographIsland`, `ChambersLedgerIsland`, `ResidencyDossierIsland`).

## Architectural & Aesthetic Laws
1. **Atmospheric Spatial Luxury (≥50% Negative Space Mandate)**:
   - Structured on an asymmetric 12-column architectural datum where at least 6 of 12 columns in every horizontal slice remain unencumbered limestone (`#F3EFE6`) or bog-oak (`#12110E`) canvas, verified in real time by the live DOM bounding-box Spatial Vacancy Telemetry HUD (`62%–68%` average vacancy).
   - Procedural SVG `feTurbulence` (`baseFrequency="0.82"`, `numOctaves="4"`) lime-plaster and unbleached Belgian flax texture substrate.
2. **Strict Motion Physics (`cubic-bezier(0.16, 1, 0.3, 1)`)**:
   - All CSS transitions, curtain reveals, SVG architectural section morphs, and RAF-synchronized multi-layer Y-axis parallax transforms (`translate3d(0, var(--parallax-y), 0)`) are governed exclusively by `cubic-bezier(0.16, 1, 0.3, 1)`.
3. **High-Contrast Typographic Substrate**:
   - **Editorial Display Headlines**: `Cormorant Garamond` (300 Light & Italic) at monumental scale (`clamp(3.4rem, 8.8vw, 9.25rem)`).
   - **Body & Technical Metadata**: `IBM Plex Mono` strictly capped at `font-weight: 300` (200 Thin & 300 Light only).

## Development & Build
```bash
npm install
npm run dev     # Starts live preview server on 0.0.0.0:4321
npm run build   # Generates static production artifact in ./dist
```
