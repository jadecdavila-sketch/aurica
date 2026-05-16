// Sphere imagery (dorodango) — paired to stages by index.
// Files live in /public/spheres/ so they're served as cacheable assets.
export const sphereImages: string[] = Array.from(
  { length: 10 },
  (_, i) => `/spheres/sphere-${String(i + 1).padStart(2, '0')}.png`,
);
