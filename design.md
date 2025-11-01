# Aprian Ditia Website Design Language

## Design Philosophy

### Color Palette
- **Primary Background**: Deep matte black (#0a0a0a) - represents the void of market uncertainty
- **Electric Blue**: #00ffff - symbolizes precision and data clarity
- **Neon Purple**: #b026ff - represents innovation and cutting-edge technology
- **Cyan Glow**: #40e0d0 - subtle accent for interactive elements
- **Text Colors**: Pure white (#ffffff) for headings, light gray (#e0e0e0) for body text

### Typography
- **Display Font**: Orbitron - futuristic, geometric, perfect for headings and tech aesthetic
- **Body Font**: Inter - clean, readable, modern sans-serif for optimal legibility
- **Accent Font**: Rajdhani - condensed, technical feel for labels and data points

### Visual Language
- **Geometric Precision**: Sharp angles, clean lines, grid-based layouts
- **Neon Glow Effects**: Subtle but impactful, never overwhelming
- **Particle Systems**: Represents market data flow and trading activity
- **Holographic Elements**: Semi-transparent overlays with gradient borders
- **Glitch Aesthetics**: Digital distortion effects for emphasis and energy

## Visual Effects Implementation

### Background Effects
1. **Primary**: Vanta.js animated particle field with electric blue connections
2. **Secondary**: Animated grid pattern with pulsing intersections
3. **Fallback**: CSS gradient animation with subtle movement

### Text Effects
1. **Typewriter Animation**: Typed.js for hero tagline with blinking cursor
2. **Glitch Text**: CSS keyframes for digital distortion on hover
3. **Neon Glow**: Text-shadow animation with color cycling
4. **Split-by-letter**: Staggered reveal animations using Splitting.js

### Interactive Effects
1. **Hover Glow**: 3D tilt with expanding neon border
2. **Particle Burst**: Canvas-based explosion on skill card hover
3. **Cursor Trail**: Neon particle system following mouse movement
4. **Scroll Parallax**: Subtle depth effects using GSAP

### Animation Principles
- **Easing**: Custom cubic-bezier for smooth, natural motion
- **Duration**: 300-800ms for most transitions, respecting user patience
- **Stagger**: 50-100ms delays between elements for orchestrated reveals
- **Performance**: GPU-accelerated transforms, minimal repaints

### Layout Structure
- **Grid System**: 12-column responsive grid with consistent spacing
- **Vertical Rhythm**: 24px baseline grid for text alignment
- **White Space**: Generous padding to let animations breathe
- **Breakpoints**: Mobile-first approach with fluid scaling

### Component Styling
- **Cards**: Semi-transparent backgrounds with neon borders
- **Buttons**: Minimal design with hover glow states
- **Icons**: Custom SVG with animated stroke effects
- **Images**: Subtle glitch overlay on hover for avatar

### Accessibility
- **Contrast Ratios**: Minimum 4.5:1 for all text combinations
- **Motion Sensitivity**: Respect prefers-reduced-motion media query
- **Focus States**: Clear, high-contrast focus indicators
- **Screen Readers**: Proper ARIA labels and semantic HTML