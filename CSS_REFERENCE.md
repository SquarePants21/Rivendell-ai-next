# Rivendell AI - CSS Classes & Design Tokens Reference

## Color Palette

### Primary Rivendell Colors
```css
--color-primary: #0a5c42;      /* Forest Green */
--color-secondary: #1a3a2e;    /* Deep Forest */
--color-accent: #c49c6c;       /* Elven Gold */
--color-dark: #0f1b18;         /* Nearly Black */
--color-light: #f5f1e8;        /* Cream */
```

### Secondary Rayluxeo Colors
```css
--color-brand-blue: #007BFF;   /* Professional Blue */
--color-dark-bg: #05050A;      /* Deep Black */
--color-dark-card: #0E0E13;    /* Dark Gray */
--color-light-bg: #F5F5F7;     /* Light Gray */
--color-light-card: #FFFFFF;   /* Pure White */
```

## Typography

### Font Families
```css
.font-serif          /* Georgia, Garamond - Headings */
.font-sans           /* Inter - Body text */
.font-grotesk        /* Space Grotesk - Modern headings */
.elven-text          /* Serif + letter-spacing */
```

### Text Utilities
```css
.gradient-text       /* Gold gradient text */
.section-title       /* 4xl-5xl bold serif */
```

## Buttons

### Rivendell Style (Green/Gold Theme)
```css
.btn-primary
  /* 
    Styling: Solid green background
    Text: Light color
    Padding: px-8 py-3
    Hover: Darker green background
    Radius: lg
  */

.btn-secondary
  /* 
    Styling: Transparent with green border
    Text: Green text
    Padding: px-8 py-3
    Hover: Fill with green background
    Radius: lg
  */
```

### Modern Style (Blue Theme)
```css
.btn-animated
  /* 
    Styling: Base animated button
    Padding: px-6 py-3
    Font: Semibold
    Radius: full
    Shadow: lg shadow-brand-blue/30
    Transitions: 300ms duration
  */

.btn-anim-primary
  /* 
    Styling: Blue background
    Hover: Darker blue
    Text: White
    Used for: Main CTAs
  */

.btn-anim-secondary
  /* 
    Styling: Transparent border
    Border: Gray (dark mode: darker)
    Hover: Light gray background
    Text: Gray (dark mode: light gray)
    Used for: Secondary actions
  */
```

## Cards & Containers

### Rivendell Card
```css
.card
  /* 
    Background: secondary/50 with blur
    Border: primary/20
    Padding: p-6
    Radius: xl
    Hover: border-primary/50
    Use: Content containers, services
  */
```

### Modern Glass Card
```css
.modern-card
  /* 
    Background: white/70 dark:dark-card/70
    Backdrop: blur-xl (24px)
    Border: gray-200/50 dark:gray-700/50
    Radius: 3xl (rounded-3xl)
    Use: Premium containers
  */

.glass-nav
  /* 
    Background: white/30 dark:gray-900/30
    Backdrop: blur-2xl
    Border: white/20 dark:gray-700/20
    Use: Navigation, top bars
  */

.glass-placeholder
  /* 
    Background: white/10 dark:gray-900/10
    Backdrop: blur-xl
    Border: white/20 dark:gray-700/20
    Radius: 3xl
    Use: Loading states, placeholders
  */
```

### Service Card
```css
.service-card
  /* 
    Inherits: modern-card
    Padding: p-8
    Hover: border-brand-blue/50
    Transitions: 300ms
    Use: Service showcases
  */

.service-card-arrow
  /* 
    Icon animation on parent hover
    Translate: translate-x-2 translate-y-2
    Transitions: 300ms
  */
```

## Form Elements

### Input Styles
```css
.input-glow
  /* 
    Animation: 3s ease-in-out infinite
    Box-shadow: Changes from 10px to 20px
    Border: Glows from 0.4 to 0.8 opacity
    Use: Active input focus states
  */
```

