## Goal
Reduce visual distraction from the two animated floating balls in `AnimatedBackground.tsx`.

## Approach
Transform the solid, glowing balls into soft ambient background orbs:

1. **Remove the solid ball fill and highlight** — eliminate the opaque center circle and the bright white specular highlight that make them look like foreground objects.
2. **Expand the glow radius** — make the radial gradient ~3-4x the ball radius so it reads as a large diffuse light bloom rather than a sharp circle.
3. **Drop opacity heavily** — reduce the main glow color from `rgba(..., 0.55-0.65)` down to `rgba(..., 0.12-0.18)` so the orbs barely register against the background.
4. **Add a heavy CSS/Canvas blur layer** — if possible, apply a `filter: blur()` equivalent via canvas or wrap the canvas in a CSS blur to soften edges further.
5. **Slow the movement slightly more** (optional) — reduce `vx`/`vy` values by another ~30% so the drift is even more ambient.

## Implementation
- Edit `src/components/AnimatedBackground.tsx`
- Adjust ball `color`, `glow` alpha values, and glow radius scaling
- Remove the solid arc + highlight drawing calls
- Optionally wrap the `<canvas>` in an additional CSS blur/filter layer via the parent `<div>`

## Acceptance
- The balls should feel like distant, soft background light blobs rather than interactive foreground objects.
- Content layered on top should no longer visually compete with the balls.