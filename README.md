# Rosagna Hernandez Studio Website

A fully functional, animated, and eye-catching website for Rosagna Hernandez Studio - featuring precision-crafted garments and made-to-measure excellence.

## Features

- **Fully Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Interactive Components** - Functional buttons, forms, and navigation
- **Modern Architecture** - Built with React, TypeScript, and Tailwind CSS
- **Professional Layout** - Clean, elegant design reflecting luxury craftsmanship
- **Working Contact Form** - Complete form validation and submission handling
- **Portfolio Gallery** - Interactive portfolio with filtering and modal views
- **Mobile-First Approach** - Optimized mobile navigation and user experience

## Technology Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── Layout.tsx          # Main layout with navigation
│   └── pages/
│       ├── HomePage.tsx        # Landing page
│       ├── AboutPage.tsx       # About the atelier
│       ├── PortfolioPage.tsx   # Portfolio gallery
│       ├── BridalPage.tsx      # Bridal services
│       ├── MadeToMeasurePage.tsx # Custom services
│       ├── JournalPage.tsx     # Blog/journal entries
│       ├── StudioPage.tsx      # Studio information
│       └── ContactPage.tsx     # Contact form
├── styles/
│   └── index.css              # Global styles and Tailwind
├── App.tsx                    # Main app component
└── main.tsx                   # Application entry point
```

## Key Features Implemented

### Navigation
- Responsive navigation with mobile hamburger menu
- Smooth scrolling between sections
- Active page highlighting
- Animated mobile menu transitions

### Homepage
- Hero section with call-to-action buttons
- Featured sections with hover effects
- Smooth scroll animations
- Professional typography and spacing

### Portfolio
- Interactive filtering system
- Modal gallery with detailed views
- Smooth animations and transitions
- Responsive grid layout

### Contact Form
- Complete form validation
- Success/error state handling
- Professional styling
- Responsive layout

### Animations
- Page load animations
- Hover effects on interactive elements
- Smooth transitions between states
- Mobile-optimized animations

## Customization

### Colors
The color palette can be customized in `tailwind.config.js`:
- Primary: Amber (#b45309)
- Neutral: Various shades of gray
- Background: Off-white (#fafafa)

### Typography
Font styling is managed through Tailwind classes with custom tracking and weights for a refined appearance.

### Animations
Custom animations are defined in both `tailwind.config.js` and `src/styles/index.css` for maximum flexibility.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with tree shaking
- Lazy loading for better performance
- Efficient React rendering with proper memoization
- Responsive image handling

## Deployment

The built website is completely static and can be deployed to any hosting service:

1. Run `npm run build`
2. Upload the `dist/` folder contents to your web server
3. Configure your server to serve `index.html` for all routes (for React Router)

Popular deployment platforms:
- Vercel
- Netlify
- GitHub Pages
- AWS S3/CloudFront

## License

This project is proprietary and confidential. All rights reserved.