### Select/Dropdown
```css
.select-button
  /* 
    Styling: Flexible dropdown trigger
    Padding: px-4 py-3
    Border: 1px gray
    Radius: xl
    Focus: ring-2 brand-blue
    Display: flex justify-between
  */

.select-dropdown
  /* 
    Visibility: hidden initially
    Position: absolute top-full
    Background: white/70 dark:dark-card/70
    Backdrop: blur-xl
    Animations: Smooth appear/disappear
  */

.select-option
  /* 
    Padding: p-3
    Hover: bg-brand-blue/10
    Radius: lg
    Cursor: pointer
    Use: Dropdown menu items
  */
```

## Modal & Popup

### Appointment Modal
```css
.appointment-modal
  /* 
    Position: fixed inset-0 (full screen)
    Display: flex center
    Padding: p-4
    Z-index: z-50
  */

.appointment-modal-overlay
  /* 
    Position: fixed inset-0
    Background: black/50
    Backdrop: blur-sm
    Use: Dim background
  */

.appointment-modal-content
  /* 
    Background: white dark:dark-bg
    Border-radius: 3xl
    Shadow: shadow-2xl
    Max-width: 2xl
    Max-height: 90vh
    Padding: p-8
    Overflow: auto
  */

.appointment-modal-header
  /* 
    Display: flex justify-between
    Margin-bottom: mb-8
    Border-bottom: gray-200 dark:gray-700
    Padding: pb-6
  */
```

### Calendar Styles
```css
.calendar-popup
  /* Position: absolute below date input */
.calendar-header        /* Month/year with nav buttons */
.calendar-nav-btn       /* Previous/next month buttons */
.calendar-weekdays      /* Week header (Sun-Sat) */
.calendar-days          /* Grid of calendar dates */
.calendar-day           /* Individual date button */
.calendar-day.today     /* Highlighted current date */
.calendar-day.other-month /* Grayed out prev/next month */
```

### Time Picker Styles
```css
.time-popup             /* Container */
.time-picker-header     /* Hour : Minute : Period */
.time-display           /* Display section */
.time-section           /* Individual time column */
.time-label             /* "Hour", "Minute", "Period" */
.time-scroll            /* Scrollable options area */
.time-options           /* Option list */
.time-option            /* Individual time option */
.time-option.selected   /* Highlighted selection */
.time-separator         /* ":" separator */
.time-picker-footer     /* Cancel/Confirm buttons */
.time-btn               /* Button styling */
.time-btn-primary       /* Blue confirm button */
.time-btn-secondary     /* Gray cancel button */
```

### Universal Popup
```css
.universal-popup
  /* 
    Position: fixed fullscreen
    Display: flex center
    Visibility: hidden (toggled with .hidden)
  */

.universal-popup-overlay  /* Dark background */
.universal-popup-content  /* Modal content box */
.popup-icon-wrapper       /* Icon container */
.popup-icon               /* Success/error icon */
.popup-title              /* Message title */
.popup-message            /* Message text */
.popup-buttons            /* Button container */
.popup-btn                /* Base button */
.popup-btn-primary        /* Blue button */
.popup-btn-secondary      /* Gray button */
```

## Floating Buttons

```css
.floating-whatsapp-btn
  /* 
    Position: fixed bottom-8 right-8
    Size: w-14 h-14 (56px)
    Background: green-500
    Radius: full
    Shadow: lg hover:shadow-xl
    Hover: scale-110
    Z-index: z-40
  */

.floating-appointment-btn
  /* 
    Position: fixed bottom-24 right-8 (above WhatsApp)
    Size: w-14 h-14
    Background: brand-blue
    Animation: animate-btn-pulse
    Radius: full
    Hover: scale-110
    Z-index: z-40
  */
```

## Navigation

```css
.glass-nav           /* Navigation bar glass effect */
```

## Special Effects

### Animations
```css
.fade-in             /* 0.5s fade entrance */
.fade-in-up          /* 0.6s fade + slide up */
.animate-fade-in     /* 0.6s fade animation */
.animate-slide-in-left  /* Slide from left */
.animate-slide-in-right /* Slide from right */
.animate-marquee     /* 40s scrolling animation */
.animate-marquee-reverse /* 40s reverse scroll */
.animate-float       /* 10s floating motion */
.animate-play-pulse  /* 2s pulse effect */
.animate-spin        /* 4s rotation */
.animate-input-glow  /* 3s glow pulsing */
.animate-btn-pulse   /* 2s button pulse */
.animate-slide-down  /* 0.3s slide down */
.animate-slide-up    /* 0.3s slide up */
```

