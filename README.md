# Premium Courses Landing Page

A high-converting landing page for a premium digital courses product offering 50TB+ of content for $15 lifetime access.

## 🚀 Features

- **High-Converting Design**: Optimized for maximum conversion rates
- **Mobile-First Responsive**: Perfect experience on all devices
- **Performance Optimized**: Fast loading with Core Web Vitals monitoring
- **Analytics Ready**: Google Analytics and Facebook Pixel integration
- **Conversion Tracking**: Complete funnel tracking and optimization
- **Error Handling**: Robust error boundaries and performance monitoring
- **Exit Intent**: Smart exit-intent modal to recover abandoning visitors

## 🛠 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development and building
- **Lucide React** for icons
- **Custom Analytics** utilities
- **Performance Monitoring** with Core Web Vitals

## 📦 Installation

1. Clone or navigate to the project directory:
```bash
cd premium-courses-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🏗 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📊 Analytics Setup

To enable analytics tracking, update the analytics configuration in `src/App.tsx`:

```typescript
analytics.initialize({
  gtag: 'YOUR_GA4_MEASUREMENT_ID', // Replace with your Google Analytics 4 ID
  facebook: 'YOUR_FB_PIXEL_ID', // Replace with your Facebook Pixel ID
});
```

## 🎯 Key Sections

### Hero Section
- Compelling headline with value proposition
- Animated elements and gradient backgrounds
- Primary CTA button with tracking

### Value Proposition
- Key benefits with icons
- Price comparison showing massive savings
- Trust indicators and guarantees

### Content Showcase
- 8 content categories with descriptions
- Featured gurus including Andrew Tate, Iman Gadzhi, Alex Hormozi
- Course counts and specialties

### Social Proof
- Customer testimonials with ratings
- Usage statistics and trust indicators
- Verification badges

### Pricing Section
- Clear pricing with savings emphasis
- Feature list and guarantees
- Multiple CTA buttons with tracking
- Value comparison table

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0a0a0a',    // Dark background
  accent: '#ffd700',     // Gold accent
  secondary: '#ffffff',  // White text
  success: '#10b981',    // Green for success
  warning: '#f59e0b',    // Orange for urgency
}
```

### Content
- Update product information in component props
- Modify testimonials in `SocialProof` component
- Change featured gurus in `ContentShowcase` component
- Adjust pricing in `PricingSection` component

### Analytics Events
The following events are automatically tracked:
- Page views
- CTA button clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Section views
- Purchase intent
- Exit intent interactions

## 📱 Mobile Optimization

- Touch targets minimum 44px
- Responsive typography scaling
- Mobile-optimized navigation
- Smooth scrolling and animations
- Performance optimized for 3G networks

## ⚡ Performance Features

- Code splitting for optimal loading
- Lazy loading for below-the-fold content
- WebP image format support
- Core Web Vitals monitoring
- Error boundary protection
- Resource loading optimization

## 🎨 Design System

The landing page uses a comprehensive design system with:
- Typography hierarchy (hero, section, subsection, card, body, small)
- Consistent spacing utilities
- Accessibility-compliant contrast ratios
- Responsive breakpoints
- Animation utilities

## 📈 Conversion Optimization

- Above-the-fold value proposition
- Multiple CTA buttons throughout the page
- Social proof and testimonials
- Scarcity and urgency elements
- Exit-intent modal
- Trust signals and guarantees
- Mobile-optimized checkout flow

## 🚀 Deployment

The built application can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## 📄 License

This project is for educational and commercial use.