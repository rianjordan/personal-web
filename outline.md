# Aprian Ditia Website Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main HTML file
├── main.js                 # Core JavaScript functionality
├── resources/              # Assets folder
│   ├── hero-bg.jpg        # Generated hero background
│   ├── avatar.jpg         # Generated avatar silhouette
│   ├── crypto-icons/      # Crypto currency icons
│   └── trading-bg.jpg     # Trading chart background
├── interaction.md          # Interaction design document
├── design.md              # Visual design guide
└── outline.md             # This file
```

## Page Sections

### 1. Hero Section
- **Purpose**: Immediate impact and introduction
- **Content**: 
  - Animated particle background (Vanta.js)
  - Large name "Aprian Ditia" with neon glow
  - Subtitle "Crypto Trader & Market Scalper"
  - Typewriter tagline animation
  - Scroll down indicator with pulse
- **Animations**: Typewriter, glow pulse, particle field

### 2. About Section
- **Purpose**: Brief personal introduction
- **Content**:
  - Short bio paragraph (fade-in)
  - Avatar silhouette with neon border
  - Animated trading chart background
- **Animations**: Parallax scroll, avatar glow on hover

### 3. Skills Section
- **Purpose**: Showcase trading expertise
- **Content**:
  - Circular layout of skill cards
  - Crypto icons (BTC, ETH, BNB) with rotation
  - Skill labels with hover effects
- **Animations**: Card scale/fade, icon rotation, particle burst

### 4. Vision Section
- **Purpose**: Inspirational quote and philosophy
- **Content**:
  - Quote: "Discipline turns volatility into profit."
  - Holographic text effects
  - Glowing line dividers
- **Animations**: Glitch text, digital noise, glow pulse

### 5. Connect Section
- **Purpose**: Social media links
- **Content**:
  - Telegram, Twitter/X, GitHub icons
  - Hover glow effects
  - Floating background elements
- **Animations**: Icon pulse, connecting lines, slide-up

### 6. Footer
- **Purpose**: Copyright and attribution
- **Content**:
  - "© 2025 Aprian Ditia — Built on IPFS"
  - Subtle fade-in animation
- **Animations**: Basic fade from below

## Technical Implementation

### Core Libraries
1. **Tailwind CSS** - Utility-first styling
2. **GSAP** - Scroll animations and timeline control
3. **Vanta.js** - 3D particle background
4. **Typed.js** - Typewriter text effects
5. **Splitting.js** - Text animation utilities

### Animation Timeline
1. **Page Load**: Hero elements animate in sequence
2. **Scroll Events**: Section reveals trigger GSAP ScrollTrigger
3. **Hover States**: CSS transforms with JavaScript enhancements
4. **Background**: Continuous particle animation loop

### Responsive Design
- **Mobile**: Single column, smaller particles
- **Tablet**: Two-column layout, medium effects
- **Desktop**: Full layout, maximum visual impact

### Performance Optimization
- **Lazy Loading**: Images load as needed
- **GPU Acceleration**: Transform-based animations
- **Reduced Motion**: Respect user preferences
- **IPFS Ready**: All assets self-contained

## Content Strategy

### Text Content
- **Concise**: Short, impactful sentences
- **Technical**: Trading terminology for authenticity
- **Futuristic**: Language that matches the aesthetic

### Visual Hierarchy
1. **Primary**: Name and main tagline
2. **Secondary**: Section headings and quotes
3. **Tertiary**: Body text and descriptions
4. **Accent**: Interactive elements and glows

### Color Usage
- **Background**: Consistent dark theme throughout
- **Accents**: Electric blue for data, purple for innovation
- **Text**: High contrast white/gray for readability
- **Glows**: Subtle cyan for interactive feedback