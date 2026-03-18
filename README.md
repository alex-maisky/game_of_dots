# Game of Dots

A static-build-friendly single-page React application for a local two-player implementation of **Dots**. This phase includes the app scaffold, responsive Tailwind UI, configurable board rendering, local turn state, and clickable intersections.

## Tech stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Project structure

```text
src/
  components/
    GameBoard.tsx      # Board rendering and intersection click targets
    StatusPanel.tsx    # Current player, scores, status, and restart UI
  game/
    board.ts           # Core board constants and pure game-state helpers
  types/
    game.ts            # Reusable game and board type definitions
  App.tsx              # Top-level layout and state wiring
  main.tsx             # React entry point
  index.css            # Tailwind imports and global styles
