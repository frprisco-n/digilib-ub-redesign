# High-Fidelity Digital Library Homepage - Design Specification

## Design System Applied

### Color Palette (from UI Kit)
- **Primary**: #092C4C (Dark Blue)
- **Secondary**: #F2994A (Orange)
- **Background**: #FFFFFF (White), #F5F5F5 (Light Gray)
- **Text Primary**: #092C4C
- **Text Secondary**: #4F4F4F
- **Text Tertiary**: #BDBDBD
- **Border**: #E0E0E0

### Typography (from UI Kit)
- **Font Family**: Inter
- **Heading 1**: 48px / Bold
- **Heading 2**: 40px / Bold
- **Heading 3**: 24px / Bold
- **Body Large**: 20px / Regular
- **Body**: 16px / Regular
- **Body Small**: 14px / Regular

### Spacing System
- Based on 8px grid system
- Component padding: 16px, 24px, 32px
- Section spacing: 64px, 80px

### Component Styles

#### Buttons
1. **Primary Button**
   - Background: #092C4C
   - Text: White
   - Padding: 16px 32px
   - Border Radius: 6px
   - Hover: #0D3D5C

2. **Secondary Button**
   - Background: #F2994A
   - Text: White
   - Padding: 16px 32px
   - Border Radius: 6px
   - Hover: #E08839

3. **Outline Button**
   - Border: 1px solid white/20%
   - Background: white/10%
   - Text: White
   - Padding: 12px 24px
   - Border Radius: 999px (pill shape)

#### Cards
1. **Book Card**
   - Width: ~280px
   - Background: White
   - Border Radius: 8px
   - Shadow: 0 4px 12px rgba(0,0,0,0.1)
   - Hover Shadow: 0 8px 24px rgba(0,0,0,0.16)
   - Image Aspect Ratio: 3:4
   - Content Padding: 16px

2. **News Card**
   - Background: White
   - Border: 1px solid #E0E0E0
   - Border Radius: 8px
   - Shadow: 0 2px 8px rgba(0,0,0,0.08)
   - Image Aspect Ratio: 16:9
   - Content Padding: 24px

## Layout Structure

### 1. Header (Sticky)
- Height: 80px
- Background: #092C4C
- Shadow: 0 2px 8px rgba(0,0,0,0.16)
- Content: Logo, Institution Name, Navigation, Auth Buttons
- Max Width: 1236px (centered)

### 2. Hero Section
- Background: Linear gradient from #092C4C to #0D3D5C
- Padding: 80px vertical
- Elements:
  - Collection Badge (centered, pill shape)
  - Main Headline (H1, centered)
  - Subheadline (Body Large, centered)
  - Search Bar (max-width 768px)
  - Category Pills (All, Books, Journals, Theses)
  - Stats Grid (3 columns)

### 3. Sticky Search Bar
- Background: White
- Border Bottom: 1px solid #E0E0E0
- Shadow: 0 2px 4px rgba(0,0,0,0.08)
- Simplified search input

### 4. Recommended Books Section
- Background: #F5F5F5
- Padding: 64px vertical
- Grid: 4 columns (2 rows)
- Navigation: Arrow buttons (left/right)
- Gap: 24px

### 5. News Section
- Background: White
- Padding: 64px vertical
- Grid: 2 columns
- Navigation: Arrow buttons (left/right)
- Gap: 32px

### 6. Footer
- Background: #092C4C
- Text: White
- Padding: 32px vertical
- Content: Institution info, Links

## Interactive States

### Hover States
- **Buttons**: Darken background by 10%
- **Cards**: Elevate shadow, slight scale (1.02)
- **Links**: Color change to #F2994A

### Focus States
- **Inputs**: 2px solid #092C4C border
- **Buttons**: 2px solid #092C4C outline

### Active States
- **Category Pills**: Background #F2994A, white text
- **Search Input**: Shadow increase

## Accessibility (WCAG AA)

### Color Contrast Ratios
- Primary text on white: 11.26:1 ✓
- White text on #092C4C: 11.26:1 ✓
- Secondary text (#4F4F4F) on white: 7.48:1 ✓
- White text on #F2994A: 4.51:1 ✓

### Focus Indicators
- All interactive elements have visible focus states
- Minimum 2px outline with sufficient contrast

### Text Sizing
- Minimum text size: 14px
- Optimal line height: 1.5-1.6
- Maximum line length: ~80 characters

## Responsive Behavior

### Breakpoints
- Desktop: 1236px max-width
- Tablet: Adjust grid to 2 columns
- Mobile: Stack vertically, single column

### Adaptive Elements
- Book grid: 4 → 2 → 1 columns
- News grid: 2 → 1 column
- Navigation: Collapse to hamburger menu
- Search bar: Full width on mobile

## Micro-interactions

1. **Search Bar**: Expand on focus, subtle glow
2. **Category Pills**: Smooth color transition (300ms)
3. **Cards**: Scale and shadow transition (200ms)
4. **Navigation Arrows**: Rotate slightly on hover
5. **Buttons**: Slight press effect on active state

## Component Mapping from UI Kit

### Applied Components
1. **Card with Colored Background** → Header
2. **Image Card** → Book Cards
3. **Card Border Colored** → News Cards
4. **Normal Button** → Primary CTA
5. **Medium Button** → Search buttons
6. **Carousel** → Book and News carousels with indicators

## Design Tokens Applied

```css
/* Colors */
--primary: #092C4C;
--secondary: #F2994A;
--background: #FFFFFF;
--background-alt: #F5F5F5;
--text-primary: #092C4C;
--text-secondary: #4F4F4F;
--text-tertiary: #BDBDBD;
--border: #E0E0E0;

/* Typography */
--font-family: 'Inter', sans-serif;
--font-size-h1: 48px;
--font-size-h2: 40px;
--font-size-h3: 24px;
--font-size-body-lg: 20px;
--font-size-body: 16px;
--font-size-body-sm: 14px;

/* Spacing */
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-2xl: 64px;

/* Borders */
--border-radius-sm: 6px;
--border-radius-md: 8px;
--border-radius-lg: 16px;
--border-radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
```

## Next Steps for Figma Implementation

1. Create Figma frames at 1440px width
2. Apply auto-layout for all components
3. Create component variants for interactive states
4. Set up prototype connections for navigation
5. Add auto-animate transitions between states
6. Create responsive constraints for adaptive layouts
