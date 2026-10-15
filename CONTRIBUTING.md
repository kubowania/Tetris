# Contributing to Tetris

Thank you for wanting to contribute to this JavaScript Tetris game! Contributions are welcome.

## Getting Started

1. **Fork** this repository
2. **Clone** your fork: `git clone https://github.com/YOUR-USERNAME/Tetris.git`
3. Open `index.html` in your browser to play and test

## Development Setup

No build tools required! This is a vanilla HTML/CSS/JavaScript project.

```bash
# Simply open in browser
open index.html

# Or use a local server
npx serve .
```

## How to Contribute

### What We Welcome

- **New features** — Ghost piece preview, hold piece, wall kicks, T-spin detection
- **Visual improvements** — Better animations, particle effects, themes
- **Sound effects** — Background music, line clear sounds, game over sound
- **Scoring system** — Combo multipliers, level progression, high score persistence
- **Mobile support** — Touch controls, responsive layout
- **Bug fixes** — Piece rotation edge cases, collision detection issues
- **Accessibility** — Keyboard shortcuts display, color-blind friendly themes

## Pull Request Process

1. Create a branch: `git checkout -b feat/your-feature`
2. Test gameplay thoroughly — rotation, line clearing, game over
3. Ensure the game still works by opening `index.html`
4. Include a **GIF or screenshot** for visual changes
5. Submit a PR with a clear description

### Commit Format

- `feat: add ghost piece preview`
- `fix: correct T-piece rotation near walls`
- `style: add neon theme option`

## Code Style

- Vanilla JavaScript only — no frameworks
- Keep game logic separated from rendering
- Use `requestAnimationFrame` for smooth animations
- Comment complex game mechanics (rotation matrices, collision checks)

---

Happy stacking! 🟦🟨🟩🟥