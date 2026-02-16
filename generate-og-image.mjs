// generate-og-image.mjs — Run with: node generate-og-image.mjs
// Creates a 1200x630 SVG OG image using sharp (if available) or saves as SVG

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#B8860B"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="30%" stop-color="#B8860B"/>
      <stop offset="70%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="transparent"/>
    </linearGradient>
    <radialGradient id="glow1" cx="75%" cy="25%" r="30%">
      <stop offset="0%" stop-color="rgba(184,134,11,0.18)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <radialGradient id="glow2" cx="25%" cy="75%" r="25%">
      <stop offset="0%" stop-color="rgba(245,158,11,0.12)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="#030303"/>
  
  <!-- Glows -->
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  
  <!-- Grid pattern -->
  <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
    <line x1="60" y1="0" x2="60" y2="630"/>
    <line x1="120" y1="0" x2="120" y2="630"/>
    <line x1="180" y1="0" x2="180" y2="630"/>
    <line x1="240" y1="0" x2="240" y2="630"/>
    <line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="360" y1="0" x2="360" y2="630"/>
    <line x1="420" y1="0" x2="420" y2="630"/>
    <line x1="480" y1="0" x2="480" y2="630"/>
    <line x1="540" y1="0" x2="540" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="660" y1="0" x2="660" y2="630"/>
    <line x1="720" y1="0" x2="720" y2="630"/>
    <line x1="780" y1="0" x2="780" y2="630"/>
    <line x1="840" y1="0" x2="840" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/>
    <line x1="960" y1="0" x2="960" y2="630"/>
    <line x1="1020" y1="0" x2="1020" y2="630"/>
    <line x1="1080" y1="0" x2="1080" y2="630"/>
    <line x1="1140" y1="0" x2="1140" y2="630"/>
    <line x1="0" y1="60" x2="1200" y2="60"/>
    <line x1="0" y1="120" x2="1200" y2="120"/>
    <line x1="0" y1="180" x2="1200" y2="180"/>
    <line x1="0" y1="240" x2="1200" y2="240"/>
    <line x1="0" y1="300" x2="1200" y2="300"/>
    <line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="0" y1="420" x2="1200" y2="420"/>
    <line x1="0" y1="480" x2="1200" y2="480"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
  </g>
  
  <!-- Company Name -->
  <text x="600" y="250" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="64" fill="#ffffff">Link Net360</text>
  
  <!-- Technologies with gold gradient -->
  <text x="600" y="310" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="48" fill="url(#gold)">Technologies</text>
  
  <!-- FZCO -->
  <text x="600" y="355" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="18" fill="rgba(255,255,255,0.5)" letter-spacing="6">— FZCO —</text>
  
  <!-- Gold accent line -->
  <line x1="350" y1="385" x2="850" y2="385" stroke="url(#line)" stroke-width="2"/>
  
  <!-- Tagline -->
  <text x="600" y="430" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="22" fill="#a1a1aa">Enterprise IT Solutions &amp; Infrastructure | Dubai, UAE</text>

  <!-- Bottom border accent -->
  <rect x="0" y="620" width="1200" height="10" fill="url(#gold)" opacity="0.6"/>
</svg>`;

// Save as SVG first (works everywhere)
const svgPath = join(__dirname, 'public', 'og-image.svg');
writeFileSync(svgPath, svg);
console.log('✅ Saved: public/og-image.svg');

// Try converting to PNG with sharp if available
try {
    const sharp = (await import('sharp')).default;
    const pngPath = join(__dirname, 'public', 'og-image.png');
    await sharp(Buffer.from(svg)).png().toFile(pngPath);
    console.log('✅ Saved: public/og-image.png');
} catch {
    console.log('ℹ️  sharp not installed — SVG saved. To convert to PNG:');
    console.log('   npm install sharp && node generate-og-image.mjs');
}