### Background Effects
```css
.top-bar-animated-bg
  /* 
    Background: Gradient animation
    Animation: marquee (scrolling)
    Use: Top notification bar
  */

.hero-bg-abstract
  /* 
    Position: absolute inset-0
    Opacity: opacity-20
    Use: Hero section background
  */

.video-glow-abstract
  /* 
    Position: relative
    Pseudo-element glow effect
    Use: Video containers
  */
```

## Utility Classes

### Display & Visibility
```css
.reveal              /* opacity-0 initially */
.reveal.visible      /* opacity-100 when visible */
.fade-in             /* opacity 0 to 1 */
.fade-out            /* opacity 1 to 0 */
```

### Interactive
```css
.cursor-dot          /* Custom cursor dot */
.cursor-outline      /* Custom cursor outline */
.group-hover:       /* Tailwind group hover utilities */
.hover:\(animation\) /* Hover state animations */
```

### Text Effects
```css
.marquee-content     /* Scrolling text container */
.marquee-content-reverse  /* Reverse scroll */
.project-item        /* Portfolio item */
.product-card-link   /* Product card link */
.mobile-link         /* Mobile navigation link */
.client-logo-glow    /* Client logo with glow */
```

## Responsive Design

### Breakpoints (Tailwind)
```css
sm:   640px    /* Small devices */
md:   768px    /* Tablets */
lg:  1024px    /* Desktop */
xl:  1280px    /* Wide desktop */
2xl: 1536px    /* Ultra-wide */
```

### Mobile-First Approach
```css
.hidden md:flex      /* Hidden on mobile, visible on desktop */
.md:hidden           /* Visible on mobile, hidden on desktop */
.grid-cols-1 md:grid-cols-3  /* 1 column mobile, 3 on desktop */
```

## Dark Mode

All components support dark mode with Tailwind's `dark:` prefix:

```css
.dark:bg-dark-card        /* Dark background */
.dark:text-white          /* Light text in dark mode */
.dark:border-gray-700     /* Dark borders */
.dark:hover:bg-gray-800   /* Dark hover states */
```

## Z-Index Scale

```css
z-10  /* Float animations */
z-20  /* Modals, popovers */
z-40  /* Floating buttons */
z-50  /* Main modals, navbar */
z-[9999]  /* Loading screen */
z-[10000] /* Top bar overlay */
```

## Shadow Scale

```css
shadow-lg shadow-brand-blue/30    /* Primary glow */
shadow-lg shadow-black/5          /* Subtle shadow */
shadow-2xl                        /* Deep shadow */
hover:shadow-xl                   /* Interactive shadow */
```

## Custom Properties

Ready for CSS Variables expansion:
```css
:root {
  /* Colors can be extracted to variables */
  /* Spacing values consistent with Tailwind */
  /* Animation timings standardized */
}
```

## Usage Examples

### Creating a New Service Card
```html
<div class="service-card group">
  <div class="text-5xl mb-4 transition-transform group-hover:scale-110">
    🎨
  </div>
  <h3 class="text-2xl font-bold text-accent mb-3 elven-text">
    Service Name
  </h3>
  <p class="text-light/70 mb-4">Description</p>
  <div class="flex items-center text-accent service-card-arrow">
    <span>Learn more →</span>
  </div>
</div>
```

### Creating a Button
```html
<!-- Rivendell Style -->
<button class="btn-primary">Action</button>

<!-- Modern Blue Style -->
<button class="btn-animated btn-anim-primary">Action</button>

<!-- Secondary -->
<button class="btn-anim-secondary">Action</button>
```

### Creating a Modal
```html
<div class="appointment-modal-content">
  <div class="appointment-modal-header">
    <h2 class="appointment-modal-title">Title</h2>
    <button class="appointment-modal-close">×</button>
  </div>
  <!-- Content -->
</div>
```

---

**Last Updated**: January 16, 2026
**Design System**: Rivendell AI + Rayluxeo Hybrid
**Status**: ✅ Complete & Ready to Use
