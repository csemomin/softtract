# Softtract - Next.js Version

This is the Next.js version of the Softtract website, converted from the original static HTML version.

## Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **TypeScript Support**: Full TypeScript implementation for better development experience
- **Responsive Design**: Maintains the original responsive design with Bootstrap
- **SEO Optimized**: Includes meta tags, Open Graph, and structured data
- **Performance**: Optimized images and components for better performance
- **Interactive Elements**: Smooth scrolling, counters, and animations
- **Contact Form**: Integrated contact form functionality

## Tech Stack

- **Next.js 14**: React framework with App Router
- **React 18**: Latest React features
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Bootstrap**: Original styling framework
- **Framer Motion**: Animation library
- **React CountUp**: Animated counters
- **React Intersection Observer**: Scroll-based animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Intro.tsx          # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services section
│   ├── WhyUs.tsx          # Why choose us section
│   ├── Portfolio.tsx      # Portfolio section
│   ├── Testimonials.tsx   # Testimonials section
│   ├── Team.tsx           # Team section
│   ├── Clients.tsx        # Clients section
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer component
│   └── BackToTop.tsx      # Back to top button
├── allfiles/              # Original static assets
│   ├── css/               # Original CSS files
│   ├── js/                # Original JavaScript files
│   ├── img/               # Images and assets
│   └── lib/               # Third-party libraries
├── public/                # Public assets
└── package.json           # Dependencies and scripts
```

## Key Features

### 1. Responsive Navigation
- Fixed header with smooth scrolling
- Mobile-friendly navigation menu
- Active section highlighting

### 2. Interactive Sections
- **About**: Company information with animated icons
- **Services**: Service offerings with hover effects
- **Portfolio**: Project showcase with lightbox
- **Testimonials**: Client testimonials carousel
- **Contact**: Contact information with links

### 3. Performance Optimizations
- Next.js Image component for optimized images
- Lazy loading for better performance
- Intersection Observer for scroll animations
- Optimized bundle size

### 4. SEO Features
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Google Analytics integration
- Sitemap generation

## Build and Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

### Deploy to Vercel
The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and deploy

## Customization

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for Tailwind customization
- Original CSS files are preserved in `allfiles/css/`

### Content
- Update component files in `components/` directory
- Modify data arrays in each component
- Update images in `allfiles/img/`

### Configuration
- Update `next.config.js` for Next.js configuration
- Modify `app/layout.tsx` for meta tags and scripts
- Update `package.json` for dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is based on the original Softtract website design and converted to Next.js for modern web development practices.

## Support

For any issues or questions, please refer to the original project documentation or contact the development team. 